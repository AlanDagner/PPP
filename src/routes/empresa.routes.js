import { Router } from 'express'

const router = Router();
import * as empresaCtrl from '../controllers/empresa.controller'

router.get('/', empresaCtrl.listarEmpresa);
router.get('/:id', empresaCtrl.listarEmpresaId);
router.post('/', empresaCtrl.crearEmpresa);
router.put('/:id', empresaCtrl.actualizarEmpresa);
router.delete('/:id', empresaCtrl.eliminarEmpresa);

export default router;