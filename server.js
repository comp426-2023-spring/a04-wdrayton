import minimist from 'minimist';
import 'rps-cli';
import 'rpsls-cli';
import 'fs';
import 'http';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

const port = args.port || process.env.port || 5000;

const shot = String(args.data);

