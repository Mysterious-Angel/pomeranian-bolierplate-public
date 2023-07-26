import './styles.css';
import TextTruncate from 'react-text-truncate'; // recommend

export function JsStringTraining() {}

// 5.1
function titleCase(str) {
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');
    for (var x = 0; x < 1; x++) {
      arr[i][x] = arr[i][x].toUpperCase();
      console.log(arr);
    }
    for (var y = 1; y < arr[i].length; y++) {
      arr[i][y] = arr[i][y].toLowerCase();
      console.log(arr);
    }
    arr[i] = arr[i].join('');
  }
  arr = arr.join('  ');
  console.log(arr);
}

titleCase('anna ma psa');

//5.2

<TextTruncate
  line={1}
  element="span"
  truncateText="…"
  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  textTruncateChild={<a href="#">Read on</a>}
/>;

// 5.3
/*  //exercise 1

  function ucFirst(text) {
    const upperCaseText = text.toUpperCase();
    return upperCaseText.charAt(0) + text.slice(1);
  }

  // Test case
  console.log(ucFirst('john')); // Output: "John"

  //exercise 2

  function extractSentence(text) {
    const extracted = text.substr(0, 20);
    return extracted;
  }

  // Test case
  console.log(extractSentence("what I'd like to tell on this topic is:")); // Output: "what I'd like to tell"

  //exercise 3

  let str = 'hello World, hello people, hello you',
    split = str.split(' '),
    obj = {};

  for (let i = 0; i < split.length; i++) {
    if (obj[split[i]] === undefined) {
      obj[split[i]] = 1;
    } else {
      obj[split[i]]++;
    }
  }

  console.log(obj);

  //exercise 4
  function emailCheck(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  // Test cases
  console.log(emailCheck('abc@def.ghi')); // Output: true
  console.log(emailCheck('john.doe@example')); // Output: false (missing top-level domain)
  console.log(emailCheck('user@domain')); // Output: false (short domain)
  console.log(emailCheck('notanemail.com')); // Output: false (invalid format)

  // exercise 5
  function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the cleaned string is the same when reversed
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }

  // Test cases
  console.log(isPalindrome('level')); // Output: true (level is a palindrome)
  console.log(isPalindrome('Racecar')); // Output: true (Racecar is a palindrome, ignoring case)
  console.log(isPalindrome('hello')); // Output: false (hello is not a palindrome)
  console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true (ignoring non-alphanumeric characters)
} */
