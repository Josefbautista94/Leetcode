/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const stack = []
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for(char of s){

        if(char in map){
            let top = stack.pop()
            if(top !== map[char]){
                return false
            }

                }
                else{
                    stack.push(char)
                  
                }
    }

    return stack.length === 0
};