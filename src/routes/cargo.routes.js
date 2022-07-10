import { Router } from 'express'

const router = Router();
import * as cargoCtrl from '../controllers/cargo.controller'

router.get('/', cargoCtrl.listarCargo);
router.get('/:id', cargoCtrl.listarCargoId);
router.post('/', cargoCtrl.crearCargo);
router.put('/:id', cargoCtrl.actualizarCargo);
router.delete('/:id', cargoCtrl.eliminarCargo);

export default router;