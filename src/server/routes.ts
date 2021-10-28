import { Router } from 'express';
import { authController } from "../controllers/authController"
const router = Router();

export { router }

router.post('/auth/register', new authController().register)
router.post('/auth/authenticate', new authController().authenticate)

