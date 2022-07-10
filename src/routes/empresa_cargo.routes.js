import { Router } from 'express'

const router = Router();
import * as empresa_cargoCtrl from '../controllers/empresa_cargo.controller'

router.get('/',empresa_cargoCtrl.listarEmpresa_cargo);
router.get('/:id',empresa_cargoCtrl.listarEmpresa_cargoId);
router.post('/', empresa_cargoCtrl.crearEmpresa_cargo);
router.put('/:id',empresa_cargoCtrl.actualizarEmpresa_cargo);
router.delete('/:id',empresa_cargoCtrl.eliminarEmpresa_cargo);


export default router;
