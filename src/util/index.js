import loggerModule from './logger/index.js';
import {db as dbModule} from './db/index.js';
import * as networkModule from './network/index.js';

export const logger = loggerModule();
export const db = dbModule;
export const network = networkModule;
