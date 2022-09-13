function sqr(number) {
  return number**2;
}

function sqrt(number) {
  let k;

  let sqrtNumber = number / 2;

  do {
    k = sqrtNumber;
    sqrtNumber = (k + (number / k)) / 2;
  } while ((k - sqrtNumber) !== 0);

  return sqrtNumber;
}

function pow(number, power) {
  if (power === 0) return 1;

  let result = number;

  for (let i = 1; i < power; i++) {
    result *= number;
  }

  return result;
}

function ctg(x) {
  return 1 / Math.tan(x);
}

const multiplyNumbers = (...args) => {
  let result = args[0];

  for (let i = 1; i < args.length; i++) {
    result *= args[i];
  }

  return result;
};

const amount = (...args) => {
  let result = args[0];

  for (let i = 1; i < args.length; i++) {
    result += args[i];
  }

  return result;
};

const difference = (...args) => {
  let result = args[0];

  for (let i = 1; i < args.length; i++) {
    result -= args[i];
  }

  return result;
};

//Окружность
function circleAreaRadius(r) {
  return Math.PI * sqr(r);
}

function circleAreaDiameter(d) {
  return 1/4 * Math.PI * sqr(d);
}

// квадрат
function squareArea(sideLength) {
  return sqr(sideLength);
}

function squareAreaDiagonal(diagonalLength) {
  return 1/2 * sqr(diagonalLength);
}

//Прямоугольник
function squareRectangle(height, weight) {
  return multiplyNumbers(height, weight);
}

//Параллелограмм
function parallelogramArea(sideLength, height) {
  return multiplyNumbers(sideLength, height);
}

//Эллипс
function ellipseArea(a, b) {
  return multiplyNumbers(Math.PI, a, b);
}

//Трапеция
function trapezeArea(a, b, h) {
  return 1/2 * amount(a, b) * h;
}

function trapezeAreaGeron(a, b, c, d) {
  let p = amount(a, b, c, d) / 2;
  let area = amount(a,b) / Math.abs(a-b) * sqrt((p-a) * (p-b) * (p-a-c) * (p-a-d));

  return area;
}


//Отрезок
function segmentLength(x1, y1, x2, y2)  {
  return sqrt(sqr(x2-x1) + sqr(y2-y1), 1/2);
}

//Вектора
function vectorLength(...coords) {

  if (coords.length < 2) return 0;

  let sum = 0;

  coords.forEach(coordinate => {
    sum += Math.pow(coordinate, 2);
  })

  return Math.pow(sum, 1/2)
}

function getVectorCoords(...dots) {
  if (dots.length % 2 !== 0) return 'Неверное количество точек';

  let result = []
  let dotsCount = dots.length / 2;

  for (let i = 0 ; i < dotsCount; i++) {
    result[i] = dots[i + dotsCount] - dots[i];
  }

  return result
}

function multiplyVectorNumber(number, ...coords) {
  let arr = coords;

  for(let i = 0; i < arr.length; i++) {
    arr[i] *= number;
  }

  return arr
}

function scalarMultiplyVectors(a, b) {
  let result = 0;

  if (a.length !== b.length) return 'Некорректные данные';

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i]
  }

  return result;
}

//Ортогональность векторов
function isOrthogonality(a, b) {
  return scalarMultiplyVectors(a, b) === 0
}

//Коллиниарность векторов
function isCollinearityVectors(a, b) {
  if (a.length !== b.length || a.length < 2 || b.length < 2) return 'некорректные значения'

  let k = b[1]/a[1];
  let result = multiplyVectorNumber(k, ...a);

  return JSON.stringify(result) === JSON.stringify(b)
}


function isCodirectionalVectors(a, b) {
  return scalarMultiplyVectors(a, b) > 0
}

function isEqualVectors(a, b) {
  let aLength = vectorLength(...a);
  let bLength = vectorLength(...b);

  return aLength === bLength && isCollinearityVectors(a, b) && isCodirectionalVectors(a,b)
}

// Угол между векторами
function vectorsAngle(a, b) {
  let multiply = scalarMultiplyVectors(a,b);
  let lengthA = vectorLength(...a);
  let lengthB = vectorLength(...b);

  return multiply/(lengthA * lengthB);
}

//Сумма векторов
function sumVectors(a, b) {
  if (a.length !== b.length) return 'Некорректные значения';
  let resultSum = [];

  for (let i = 0; i < a.length; i++) {
    resultSum[i] = a[i] + b[i];
  }

  return resultSum;
}


//Разность векторов
function differenceVectors(a, b) {
  if (a.length !== b.length) return 'Некорректные значения';
  let resultDifference = [];

  for (let i = 0; i < a.length; i++) {
    resultDifference[i] = a[i] - b[i];
  }

  return resultDifference;
}

//Сфера
function ballVolume(r) {
  return 4/3* Math.PI * pow(r, 3);
}

function ballArea(r) {
  return 4 * Math.PI * pow(r, 2);
}

//Многоугольники
function polygonSideLength(r, n) {
  return 2 * r * Math.sin(Math.PI/n);
}

function polygonArea(r, n) {
  let sideLength = polygonSideLength(r, n)
  return n * sqr(sideLength) * ctg(Math.PI/n) / 4 ;
}

function anglePolygon(n) {
  return (n - 2)/n * 180;
}


function separatorLog(name) {
  console.log(`\n=============== ${name} ===============\n`)
}

separatorLog('Окружность');
console.log('Площадь окружности равна ', circleAreaRadius(4))
console. log('Площадь окружности равна ', circleAreaDiameter(8))

separatorLog('Прямоугольник');
console. log('Площадь прямоугольника равна ', multiplyNumbers(2, 4))

separatorLog('Трапеция');
console.log(`Площадь трапеции ${trapezeArea(4, 7, 4)}`)
console.log(`Площадь трапеции по формуле Герона = ${trapezeAreaGeron(6,12, 8, 10)}`)

separatorLog('Отрезок');
console.log('Длина отрезка', segmentLength(1,3,3,5))

separatorLog('Вектор');
console.log('Длина вектора на плоскости = ', vectorLength(3, -4))
console.log('Длина вектора в пространстве = ', vectorLength(2, 4, 4))
console.log('Произведение вектора на число = ', multiplyVectorNumber(3, 1, 2));
console.log('Координаты вектора = ', getVectorCoords(1, 4, 3, 1));
console.log('Скалярное произведение = ', scalarMultiplyVectors([1, 2, -5, 2],  [4, 8, 1, -2]));
console.log('Ортогональность векторов ', isOrthogonality(1, 2, 2, -1));
console.log('Сумма векторов ', sumVectors([1, 2], [4, 8]));
console.log('Угол между векторами', vectorsAngle([3, 4], [4, 3]));
console.log('Калиниарность ', isCollinearityVectors([0, 3, 5], [0, 9, 15]));
console.log('Вектора равны? ', isEqualVectors([1, 2, 4], [1, 2, 2]));
console.log('Cонаправленные? ', isCodirectionalVectors([4, 0], [8, 0]));
console.log('Разность векторов ', differenceVectors([1, 2], [4, 8]));
console.log('Сумма векторов в пространстве ', sumVectors([1, 2, 5], [4, 8, 1]));
console.log('Разность векторов в пространстве ', differenceVectors([1, 2, 5], [4, 8, 1]));

separatorLog('Сфера');
console.log(`Объем сферы V = ${ballVolume(4)}`);
console.log(`Площадь сферы S = ${ballArea(4)}`);

separatorLog('Многоугольники');
console.log('Длина стороны многоугольника ', polygonSideLength(7, 4))
console.log('Площадь многоугольника через радиус вписанной окружности ', polygonArea(7, 4))