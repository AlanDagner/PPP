import { Router } from 'express'

const router = Router();
import * as practicaCtrl from '../controllers/practica.controller'

router.get('/', practicaCtrl.listarPractica);
router.get('/:id', practicaCtrl.listarPracticaId);
router.post('/', practicaCtrl.crearPractica);
router.put('/:id', practicaCtrl.actualizarPractica);
router.delete('/:id', practicaCtrl.eliminarPractica);

export default router;