export const handleGuess = (codeArray, guessArray) => {
  const keyArray = [];
  let key;

  if (codeArray === guessArray) {
    return true;
  }
  
  for (let i = 0; i < codeArray.length; i++) {
    key = 0;

    for (let j = 0; j < guessArray.length; j++) {
      if (guessArray[j] === codeArray[i]) {
        if (j === i) {
          key = 1;
          break;
        } else {
          key = 2;
        }
      }
    }

    if (key > 0) {
      keyArray.push(key);
    }
  }

  if (keyArray.length > 1) {
    return randomizeKey(keyArray);
  } else {
    return keyArray;
  }
};

export const generateMasterCode = (codeLen, numColors) => {
  let codeArray = [];

  for (let i = 0; i < codeLen; i++) {
    codeArray.push(Math.floor(Math.random() * numColors) + 1);
  }

  return codeArray;
};

export const generateBoardRows = (codeLen, numGuesses) => {
  const boardArray = [];
  const codePegs = [];
  const keyPegs = [];

  for (let i = 0; i < codeLen; i++) {
    codePegs.push(0);
    keyPegs.push(0);
  }

  for (let j = 0; j < numGuesses; j++) {
    boardArray.push({
      codePegs: codePegs.slice(),
      keyPegs: keyPegs.slice()
    });
  }

  return boardArray;
};

const randomizeKey = keyArray => {
  let randomizedArray = [];
  let randomIndex;

  while (keyArray.length > 0) {
    randomIndex = Math.floor(Math.randomn * keyArray.length);

    randomizedArray.push(keyArray.splice(randomIndex, 1));
  }

  return randomizedArray;
};