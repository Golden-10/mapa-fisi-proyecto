import express from 'express';

const app = express();
const PORT = 5000;

const usuarios = [
   { id: 1, nombre: 'Juan' },
   { id: 2, nombre: 'María' },
   { id: 3, nombre: 'Pedro' }
];

app.get('/', (req, res) => {
   res.send('Hola mundo');
})

app.get('/usuarios', (req, res) => {
   res.json(usuarios);
});

app.listen(PORT, () => {
   console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
