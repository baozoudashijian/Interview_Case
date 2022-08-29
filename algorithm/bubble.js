const bubbleSort = (arr) => {
    if(arr.length <= 1) { return arr }
    for(let r=0; r<arr.length-1; r++) {
        for(let i=0; i<arr.length-r-1; i++) {
            if(arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
    }
    return arr
}