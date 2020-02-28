/*
 * Function 1: Return the string "hello world".
 * Yep - that's literally it.
 */

function helloWorld(){
    return "hello world";
}

/*
 * Function 2: Given a number (int or float), square it and convert to string.
 * Return the string.
 * Examples:
 *  5 -> '25'
 *  1.2 -> '1.44'
 */

function squareToString(num){
    return (num*num).toString();
}

/*
 * Function 3: Reverse a string. We will only give you strings as input.
 * Examples:
 *  'hello' -> 'olleh'
 *  'fdas' -> 'sadf'
 */

function reverseString(str){
    var rev = "";
    for (var c = str.length-1; c >= 0; c--) {
        rev += str[c];
    }
    return rev;
}

 /*
  * Function 4: Given a dictionary, compute the average length of the values.
  * If a value is an integer, covert it to a string, and use the length of the
  * converted string in your computation.
  * Example:
  *     {
  *         'hello': 'world',
  *         'timothy': 'chen',
  *         'allen': 'cheng',
  *         2:'hi',
  *         3: 51
  *     }
  * ^ This will return 3.6.
  */

 function avgLenOfVals(dict){
     /*if(Object.keys(dict).length == 0){
         return NaN
     }*/

     let keys = Object.keys(dict);
     let count = 0.0; 
     for(k of keys){
        if(typeof dict[k] == "number"){
            count += (""+dict[k]).length; //console.log("count++")
        }else if(typeof dict[k] == "string"){
            count += dict[k].length
        } 
     }
     //console.log("count: ", count, ", klen: ", keys.length)
     return keys.length > 0 ? (count/(keys.length)) : 0
 }

/*
 * Function 5: stringToArr -> Given a string that has comma + whitespace
 *     separated values, and creates an array containing all the elements.
 *      Example:
 *          'hello, my,   name, is ,dickerson' ->
 *          ['hello','my','name','is','dickerson']
 *      Then, apply the second argument of the function (another function)
 *      to the array. Return this result.
 *      You will have to write your own tests to see if this function works.
 *
 */

function applyFunToArray(str, fun){
    var arr = str.split(", ")
    for(i in arr){
        arr[i] = arr[i].trim()
    }
    return fun(arr)
}

function lowerArr(arr){
    var newArr = []
    for (var i = 0; i < arr.length; i ++){
        newArr[i] = arr[i].toLowerCase();
    }
    return newArr
}

//console.log(applyFunToArray("Hello, World", lowerArr))
//console.log("abcdefghij".length)
var ln = (""+53).length
/*console.log(avgLenOfVals({
    'hello': 'world',
    'ishaan': 'parikh',
    'sashi': 'thupu',
    2:'hi',
    3: 51
}))*/

module.exports = {
    helloWorld: helloWorld,
    squareToString: squareToString,
    reverseString: reverseString,
    avgLenOfVals: avgLenOfVals,
    applyFunToArray: applyFunToArray
}
