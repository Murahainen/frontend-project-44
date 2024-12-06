#!/usr/bin/env node

import { startGame } from '../src/index.js';
import runBrainGcdGame from '../src/games/brain-gcd-game.js';

startGame(runBrainGcdGame);
