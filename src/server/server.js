//ES6
//path es una propiedad de Node que permite encontrar carpetas en el proyecto
import path from 'path';
import express from'express';


export const startServer = (options) => {

    //Estos datos lo traemos de app.js y lo desesctruturamos acá
    const { port, public_path = 'public' } = options;
    const app = express();

    // Para poder usar middlewares "use"(express)
    // Contenido estático que ponemos disponible
    app.use(express.static(public_path));

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath);
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })
    
}
