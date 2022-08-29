const selectSort = (arr) => {
    if(arr.length <= 1) { return arr }
    for(let i=0; i<arr.length-1; i++) {
        let minIndex = i
        for(let k=i+1; k<arr.length; k++) {
            if(arr[k]<arr[i]) {
                minIndex = k
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr
}