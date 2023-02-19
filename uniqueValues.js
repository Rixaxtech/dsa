function countUniqueValues (arr) {
    if (arr.length === 0) return 0;
let i = 0;
    for (let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = j;
        }
    }
    return i + 1;
}

// Linear Time o(n) - we're only looping once.

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); 