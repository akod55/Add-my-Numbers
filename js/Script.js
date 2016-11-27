function main() {
  var x = document.getElementById("first-number").value;
  var y = document.getElementById("second-number").value;
  document.getElementById('answer').value = (add(x, y));
}

function add(x, y) { //Funcion que dados dos strings de numeros retorna su suma si son validos de lo contrrio retorna "zero"
  let first = getnum(x);
  let second = getnum(y);
  let z = first + second;
  if (first == -1 || second == -1) {
    return "zero";
    alert("Check your inputs!");
  } else {
    return z;
  }
}

function getnum(array) { //Funcion que dado un string del numero retorna su valor sumando los valores que lo componen
  let word = "", num = 0;
  for (n in array) {
    if (array.charAt(n) !== " " && array.charAt(n) !== "-") {
      word = word.concat(array.charAt(n));
    }

    if (array.charAt(n) == " " || n == (array.length - 1) || array.charAt(n) == "-") {
      let aux = getval(word);
      if (aux == -1) {
        return -1;
      } else if (aux == 100) { //para cientos
        num = num * aux;
      } else if (aux == 1000) { //para miles
        num = num * aux;
      } else if (aux == 1000000) { //para millones
        num = num * aux;
      } else {
        num = num + aux;
      }
      word = "";
    }
  }
  return num;

}

function getval(n) { //Funcion que busca el nombre del numero en inlges y retorna su valor numerico
  let a = n.toLowerCase()
  let r;
  r = Numbers.find(  
    function (Numbers) {
      return Numbers.name == a; 
    }
  );
  if (r === undefined) return -1;
  return (r.val);
}

var Numbers = [ //Arreglo de objetos con el nombre del numero en ingles y su valor numerico
  {
    "name": "zero",
    "val": 0
  },
  {
    "name": "one",
    "val": 1
  },
  {
    "name": "two",
    "val": 2
  },
  {
    "name": "three",
    "val": 3
  },
  {
    "name": "four",
    "val": 4
  },
  {
    "name": "five",
    "val": 5
  },
  {
    "name": "six",
    "val": 6
  },
  {
    "name": "seven",
    "val": 7
  },
  {
    "name": "eight",
    "val": 8
  },
  {
    "name": "nine",
    "val": 9
  },
  {
    "name": "ten",
    "val": 10
  },
  {
    "name": "eleven",
    "val": 11
  },
  {
    "name": "twelve",
    "val": 12
  },
  {
    "name": "thirteen",
    "val": 13
  },
  {
    "name": "fourteen",
    "val": 14
  },
  {
    "name": "fiveteen",
    "val": 15
  },
  {
    "name": "sixteen",
    "val": 16
  },
  {
    "name": "seventeen",
    "val": 17
  },
  {
    "name": "eighteen",
    "val": 18
  },
  {
    "name": "nineteen",
    "val": 19
  },
  {
    "name": "twenty",
    "val": 20
  },
  {
    "name": "thirty",
    "val": 30
  },
  {
    "name": "fourty",
    "val": 40
  },
  {
    "name": "fifty",
    "val": 50
  },
  {
    "name": "sixty",
    "val": 60
  },
  {
    "name": "seventy",
    "val": 70
  },
  {
    "name": "eighty",
    "val": 80
  },
  {
    "name": "ninety",
    "val": 90
  },
  {
    "name": "hundred",
    "val": 100
  },
  {
    "name": "thousand",
    "val": 1000
  },
  {
    "name": "million",
    "val": 1000000
  },
  {
    "name": "and",
    "val": 0
  }];
