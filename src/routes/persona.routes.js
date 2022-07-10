import { Router } from 'express'

const router = Router();
import * as personaCtrl from '../controllers/persona.controller'

router.post('/', personaCtrl.crearPersona);
router.put('/:id',personaCtrl.actualizarPersona);
router.delete('/:id',personaCtrl.eliminarPersona);
router.get('/',personaCtrl.listarPersona);
router.get('/:id',personaCtrl.listarPersonaId);

export default router;