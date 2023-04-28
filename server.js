import minimist from 'minimist';
import {playRPS} from "./lib/rpsls.js";
import {playRPSLS} from "./lib/rpsls.js";
import express from 'express';
// import 'fs';
// import 'http';

const args = minimist(process.argv.slice(2));

const app = express();

const port = args.port || process.env.port || 5000;

const shot = args.data;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.send("200 OK");
    res.end();
});

//RPS games
app.get('/app/rps/', (req, res) => {
    res.send(playRPS(shot));
    res.end();
});

app.get('/app/rps/play/', (req, res) => {
    res.send(playRPS(shot));
    res.end();
});

app.get('/app/rps/play/' + ('rock/'|'paper/'|'scissors/'), (req, res) => {
    res.send(playRPS(shot));
    res.end();
});

//RPSLS games
app.get('/app/rpsls/', (req, res) => {
    res.send(playRPSLS(shot));
    res.end();
})

app.get('/app/rpsls/play/', (req, res) => {
    res.send(playRPSLS(shot));
    res.end();
});

app.get('/app/rpsls/play/' + ('rock/'|'paper/'|'scissors/'|'lizard/'|'spock/'), (req, res) => {
    res.send(playRPSLS(shot));
    res.end();
});

//Error
app.use((req, res) => {
    res.statusCode(404).send("404 NOT FOUND")
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});


