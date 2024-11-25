#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { runBrainGcdGame } from '../games/brain-gcd-game.js';

startGame(runBrainGcdGame);