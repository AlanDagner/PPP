import { pool } from '../database'

export const listarCargo = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_cargo()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar cargos');
    }
};

export const listarCargoId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_cargo_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar cargo');
    }
};


export const crearCargo = async(req,res)=>{
    try {
        const{nombre}= req.body;
        await pool.query('select *from fc_crear_cargo($1)',[nombre]);
        return res.status(200).json({
            message:'Cargo registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar cargo ...!');
    }
};

export const actualizarCargo = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombre} = req.body;
        await pool.query('select *from fc_actualizar_cargo($1, $2)',[nombre, id]);
        return res.status(200).json({
            message:'Cargo modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar cargo ...!');
    }
};

export const eliminarCargo = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_cargo($1)',[id]);
        return res.status(200).json({
            message:'Cargo eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar cargo...!');
    }
};
