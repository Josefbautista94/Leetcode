var reverseWords = function (s) {

    let splitString = s.split(' ')
    let answer = [];

    for (let i = 0; i < splitString.length; i++) {
        
        let reverseWords = splitString[i].split('').reverse().join('');
        answer.push(reverseWords);
    }

    return answer.join(' ');

};
