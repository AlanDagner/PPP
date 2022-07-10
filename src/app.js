import express from 'express'
import morgan from 'morgan'

import cargoRoutes from './routes/cargo.routes'
//import practicaRoutes from './routes/practica.routes'
import evaluadorRoutes from './routes/evaluador.routes'
import empresaRoutes from './routes/empresa.routes'
import empresa_cargoRoutes from './routes/empresa_cargo.routes'
//import documentoRoutes from './routes/documento.routes'
import personaRoutes from './routes/persona.routes'
import solicitudRoutes from './routes/solicitud.routes'
import estudianteRoutes from './routes/estudiante.routes'


const app=express();
var cors=require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Bienvenido a Node JS...!');

});


app.use('/api/auth/cargo', cargoRoutes);
//app.use('/api/auth/practica', practicaRoutes);
app.use('/api/auth/evaluador', evaluadorRoutes);
app.use('/api/auth/empresa', empresaRoutes);
app.use('/api/auth/empresa_cargo', empresa_cargoRoutes);
//app.use('/api/auth/documento', documentoRoutes);
app.use('/api/auth/persona', personaRoutes);
app.use('/api/auth/solicitud', solicitudRoutes);
app.use('/api/auth/estudiante', estudianteRoutes);

export default app;