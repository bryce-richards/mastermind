import { pegIconSize, pegColSize, themes, keyColors } from './constants';

export const handleGuess = (master, guess) => {
  const masterCount = {};
  let guessMatches = 0;
  const guessCount = {};
  const initialKeys = {};
  const lowerDenom = {};
  let finalKeys = [];

  for (let [masterIndex, masterColor] of master.entries()) {
    if (!masterCount[masterColor]) {
      masterCount[masterColor] = 1;
    } else {
      masterCount[masterColor]++;
    }
    
    guessMatches = guess.filter(color => color === masterColor).length;
    
    if (guessMatches && !guessCount[masterColor]) {
      guessCount[masterColor] = guessMatches;
    }
    
    for (let [guessIndex, guessColor] of guess.entries()) {
      if (guessColor === masterColor) {
        if (!initialKeys[masterColor]) {
          initialKeys[masterColor] = [];
        }

        if (guessIndex === masterIndex) {
          initialKeys[masterColor].unshift(1);
        } else {
          initialKeys[masterColor].push(2);
        }
      }
    }
  }

  for (let color in initialKeys) {
    lowerDenom[color] = guessCount[color] <= masterCount[color] ? guessCount[color] : masterCount[color];
    finalKeys = [...finalKeys, ...initialKeys[color].slice(0, 0 + lowerDenom[color])];
  }

  while (finalKeys.length < master.length) {
    finalKeys.push(0);
  }

  return randomizeKey(finalKeys);
};

const randomizeKey = key => {
  const randomizedArray = [];
  let randomIndex;

  while (key.length > 0) {
    randomIndex = Math.floor(Math.random() * key.length);
    randomizedArray.push(key.splice(randomIndex, 1)[0]);
  }

  return randomizedArray;
};

export const createNewMaster = (codeLength, numColors) => {
  const newMaster = [];

  for (let i = 0; i < codeLength; i++) {
    newMaster.push(Math.floor(Math.random() * numColors) + 1);
  }

  return newMaster;
};

export const createNewBoard = (codeLength, numGuesses) => {
  const newBoard = [],
        emptyCode = [],
        emptyKey = [];

  // build empty row
  for (let i = 0; i < codeLength; i++) {
    emptyCode.push(0);
    emptyKey.push(0);
  }

  // build board
  for (let j = 0; j < numGuesses; j++) {
    newBoard.push({
      code: emptyCode.slice(),
      key: emptyKey.slice()
    });
  }

  return newBoard;
};

export const mapPaletteState = (state, ownProps) => {
  const { type, color } = ownProps;
  const { palette: { activeColor },  } = state;
  const colSize = pegColSize[type];
  const index = ownProps.index;
  const iconSize = pegIconSize[type];
  let colorHex = "";
  let selected = false;

  if (color === activeColor && type === "palette") {
    selected = true;
  }

  let onPegClick = () => {};
  if (ownProps.hasOwnProperty("onPegClick")) {
    onPegClick = ownProps.onPegClick;
  }

  const { 
    palette: {
      theme
    }
  } = state;

  if (type === "key") {
    colorHex = keyColors;
  } else {
    colorHex = themes[theme];
  }

  return {  
    type,
    iconSize,
    colSize,
    index,
    color,
    selected,
    colorHex,
    onPegClick
  }
}