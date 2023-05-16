import { Router } from 'express';
import routeUser from "./user.route.js"
import routePosition from './position.route.js';
import routeEmployees from './employees.route.js';
import routePermission from './permission.route.js';
import routeRole from './role.route.js'
import routeUserRole from './userRole.route.js'
import routetRolePermission from './rolePermission.route.js'
import routeSupplier from './suppplier.route.js';
import routeProducts from './products.route.js';
import routeSales from './sales.route.js';
import routeSaleDetail from './saleDetail.route.js';
import routeCategory from './category.route.js';
import routeProductCategory from './productCategory.route.js';
import routeOrders from './orders.route.js';
import routeOrderDetail from './orderDetail.route.js'

const router = Router();

router.use(routePermission);
router.use(routeEmployees);
router.use(routeUser);
router.use(routePosition);
router.use(routeRole);
router.use(routeUserRole);
router.use(routetRolePermission);
router.use(routeSupplier);
router.use(routeProducts);
router.use(routeSales);
router.use(routeSaleDetail);
router.use(routeCategory);
router.use(routeProductCategory);
router.use(routeOrders);
router.use(routeOrderDetail);

export default router;
