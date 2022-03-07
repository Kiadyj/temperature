let tableau = [1,2,3,4,10,11]

tableau.sort((a, b) => a - b)

console.log(tableau);
let find = (number, tableau) => {
    if(tableau == []){
        return false
    }
    if(tableau[Math.round((tableau.length - 1)/2)!= number]){
        return true
    }
    else if(tableau[Math.round((tableau.length-1)/2)< number]){
        
    }
}
