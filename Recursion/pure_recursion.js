function collectOddValues(arr) {
    let newArr = [];

    //checks if array is empty
    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0) { //checks if first number is odd
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
//Looking for Odd number
collectOddValues([1,2,3,4,5])
 [1].concat(collectOddValues([2,3,4,5]))
    [].concat(collectOddValues([3,4,5]))
        [3].concat(collectOddValues([4,5]))
            [].concat(collectOddValues[5])
                [5].concat(collectOddValues[])
//Concat the odd numbers
[1, 3, 5] =
    [1].concat([3,5])
