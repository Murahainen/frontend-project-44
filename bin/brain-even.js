#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { runBrainEvenGame } from '../src/games/brain-even-game.js';

startGame(runBrainEvenGame);
