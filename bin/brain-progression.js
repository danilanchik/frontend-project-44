#!/usr/bin/env node
import runGame from '../src/index.js';
import * as brainGamesProgression from '../src/games/brain-games-progression.js';

runGame(brainGamesProgression.gameDescription, brainGamesProgression.generateGameData);
