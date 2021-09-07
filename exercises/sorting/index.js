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
    // from i = 1 to < array.length

        // i is at least in the assign i to indexofmin
        // for loop i from i + 1 to end of array
            // see if there is an element with lower value
                // if so, record its index
        // if the index of the current element and index of the lowest element is not the samem, swap
        
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
