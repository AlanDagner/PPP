/*import { pool } from '../database'

export const listarEvaluacion = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_evaluacion()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar evaluaciones');
    }
};

export const listarEvaluacionId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_evaluacion_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar evaluacion');
    }
};


export const crearEvaluacion = async(req,res)=>{
    try {
        const{id_practica, idevaluador, id_item_detalle}= req.body;
        await pool.query('select *from fc_crear_evaluacion($1, $2, $3)',[id_practica, idevaluador, id_item_detall]);
        return res.status(200).json({
            message:'Evaluacion registrada correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar evaluacion ...!');
    }
};

export const actualizarEvaluacion = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_practica, idevaluador, id_item_detall} = req.body;
        await pool.query('select *from fc_actualizar_evaluacion($1, $2, $3, $4)',[id_practica, idevaluador, id_item_detall, id]);
        return res.status(200).json({
            message:'Evaluacion modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar evaluacion ...!');
    }
};

export const eliminarEvaluacion = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_evaluacion($1)',[id]);
        return res.status(200).json({
            message:'Evaluacion eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar evaluacion ...!');
    }
};
*/