import express from 'express';
const router = express.Router();

import { injectUserContextMdlw, enforceAdminRoleOrThrowMdlw } from '../../../UserManagement/feature/authentication/controller/authenticationMiddleware.js';



router.get('/category', (req, res) => {
    return res.status(200).send({"message": "yes"})
});


export default router;