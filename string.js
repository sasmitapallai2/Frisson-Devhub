// 1. indexOf
function indexOf(str, searchValue) {
  let searchLen = searchValue.length;
  for (let i = 0; i <= str.length - searchLen; i++) {
    let match = true;
    for (let j = 0; j < searchLen; j++) {
      if (str[i + j] !== searchValue[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}

// 2. includes
function includes(str, searchValue, fromIndex = 0) {
  for (let i = fromIndex; i <= str.length - searchValue.length; i++) {
    let found = true;
    for (let j = 0; j < searchValue.length; j++) {
      if (str[i + j] !== searchValue[j]) {
        found = false;
        break;
      }
    }
    if (found) return true;
  }
  return false;
}

// 3. substring
function substring(str, start = 0, end = str.length) {
  let result = '';
  let from = Math.max(Math.min(start, end), 0);
  let to = Math.max(start, end);
  for (let i = from; i < to && i < str.length; i++) {
    result += str[i];
  }
  return result;
}

// 4. toUpperCase
function toUpperCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

// 5. toLowerCase
function toLowerCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

// 6. trim
function trim(str) {
  let start = 0;
  let end = str.length - 1;
  while (start <= end && str[start] === ' ') start++;
  while (end >= start && str[end] === ' ') end--;

  let result = '';
  for (let i = start; i <= end; i++) {
    result += str[i];
  }
  return result;
}

// 7. split
function split(str, separator) {
  let result = [];
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    let match = true;
    for (let j = 0; j < separator.length; j++) {
      if (str[i + j] !== separator[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      result.push(temp);
      temp = '';
      i += separator.length - 1;
    } else {
      temp += str[i];
    }
  }
  result.push(temp);
  return result;
}

// 8. startsWith
function startsWith(str, searchValue, position = 0) {
  for (let i = 0; i < searchValue.length; i++) {
    if (str[position + i] !== searchValue[i]) return false;
  }
  return true;
}

// 9. endsWith
function endsWith(str, searchValue) {
  let pos = str.length - searchValue.length;
  for (let i = 0; i < searchValue.length; i++) {
    if (str[pos + i] !== searchValue[i]) return false;
  }
  return true;
}

// 10. repeat
function repeat(str, count) {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}

// 11. padStart
function padStart(str, targetLength, padString = ' ') {
  let pad = '';
  while (pad.length + str.length < targetLength) {
    pad += padString;
  }
  let result = '';
  for (let i = 0; i < targetLength - str.length; i++) {
    result += pad[i];
  }
  return result + str;
}

// 12. padEnd
function padEnd(str, targetLength, padString = ' ') {
  let pad = '';
  while (pad.length + str.length < targetLength) {
    pad += padString;
  }
  let result = str;
  for (let i = 0; i < targetLength - str.length; i++) {
    result += pad[i];
  }
  return result;
}

// 13. charAt
function charAt(str, index) {
  return str[index];
}

// 14. charCodeAt
function charCodeAt(str, index) {
  return str[index] ? str[index].charCodeAt(0) : NaN;
}

// 15. concat
function concat(str1, str2) {
  return str1 + str2;
}

// 16. valueOf
function valueOf(str) {
  return str;
}

// 17. toString
function toString(str) {
  return '' + str;
}


console.log(indexOf("hello world", "world")); 
console.log(includes("javascript", "script")); 
console.log(substring("abcdef", 1, 4)); 
console.log(toUpperCase("abc")); 
console.log(toLowerCase("ABC")); 
console.log(trim("  hello  ")); 
console.log(split("a,b,c", ",")); 
console.log(startsWith("hello", "he")); 
console.log(endsWith("hello", "lo")); 
console.log(repeat("ha", 3)); 
console.log(padStart("5", 3, "0")); 
console.log(padEnd("5", 3, "0")); 
console.log(charAt("hello", 1)); 
console.log(charCodeAt("A", 0)); 
console.log(concat("Hello, ", "world!")); 
console.log(valueOf("test")); 
console.log(toString(123)); 
