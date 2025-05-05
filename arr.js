
//forEach
function ForEach(arr, processElement) {
  for (let i = 0; i < arr.length; i++) {
    processElement(arr[i], i, arr);
  }
}

ForEach([2, 3, 4, 5], (el) => {
  console.log(el); 
});

// map
function Map(arr, transformElement) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[result.length] = transformElement(arr[i], i, arr);
  }
  return result;
}
let doubled = Map([2, 3, 4, 5], el => el * 2);
console.log(doubled); 



//filter
function Filter(arr, checkCondition) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkCondition(arr[i], i, arr)) {
      result[result.length] = arr[i];
    }
  }
  return result;
}
let ans = Filter([20, 30, 43, 54], el => el > 20);
console.log(ans); // [4, 6, 8, 10]


//find
function Find(arr, matchCondition) {
  for (let i = 0; i < arr.length; i++) {
    if (matchCondition(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}
let find=Find([32,5,67,9],(el)=>el>40);
console.log(find)

//findIndex
function FindIndex(arr, matchCondition) {
  for (let i = 0; i < arr.length; i++) {
    if (matchCondition(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

let idx=FindIndex([32,5,67,9],(el)=>el>40);
console.log(idx)

//reduce
function Reduce(arr, reduceFunction, initialValue) {
  let accumulator = initialValue === undefined ? arr[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = reduceFunction(accumulator, arr[i], i, arr);
  }

  return accumulator;
}
let reduceAns=Reduce([10,15,15],(el,el2)=>el+el2);
console.log(reduceAns)


//includes
function Includes(arr, valueToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valueToFind) {
      return true;
    }
  }
  return false;
}
let include=Includes([10,15,15],15);
console.log(include)

//indexOf
function IndexOf(arr, valueToFind) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valueToFind) {
      return i;
    }
  }
  return -1;
}
let index=IndexOf([10,15,15],15);
console.log(index)

//every
function Every(arr, checkCondition) {
  for (let i = 0; i < arr.length; i++) {
    if (!checkCondition(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
let every=Every([10,15,150],(el)=>el<100);
console.log(every)
//some
function Some(arr, checkCondition) {
  for (let i = 0; i < arr.length; i++) {
    if (checkCondition(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
let some=Some([10,15,150],(el)=>el>100);
console.log(some)


//push

function Push(arr, newItem) {
  arr[arr.length] = newItem;
  return arr.length;
}

let sampleArr = [1, 2, 3];
Push(sampleArr, 9);
console.log(sampleArr); 



//Unshift

function unShift(arr,newItem){
  for(let i=arr.length;i>=0;i--){
    arr[i]=arr[i-1];

  }
  arr[0]=newItem;
  return arr.length
}
let Arr=[2,4,5];
unShift(Arr,8);
console.log(Arr)


//shift
function Shift(arr) {
  if (arr.length === 0) return undefined;
  let first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length--;
  return first;
}

let shiftArr = [5, 6, 7];
console.log(Shift(shiftArr)); 
console.log(shiftArr); 

//pop

function Pop(arr) {
  if (arr.length === 0) return undefined;
  let lastItem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastItem;
}

let popArr = [1, 2, 3];
console.log(Pop(popArr)); 
console.log(popArr); 
