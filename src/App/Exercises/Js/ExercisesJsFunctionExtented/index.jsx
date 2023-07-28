import './styles.css';

export function ExerciseJsFunctionExtended() {
  // 1.
  // Napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i zwraca ją posortowana
  // funkcja ma nie zmieniać pierwotnej tablicy

  const sortImmute = (arr) => arr.slice().sort((a, b) => a - b);

  // const sortImmute = (arr) => {
  //   return arr.slice().sort((a, b) => a - b)
  // };

  // const sortImmute = (arr) => {
  //   const sortedArray = arr.slice().sort((a, b) => a - b)

  //   return sortedArray;
  // };

  const arr = [1, 3, 2, 5, 4];
  const sortedArr = sortImmute(arr);

  console.log(arr);
  console.log(sortedArr);

  // 2. napisz funkcję która jako parametr przyjmuje obiekt przechodzi po wszystkich jego polach i kapitalizuje im pierwszą literę
  // funkcja nie zmienia oryginalnego obiektu

  const capitalizeObject = (originalObj) => {
    const newObj = {};

    for (const key in originalObj) {
      newObj[key] =
        typeof originalObj[key] === 'string'
          ? originalObj[key].charAt(0).toUpperCase() + originalObj[key].slice(1)
          : originalObj[key];
    }

    return newObj;
  };

  const originalObj = {
    name: 'jan',
    surname: 'kowalski',
    age: 20,
  };
  const changedObj = capitalizeObject(originalObj);

  console.log({
    originalObj,
    changedObj,
  });

  // 3. napisz funkcję która jako parametr przyjmuje tablicę obiektów natomiast zwraca tablicę z wyliczoną wartością średnią zamiast ocen
  // funkcja ma nie zmieniać pierwotnej tablicy

  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  ];

  const tablicaWynikowa = calcAvr(tablicaPierwotna);

  function calcAvr(tablicaPierwotna) {
    const newArr = [];

    for (const obj of tablicaPierwotna) {
      const newObj = { ...obj };
      const sum = obj.grades.reduce((acc, curr) => acc + curr, 0);
      newObj.grades = sum / obj.grades.length;
      newArr.push(newObj);
    }

    return newArr;
  }

  console.log({
    tablicaPierwotna,
    tablicaWynikowa,
  });

  // 4.
  // funkcja zwraca podany w argumencie element ciągu Fibonacciego
  // napisać rekurencyjnie

  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  console.log(fibonacci(4));

  // 5. stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę

  const sum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
  };

  console.log(sum(1, 2, 3, 4, 5, 6));

  // 6. stwórz funkcję, która zwróci funkcję, która zliczy wszystkie wystąpienia pierwotnie wywołanej funkcji

  const count = () => {
    let counter = 0;

    return () => {
      counter++;
      return counter;
    };
  };

  const counter = count();

  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());

  // 7.
  // stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden operator matematyczne
  // '+', '-', '*', '/'
  // funkcja calculateWithChar ma zwracać funkcję, która przyjmuje dwie liczby jako argumenty

  const calculateWithChar = (operator) => {
    return (num1, num2) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'złe wejście';
      }

      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        case '%':
          return num1 % num2;
        default:
          return 'zły znak';
      }
    };
  };

  console.log(calculateWithChar('+')(1, 2));
  console.log(calculateWithChar('*')(1, 2));
  console.log(calculateWithChar('/')(1, 2));
  console.log(calculateWithChar('---')(1, 2));
  console.log(calculateWithChar('+')('abc', 2));

  return <div>Test</div>;
}
