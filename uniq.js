// indexOf数组去重
function uniq(arr) {
    const result = []

    for(let i=0; i<arr.length; i++) {
        if(result.indexOf(arr[i]) < 0) {
            result.push(arr[i])
        }
    }

    return result
}

// object去重
function uniq2(arr) {
    const obj = {}
    for(let i=0; i<arr.length; i++) {
        if(obj[arr[i]]) {
            continue
        }else{
            obj[arr[i]] = true
        }
    }
    return Object.keys(obj)
}

// Set去重
function uniq3(arr) {
    return [...new Set(arr)]
}

//双重循环去重
function uniq4(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1)
            }
        }
    }
    return arr
}