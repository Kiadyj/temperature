// Déclarer le tableau
let tableau = [1,2,3,4,10,11]

tableau.sort((a, b) => a - b)//sorts array elements

console.log(tableau);
//returns the value of the first element found in the array that meets the given condition
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
