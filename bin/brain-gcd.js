#!/usr/bin/env node

import runGame from '../src/index.js';
import * as brainGamesGcd from '../src/games/brain-games-gcd.js';

runGame(brainGamesGcd.gameDescription, brainGamesGcd.generateGameData);
