#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { runBrainPrimeGame } from '../games/brain-prime-game.js';

startGame(runBrainPrimeGame);