import { pool } from '../database'

export const listarEvaluador = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_evaluador()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar evaluadores');
    }
};

export const listarEvaluadorId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_evaluador_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar evaluador');
    }
};


export const crearEvaluaador = async(req,res)=>{
    try {
        const{dni, id_grado, id_persona}= req.body;
        await pool.query('select *from fc_crear_evaluador($1, $2, $3)',[dni, id_grado, id_persona]);
        return res.status(200).json({
            message:'Evaluador registrada correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar evaluador ...!');
    }
};

export const actualizarEvaluador = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {dni, id_grado, id_persona} = req.body;
        await pool.query('select *from fc_actualizar_evaluador($1, $2, $3, $4)',[dni, id_grado, id_persona, id]);
        return res.status(200).json({
            message:'Evaluacion modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar evaluador ...!');
    }
};

export const eliminarEvaluador = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_evaluador($1)',[id]);
        return res.status(200).json({
            message:'Evaluador eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar evaluador ...!');
    }
};
