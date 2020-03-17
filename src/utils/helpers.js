export const handleGuess = (master, guess) => {
  const keyArray = [];
  let key;
  
  for (let i = 0; i < master.length; i++) {
    key = 0;

    for (let j = 0; j < guess.length; j++) {
      if (guess[j] === master[i]) {
        if (j === i) {
          key = 1;
          break;
        } else {
          key = 2;
        }
      }
    }

    keyArray.push(key);
  }

    return randomizeKey(keyArray);
};

const randomizeKey = key => {
  const randomizedArray = [];
  let randomIndex;

  while (key.length > 0) {
    randomIndex = Math.floor(Math.random * key.length);
    randomizedArray.push(key.splice(randomIndex, 1));
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