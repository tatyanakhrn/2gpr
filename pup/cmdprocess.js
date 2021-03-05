#!/usr/bin/env node

import {start} from './index.js'
import { Command } from 'commander';
const program = new Command();
import chalk from 'chalk'
import figlet from 'figlet'

console.log(
    chalk.blue(
      figlet.textSync('data', { horizontalLayout: 'full' })
    )
  )

program
    .version('1.0.0')
    .command('parse <name>')
    .alias('p')
    .description('Parse choosen city')
    .action((name, cmd) => {
        start(name);
        console.log(
            chalk.green('Parsing done')
        );
    })

program.parse(process.argv);