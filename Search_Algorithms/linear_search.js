//Javascript different search methods
//indexOf
//includes
//find
//findIndex

//Linear Search Pseudocode 
//This functions accepts and array and a value 


function linearSearch(arr, val){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
            }
        }
    return -1;
}

