import minimist from 'minimist';
import {playRPS} from "./lib/rpsls.js";
import {playRPSLS} from "./lib/rpsls.js";
import express from 'express';
// import 'fs';
// import 'http';

const args = minimist(process.argv.slice(2));

const app = express();

const port = args.port || process.env.port || 5000;

// if (args.data != null) {
//     const shot = args.data;
// } else {
//     const shot = null;
// }
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.send("200 OK");
    res.end();
});

app.get('/app/rps/', (req, res) => {
    res.statusCode = 200;
    res.send(playRPS(shot));
    res.end();
});

app.get('/app/rps/play/', (req, res) => {
    res.statusCode = 200;
    res.send(playRPS(shot));
    res.end();
});

app.get('/app/rps/play/' + ('rock/'|'paper/'|'scissors/'), (req, res) => {
    res.statusCode = 200;
    res.send(playRPS(shot));
    res.end();
});

app.get('/app/rpsls/', (req, res) => {
    res.statusCode = 200;
    res.send(playRPSLS(shot));
    res.end();
})

app.get('/app/rpsls/play/', (req, res) => {
    res.statusCode = 200;
    res.send(playRPSLS(shot));
    res.end();
});

app.get('/app/rpsls/play/' + ('rock/'|'paper/'|'scissors/'|'lizard/'|'spock/'), (req, res) => {
    res.statusCode = 200;
    res.send(playRPSLS(shot));
    res.end();
});

app.listen(port);

//send("404 NOT FOUND");


