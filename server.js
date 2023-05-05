import minimist from 'minimist';
import {playRPS} from "./lib/rpsls.js";
import {playRPSLS} from "./lib/rpsls.js";
import express from 'express';
// import 'fs';
// import 'http';

const args = minimist(process.argv.slice(2));

const app = express();

const port = args.port || process.env.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.send("200 OK");
    res.end();
});

//RPS games
app.get('/app/rps/', (req, res) => {
    res.send(playRPS(''));
    res.end();
});

app.get('/app/rps/play/', (req, res) => {
    const shot = req.query.shot;
    res.send(JSON.parse(playRPS(shot)));
    res.end();
});

app.post('/app/rps/play/', (req, res) => {
    const shot = req.body.shot;
    res.send(JSON.parse(playRPS(shot)));
    res.end();
});

app.get('/app/rps/play/:shot', (req, res) => {
    const shot = req.params.shot;
    res.send(JSON.parse(playRPS(shot)));
    res.end();
});

//RPSLS games
app.get('/app/rpsls/', (req, res) => {
    res.send(playRPSLS(''));
    res.end();
})

app.get('/app/rpsls/play/', (req, res) => {
    const shot = req.query.shot;
    res.send(JSON.parse(playRPSLS(shot)));
    res.end();
});

app.post('/app/rpsls/play/', (req, res) => {
    const shot = req.body.shot;
    res.send(JSON.parse(playRPSLS(shot)));
    res.end();
});

app.get('/app/rpsls/play/:shot', (req, res) => {
    const shot = req.params.shot;
    res.send(JSON.parse(playRPSLS(shot)));
    res.end();
});

//Error
app.use((req, res) => {
    res.statusCode = 404;
    res.send("404 NOT FOUND");
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});


