// show the list of the array
let tableau = [1,2,3,4,10,11]

tableau.sort((a, b) => a - b)//sort array elements

console.log(tableau);
//return the value of the first element found in the array that meets the given condition
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
