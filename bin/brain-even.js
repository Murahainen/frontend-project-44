#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { runBrainEvenGame } from '../games/brain-even-game.js';

startGame(runBrainEvenGame);
