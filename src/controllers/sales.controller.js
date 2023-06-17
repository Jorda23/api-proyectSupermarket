import { salesModel } from "../models/sales.model.js";
import { saleDetailModel } from "../models/saleDetail.model.js";
import { productsModel } from "../models/products.model.js";
import sequelize from "../database/connection.js";
import { validationResult } from "express-validator";

export const findAllInvoice = async (req, res) => {
  try {
    const invoice = await salesModel.findAll({
      include: [{ model: saleDetailModel, include: [productsModel] }],
    });

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

export const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const columns = req.body;

  const invoice = {
    client: columns.client,
    totalInvoice: 0,
  };

  const invoiceDetails = columns.information;

  const t = await sequelize.transaction();

  try {
    const createdInvoice = await salesModel.create(invoice, {
      transaction: t,
    });

    let invoiceTotal = 0;

    for (const detail of invoiceDetails) {
      detail.idSale = createdInvoice.idSale;

      const product = await productsModel.findByPk(detail.productId, {
        transaction: t,
      });

      detail.price = product.price; // Asignar el valor del campo price del producto al campo price del detalle de la factura

      detail.total = detail.price * detail.qty;
      invoiceTotal += detail.total;

      if (product != null && product.stock >= detail.qty) {
        const createdDetail = await saleDetailModel.create(detail, {
          transaction: t,
        });

        product.stock -= detail.qty;

        await product.save({ transaction: t });
      } else {
        if (t.finished !== "rollback" && t.finished !== "commit") {
          await t.rollback();
        }
        throw new Error(
          `There is not enough stock of this product: ${product.productName}`
        );
      }
    }

    await createdInvoice.update(
      { totalInvoice: invoiceTotal },
      { transaction: t }
    );

    await t.commit(); // The transaction is committed using transaction.commit().

    res.status(201).json({ message: "Sale created successfully" });
  } catch (error) {
    if (t.finished !== "rollback" && t.finished !== "commit") {
      await t.rollback(); // If any error occurs, the transaction is rolled back using transaction.rollback()
    }
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

export const findOneInvoiceDetail = async (req, res) => {
  const { idSale } = req.params;

  try {
    const invoice = await salesModel.findOne({
      where: { idSale },
      include: [{ model: saleDetailModel, include: [productsModel] }],
    });

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not Found!" });
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};
