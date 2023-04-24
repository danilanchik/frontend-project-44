#!/usr/bin/env node
import runGame from '../src/index.js';
import * as brainGamesPrime from '../src/games/brain-games-prime.js';

runGame(brainGamesPrime.gameDescription, brainGamesPrime.generateGameData);
