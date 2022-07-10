import { pool } from '../database'

export const listarEstudiante = async (req,res)=>{
    try {
        const response = await pool.query('Select *from fc_listar_estudiante()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar estediantes');
    }
};

export const listarEstudianteId = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_estudiante_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar estudiante');
    }
};


export const crearEstudiante = async(req,res)=>{
    try {
        const{codigo, id_persona, ciclo}= req.body;
        await pool.query('select *from fc_crear_estudiante($1, $2, $3)',[codigo, id_persona, ciclo]);
        return res.status(200).json({
            message:'Estudiante registrado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar estudiante ...!');
    }
};

export const actualizarEstudiante = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {codigo, id_persona, ciclo} = req.body;
        await pool.query('select *from fc_actualizar_estudiante($1, $2, $3, $4)',[codigo, id_persona, ciclo, id]);
        return res.status(200).json({
            message:'Estudiante modificado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar estudiante ...!');
    }
};

export const eliminarEstudiante = async(req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_eliminar_estudiante($1)',[id]);
        return res.status(200).json({
            message:'Estudiante eliminado correctamente ...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar estudiante ...!');
    }
};
