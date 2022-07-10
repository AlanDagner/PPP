import { Router } from 'express'

const router = Router();
import * as solicitudCtrl from '../controllers/solicitud.controller'

router.get('/', solicitudCtrl.listarSolicitud);
router.get('/:id', solicitudCtrl.listarSolicitudId);
router.post('/', solicitudCtrl.crearSolicitud);
router.put('/:id', solicitudCtrl.actualizarSolicitud);
router.delete('/:id', solicitudCtrl.eliminarSolicitud);

export default router;
