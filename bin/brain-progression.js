#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { runBrainProgressionGame } from '../games/brain-progression-game.js';

startGame(runBrainProgressionGame);