import { Router } from 'express';
import { validateRequest } from '../../middlewares/validate_request';
import { adminLoginSchema } from '../../validators/admin/auth';
import { adminLogin } from '../../controllers/admin/auth';
import productRouter from './product';
import orderRouter from './order';

const adminRouter = Router();

adminRouter.post('/login', validateRequest(adminLoginSchema), adminLogin);
adminRouter.use('/product', productRouter);
adminRouter.use('/order', orderRouter);

export default adminRouter;
