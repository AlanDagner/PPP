import { pool } from '../database'

export const listarEmpresa_cargo = async (req,res)=>{
    try {
        const response = await pool.query('select *from fc_listar_empresa_cargo()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al lista');
    }
};

export const listarEmpresa_cargoId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_empresa_cargo_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar');
    }
};

export const crearEmpresa_cargo = async(req,res)=>{
    try {
        const{id_empresa, id_cargo, id_persona}= req.body;
        await pool.query('select *from fc_crear_empresa_cargo($1, $2, $3)',[id_empresa, id_cargo, id_persona]);
        return res.status(200).json({
            message:'Registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar ...!');
    }
};


export const actualizarEmpresa_cargo = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {id_empresa, id_cargo, id_persona} = req.body;
        await pool.query('select *from fc_actualizar_empresa_cargo($1, $2, $3, $4)',[id_empresa, id_cargo, id_persona, id]);
        return res.status(200).json({
            message:'Modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar ...!');
    }
};

export const eliminarEmpresa_cargo = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_empresa_cargo($1)',[id]);
        return res.status(200).json({
            message:'Eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar ...!');
    }
};
