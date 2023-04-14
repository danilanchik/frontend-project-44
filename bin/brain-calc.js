#!/usr/bin/env node
import runGame from '../src/index.js';
import * as brainGamesCalc from '../src/games/brain-games-calc.js';

runGame(brainGamesCalc.gameDescription, brainGamesCalc.generateGameData);
