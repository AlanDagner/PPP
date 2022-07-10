/*import { pool } from '../database'

export const listarPractica = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_practica()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar practicas');
    }
};

export const listarPracticaId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_practica_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar practica');
    }
};


export const crearPractica = async(req,res)=>{
    try {
        const{fecha_inicio, fecha_fin, id_carta_presentacion}= req.body;
        await pool.query('select *from fc_crear_practica($1, $2, $3)',[fecha_inicio, fecha_fin, id_carta_presentacion]);
        return res.status(200).json({
            message:'Practica registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar practica ...!');
    }
};

export const actualizarPractica = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {fecha_inicio, fecha_fin, id_carta_presentacion} = req.body;
        await pool.query('select *from fc_actualizar_practica($1, $2, $3, $4)',[fecha_inicio, fecha_fin, id_carta_presentacion, id]);
        return res.status(200).json({
            message:'Practica modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar practica ...!');
    }
};

export const eliminarPractica = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_practica($1)',[id]);
        return res.status(200).json({
            message:'Practica eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar practica ...!');
    }
};
*/