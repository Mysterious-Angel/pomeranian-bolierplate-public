import './styles.css';

export function JsArrayMethodsExercise() {
  // 3.1
  // napisz funkcję, która przyjmuje dwie tablice i zwraca nową tablicę, która zawiera tylko elementy, które występują w obu tablicach
  function getSameValues(arrayMethodExercise1, arrayMethodExercise1b) {
    const newArray = [];
    for (let i = 0; i < arrayMethodExercise1.length; i++) {
      for (let j = 0; j < arrayMethodExercise1b.length; j++) {
        if (arrayMethodExercise1[i] === arrayMethodExercise1b[j]) {
          newArray.push(arrayMethodExercise1[i]);
        }
      }
    }
    return newArray;
  }
  const arrayMethodExercise1 = [1, 2, 3, 4, 5];
  const arrayMethodExercise1b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(getSameValues(arrayMethodExercise1, arrayMethodExercise1b));

  // 3.2
  // napisz funkcję która liczy średnią z liczb w tablicy
  function averageFromArray(arrayMethodExercise2) {
    const sum = arrayMethodExercise2.reduce((acc, value) => acc + value, 0);
    return sum / arrayMethodExercise2.length;
  }
  const arrayMethodExercise2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(averageFromArray(arrayMethodExercise2));
  console.log(arrayMethodExercise2);

  // 3.3
  // napisz funcję, która przyjmuje 2 parametry i tworzy 2 wymiarową tablicę wypełnioną 0 gdzie x i y to wymiary 2 wymiarowej tablicy
  // np. create2DArray(2, 3) => [[0, 0], [0, 0], [0, 0]]
  function create2DArray(x, y) {
    const array = [];
    for (let i = 0; i < y; i++) {
      array.push([]);
      for (let j = 0; j < x; j++) {
        array[i].push(0);
      }
    }
    return array;
  }
  console.log(create2DArray(2, 3));

  /* 3.3 sposób Trenera
  function create2DArray(x, y) {
    return Array.from({length: x}, () => Array.from({length: y}, () => 0));
}

console.log(create2DArray(3,5))
*/

  // 3.4
  // napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby ale w odwrotnej kolejności
  function reverseArray(arrayMethodExercise4) {
    const newArray = [];
    for (let i = arrayMethodExercise4.length - 1; i >= 0; i--) {
      newArray.push(arrayMethodExercise4[i]);
    }
    return newArray;
  }
  console.log(reverseArray(arrayMethodExercise2));

  /* 3.4 sposób Trenera
function reverseFunction(arr) {
    return arr.reverse()
}

console.log(reverseFunction([1,2,3,4,5,6]))
*/

  // 3.5
  // napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuję osobę z imieniem i wiekiem i zwraca tablicę z imionami tych osób
  function getNames(arrayMethodExercise5) {
    const newArray = [];
    for (let i = 0; i < arrayMethodExercise5.length; i++) {
      newArray.push(arrayMethodExercise5[i].name);
    }
    return newArray;
  }
  const arrayMethodExercise5 = [
    { name: 'Jan', age: 20 },
    { name: 'Karol', age: 30 },
    { name: 'Adam', age: 40 },
  ];
  console.log(getNames(arrayMethodExercise5));

  /* 3.5 sposób Trenera
  function getNames(people) {
    return people.map(person => person.name)
}

console.log(getNames([{name: 'John', age:20 },{name: 'Adam', age:24 }]))
*/

  // 5.1
  // napisz funkcję zmieniającą podany string na camelCase
  // np. toCamelCase('background-color') => 'backgroundColor'
  function toCamelCase(stringMethodExercise1) {
    const array = stringMethodExercise1.split('-');
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        newArray.push(array[i]);
      } else {
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
      }
    }
    return newArray.join(' ');
  }
  const stringMethodExercise1 = 'background-color';
  console.log(toCamelCase(stringMethodExercise1));

  // 5.2
  // napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami wspólnymi dla obu napisów
  // np. commonLetters('house', 'computers') => ['o', 's', 'e']
  function commonLetters(stringMethodExercise2, stringMethodExercise2b) {
    const array = [];
    for (let i = 0; i < stringMethodExercise2.length; i++) {
      for (let j = 0; j < stringMethodExercise2b.length; j++) {
        if (stringMethodExercise2[i] === stringMethodExercise2b[j]) {
          array.push(stringMethodExercise2[i]);
        }
      }
    }
    return array;
  }
  const stringMethodExercise2 = 'hello';
  const stringMethodExercise2b = 'world';
  console.log(commonLetters(stringMethodExercise2, stringMethodExercise2b));

  /* 5.2 sposób Trenera
  function commonLetters(str1, str2) {
    const letters1 = new Set(str1)
    const letters2 = new Set(str2)

    return Array.from(letters1).filter(letter => letters2.has(letter));
}

console.log(commonLetters('hello', 'world'))
*/

  // 5.3
  // napisz funkjcę, która przyjmuje tablicę słów i zwraca tablicę z liczbami określającymi ilość samoogłosek w każdym z tych słów
  // np. vowels(['hello', 'world']) => [2, 1]
  function vowels(arrayMethodExercise3) {
    const newArray = [];
    for (let i = 0; i < arrayMethodExercise3.length; i++) {
      let counter = 0;
      for (let j = 0; j < arrayMethodExercise3[i].length; j++) {
        if (
          arrayMethodExercise3[i][j] === 'a' ||
          arrayMethodExercise3[i][j] === 'e' ||
          arrayMethodExercise3[i][j] === 'i' ||
          arrayMethodExercise3[i][j] === 'o' ||
          arrayMethodExercise3[i][j] === 'y' ||
          arrayMethodExercise3[i][j] === 'u'
        ) {
          counter++;
        } else {
          continue;
        }
      }
      newArray.push(counter);
    }
    return newArray;
  }
  const arrayMethodExercise3 = ['hello', 'world'];
  console.log(vowels(arrayMethodExercise3));

  /* 5.3 sposób Trenera
  function countVowels(word) {
    const vowels = new Set(['a', 'u','i','o','e','y'])
    return Array.from(word.toLowerCase()).filter((letter) => vowels.has(letter)).length;
}

function wordLengths(words) {
    return words.map(word => countVowels(word))
}

console.log(wordLengths(['apple', 'banana']))
*/

  // 5.4
  // napisz funkcję, która pobiera dwa napisy i sprawdza czy są one anagramami
  // np. isAnagram('hello', 'hlleo') => true
  function isAnagram(stringMethodExercise4, stringMethodExercise4b) {
    const array = stringMethodExercise4.split('');
    const array2 = stringMethodExercise4b.split('');
    const newArray = [];
    const newArray2 = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === ' ') {
        continue;
      } else {
        newArray.push(array[i]);
      }
    }
    for (let i = 0; i < array2.length; i++) {
      if (array2[i] === ' ') {
        continue;
      } else {
        newArray2.push(array2[i]);
      }
    }
    newArray.sort();
    newArray2.sort();
    if (newArray.join('') === newArray2.join('')) {
      return true;
    } else {
      return false;
    }
  }
  const stringMethodExercise4 = 'hello';
  const stringMethodExercise4b = 'hlleo';
  console.log(isAnagram(stringMethodExercise4, stringMethodExercise4b));

  /* 5.4 sposób Trenera
  function isAnagram(str1, str2) {

    const sortedStr1 = Array.from(str1.toLowerCase()).sort().join()
    const sortedStr2 = Array.from(str2.toLowerCase()).sort().join()

    return sortedStr1 === sortedStr2
}

console.log(isAnagram('iceman', 'nameci'))
*/
  return <div>test</div>;
}
