import { pool } from '../database'

export const listarSolicitud = async (req,res)=>{
    try {
        const response = await pool.query('select *from fc_listar_solicitud()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar solicitudes');
    }
};


export const listarSolicitudId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_solicitud_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar solicitud');
    }
};

export const crearSolicitud = async(req,res)=>{
    try {
        const{id_empresa}= req.body;
        await pool.query('select *from fc_crear_solicitud($1)',[id_empresa]);
        return res.status(200).json({
            message:'Solicitud registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar solicitud ...!');
    }
};

export const actualizarSolicitud = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombre_empresa, nombre_dirigido, cargo_dirigido, idestudiante} = req.body;
        await pool.query('select *from fc_actualizar_solicitud($1, $2)',[id_empresa, id]);
        return res.status(200).json({
            message:'La Solicitud se a modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar solicitud ...!');
    }
};

export const eliminarSolicitud = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_solicitud($1)',[id]);
        return res.status(200).json({
            message:'La solicitud se a eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar solicitud ...!');
    }
};
