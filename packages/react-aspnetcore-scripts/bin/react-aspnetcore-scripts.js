#!/usr/bin/node

'use strict';

const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
    x => x === 'build' || x === 'eject' || x === 'start' || x === 'test'
);
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

switch (script) {
    case 'build':
    case 'eject':
    case 'start':
    case 'test': {
        // TODO
    }
}