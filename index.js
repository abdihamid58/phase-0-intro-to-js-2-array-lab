// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name){
    cats.push('Ralph')
}

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    let copyOfCat =[...cats,  "Broom"]
    return copyOfCat
}

function prependCat(name){
    let copyOfCat = ["Arnold", ...cats]
    return copyOfCat
}

function removeLastCat(){
    let removeLast = cats.slice(0,2)
    return removeLast
}

function removeFirstCat(){
    let removeFirst = cats.slice(1)
    return removeFirst
}