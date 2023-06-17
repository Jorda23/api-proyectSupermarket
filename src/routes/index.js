import { Router } from 'express';
import routeUser from "./user.route.js"
import routePosition from './position.route.js';
import routeEmployees from './employees.route.js';
import routePermission from './permission.route.js';
import routeSupplier from './suppplier.route.js';
import routeProducts from './products.route.js';
import routeSales from './sales.route.js';
import routeCategory from './category.route.js';
import routeOrders from './orders.route.js';
import routeOrderDetail from './orderDetail.route.js'

const router = Router();

router.use(routeUser);
router.use(routePermission);
router.use(routeEmployees);
router.use(routePosition);
router.use(routeSupplier);
router.use(routeCategory);
router.use(routeProducts);
router.use(routeSales);
router.use(routeOrders);
router.use(routeOrderDetail);

export default router;
