//path es una propiedad de Node que permite encontrar carpetas en el proyecto
const path = require('path');
const express = require('express');

const startServer = (options) => {
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
        console.log(`listen on port: ${port}`)
    })
    
}

module.exports = {
    startServer
}