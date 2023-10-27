import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Generated';
// const colors = {
  // black: '#111111',
  // white: '#FFFFFF',
  // blue: '#5555FF',
  // red: '#FF5555',
  // green: '#55FF55',
  // yellow: '#FFFF33'
// }

const colorSet: IColorSet = {
  base: {
    background: '#0f172a',
    foreground: '#e2e8f0',
    color1: '#38bdf8',
    color2: '#f472b6',
    color3: '#6366f1',
    color4: '#f0e100'
  },
  syntax: {
    string: '#79cdf5',
    function: '#6366f1',
    boolean: '#f472b6',
    comment: '#94a3b8',
    functionCall: '#6366f1',
    class: '#6366f1',
    classMember: '#6366f1',
    type: '#6366f1',
    number: '#f472b6',
    identifier: '#f472b6',
    keyword: '#38bdf8'
  },

};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));