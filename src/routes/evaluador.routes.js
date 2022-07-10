import { Router } from 'express'

const router = Router();
import * as evaluadorCtrl from '../controllers/evaluador.controller'

router.get('/', evaluadorCtrl.listarEvaluador);
router.get('/:id', evaluadorCtrl.listarEvaluadorId);
router.post('/', evaluadorCtrl.crearEvaluaador);
router.put('/:id', evaluadorCtrl.actualizarEvaluador);
router.delete('/:id', evaluadorCtrl.eliminarEvaluador);

export default router;