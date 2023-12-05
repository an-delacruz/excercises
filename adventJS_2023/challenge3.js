function findNaughtyStep(original, modified) {
  // Code here
  if (original.length == 0) return "";

  let firstExtraStep = "";
  let originalArray = original.split("");
  let modifiedArray = modified.split("");

  let i = 0;
  while (originalArray.length) {
    if (originalArray[i] != modifiedArray[i]) {
      firstExtraStep = originalArray[i];

      //   if (originalArray[i + 1] == modifiedArray[i]) {
      //     firstExtraStep = originalArray[i];
      //   }
      //   else {
      //     firstExtraStep = modifiedArray[i];
      //   }

      return firstExtraStep;
    }
    originalArray.shift();
    modifiedArray.shift();
  }

  if (modifiedArray.length > 0 && firstExtraStep == "") {
    firstExtraStep = modifiedArray[i];
  }

  return firstExtraStep;
}

const original = "abcd";
const modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'

const original1 = "stepfor";
const modified1 = "stepor";
console.log(findNaughtyStep(original1, modified1)); // 'f'

const original2 = "abcde";
const modified2 = "abcde";
console.log(findNaughtyStep(original2, modified2)); // ''

const original3 = "aaa";
const modified3 = "aa";
console.log(findNaughtyStep(original3, modified3)); // 'a'
