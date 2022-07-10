import { Router } from 'express'

const router = Router();
import * as estudianteCtrl from '../controllers/estudiante.controller'

router.get('/', estudianteCtrl.listarEstudiante);
router.get('/:id', estudianteCtrl.listarEstudianteId);
router.post('/', estudianteCtrl.crearEstudiante);
router.put('/:id', estudianteCtrl.actualizarEstudiante);
router.delete('/:id', estudianteCtrl.eliminarEstudiante);

export default router;