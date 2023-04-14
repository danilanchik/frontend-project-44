#!/usr/bin/env node
import runGame from '../src/index.js';
import * as brainGamesEven from '../src/games/brain-games-even.js';

runGame(brainGamesEven.gameDescription, brainGamesEven.generateGameData);
