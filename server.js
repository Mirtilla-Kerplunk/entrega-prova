/*
    Servidor back-end utilizando o módulo Express que manipula os métodos HTTP
    Get - Obter os dados
    Post - Criar os dados
    Put - Atualiza os dados
    Delete - Apaga os dados
*/

//importar o módulo Express, url e fs
// Esse módulo é instalado através do comando 'npm i express'

const express = require('express');
const fs = require('fs');
const app = express();

// rotas
app.get('/css/style.css', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
    
    const arquivocss = fs.readFileSync('../public/css/style.css');
    res.end(arquivocss);
});

app.get('/images/imagem01.png', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'image/png');
    
    const imagem = fs.readFileSync('../public/images/imagem01.png');
    res.end(imagem);
});

app.get('/images/imagem02.png', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'image/png');
    
    const imagem = fs.readFileSync('../public/images/imagem02.png');
    res.end(imagem);
});

app.get('/images/imagem03.png', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'image/png');
    
    const imagem = fs.readFileSync('../public/images/imagem03.png');
    res.end(imagem);
});



app.get('/', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    const arquivohtml1 = fs.readFileSync('./pages/index.html');
    res.end(arquivohtml1);
});

app.get('/produtoA', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
   
    const arquivohtml2 = fs.readFileSync('./pages/produtoA.html');
    res.end(arquivohtml2);
});

app.get('/produtoB', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    const arquivohtml3 = fs.readFileSync('./pages/produtoB.html');
    res.end(arquivohtml3);
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});