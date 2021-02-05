import words from "../data/dictionary.json";

function loadDictionariesToLocalStorage() {
  const {
    easyLevelDictionary,
    mediumLevelDictionary,
    hardLevelDictionary,
  } = getDifferentLevelsOfDictionaries(words);

  saveDictionaries(
    easyLevelDictionary,
    mediumLevelDictionary,
    hardLevelDictionary
  );
}

function saveDictionaries(
  easyLevelDictionary,
  mediumLevelDictionary,
  hardLevelDictionary
) {
  localStorage.setItem(
    "easyLevelDictionary",
    JSON.stringify(easyLevelDictionary)
  );
  localStorage.setItem(
    "mediumLevelDictionary",
    JSON.stringify(mediumLevelDictionary)
  );
  localStorage.setItem(
    "hardLevelDictionary",
    JSON.stringify(hardLevelDictionary)
  );
}

function getDifferentLevelsOfDictionaries(words) {
  const easyLevelWords = words.filter((word) => word.length < 4);
  const mediumLevelWords = words.filter(
    (word) => word.length >= 4 && word.length < 7
  );
  const hardLevelWords = words.filter((word) => word.length > 7);

  const easyLevelDictionary = {
    words: easyLevelWords,
    size: easyLevelWords.length,
  };

  const mediumLevelDictionary = {
    words: mediumLevelWords,
    size: mediumLevelWords.length,
  };

  const hardLevelDictionary = {
    words: hardLevelWords,
    size: hardLevelWords.length,
  };

  return { easyLevelDictionary, mediumLevelDictionary, hardLevelDictionary };
}

function getDictionary(dictionaryName) {
  let words = localStorage.getItem(dictionaryName);
  return JSON.parse(words);
}

function saveDisplayedWordToLocalStorage(word) {
  const { words } = getDictionary("typedWords");
  words.push(word);
  localStorage.setItem("typedWords", JSON.stringify(words));
}

function isWordDisplayedBefore(word) {
  const { words } = getDictionary("typedWords");
  return words.include(word);
}

function isDictionaryPopulated(dictionaryName) {
  const dictionary = getDictionary(dictionaryName);
  if (dictionary) {
    return dictionary.size > 100;
  }

  return false;
}

function fetchRandomWordForLevel(level) {
  switch (level) {
    case "Easy":
      return fetchRandomWordFromDictionary("easyLevelDictionary").toUpperCase();
    case "Medium":
      return fetchRandomWordFromDictionary(
        "mediumLevelDictionary"
      ).toUpperCase();
    case "Hard":
      return fetchRandomWordFromDictionary("hardLevelDictionary").toUpperCase();
    default:
      return "Wrong Level Selected";
  }
}

function calculateRandomIndex(upperBound) {
  return Math.floor(Math.random() * upperBound);
}

function fetchRandomWordFromDictionary(dictionaryName) {
  const { words, size } = getDictionary(dictionaryName);
  const randomIndex = calculateRandomIndex(size);
  return words[randomIndex];
}

function areDictionariesAddedToLocalStorage() {
  return (
    isDictionaryPopulated("easyLevelDictionary") &&
    isDictionaryPopulated("mediumLevelDictionary") &&
    isDictionaryPopulated("hardLevelDictionary")
  );
}

export {
  loadDictionariesToLocalStorage,
  saveDisplayedWordToLocalStorage,
  isWordDisplayedBefore,
  areDictionariesAddedToLocalStorage,
  fetchRandomWordForLevel,
};
