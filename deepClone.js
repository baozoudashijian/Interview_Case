function deepClone() {
    if(a instanceof Object) {
        let result = undefined
        if(a instanceof Function) {
            if(a.prototype) {
                result = function() { return a.apply(this, arguments) }
            }else{
                result = (...args) => { return a.call(undefined, ...args) }
            }
        }else if (a instanceof Array) {
            result = []
        }else if(a instanceof Date) {
            result = new Date(a-0)
        }else if(a instanceof RegExp) {
            result = new RegExp(a.source, a.flags)
        }else{
            result = {}
        }
        for(let key in a) {
            result[key] = deepClone(a[key])
        }
        return result
    } else {
        return a
    }
}