// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for( let i = 0; i < arr.length; i++){
        for (let j = 0; j < (arr.length - i); j++){
            if( arr[j] > arr[j + 1]){
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    // i, j, indexofmin
    // from i = 0 to < array.length
    for(let i = 0; i < arr.length; i++ ){
        let indexOfMin = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[indexOfMin] > arr[j]){
                indexOfMin = j
            }
        }

        if(indexOfMin !== i){
            let lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }
    return arr
        // i is at least in the assign i to indexofmin
        // for loop i from i + 1 to end of array
            // see if there is an element with lower value
                // if so, record its index
        // if the index of the current element and index of the lowest element is not the samem, swap
}

function mergeSort(arr) {
    if(arr.length === 1){
        return arr
    }

    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)

    mergeSort(left)
    mergeSort(right)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    //create 'results' array
    const results = []
    // while there are elements in both arrays
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift())
        } else{
            results.push(right.shift())
        }
    }
    return [...results, ...left,...right]
        // if the first element left half is less than first right half
            // shift the element from left into a result arr
        // else
            // shift the element from right into a result arr
    // take everything from the array that still has stuff in it and put it in results
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
