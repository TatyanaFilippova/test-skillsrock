const str = "А роза упала на лапу Азора";

function isPalindrome(str) {
  const _str = str.toLowerCase().split(" ").join(""); //получаю строку с удаленными пробелами и в нижнем регистре
  const _strReversed = _str.split("").reverse().join("") // строка наоборот 
  if (_str === _strReversed) {
    return true;
  }
  return false;
}

console.log(isPalindrome(str));
