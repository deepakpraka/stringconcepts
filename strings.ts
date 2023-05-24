function startsWithX(str: string) {
    if (str.charAt(0) === 'x') {
        return true;
    } else {
        return false;
    }
}
console.log(startsWithX("avier"))


function startWithX(str: string) {
    if (str.charAt(0).toLowerCase() === 'x') {
        return true;
    } else {
        return false;
    }
}
console.log(startWithX("Xdeeepak"))


function endsWithX(str: string) {
    const lastChar = str.charAt(str.length - 1);
    return lastChar.toLowerCase() === 'x';
}
console.log(endsWithX("xerox"))

function isAllX(string: string) {
    console.log(string);
    let tolow = string.toLowerCase()
    console.log(tolow)
    for( let i=0;i<tolow.length;i++){
        if(tolow[i] !== "x")
        {
            return false;
        }
    }
    return true;
}
console.log(isAllX("XXXXXXXXXXX"))





function findFirstX(string: string | string[]) {
    console.log(string)
    let result = string.indexOf("x");
    return result;
    
}
console.log(findFirstX("xerox"))

function findlongervalues(string: string | string[]) {
    console.log(string)
    let output = string.slice(2);
    return output;

}
console.log(findlongervalues("xerox"))

function splitting(string: any | string[]) {
    console.log(string)
    let text = string.split(" 1")
    return text;
}
console.log(splitting("deepak is good"))

