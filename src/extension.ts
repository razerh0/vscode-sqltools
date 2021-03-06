/// <reference path="./../node_modules/@types/node/index.d.ts" />

import { ExtensionContext } from 'vscode';
import Constants from './constants';
import ST from './sqltools';

export function activate(ctx: ExtensionContext) {
  ST.bootstrap(ctx);
}
