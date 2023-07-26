import './styles.css';

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

/* let titleCase = (str) => str.split(" ").map((str) => str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()).join(" ");
console.log(titleCase("Jakiś dłuŻszy PrzYkŁaDowy tekst")); */

//5.2

// 5.3
