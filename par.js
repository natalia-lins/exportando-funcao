export function pares(arr){
    let numPares = [];
    for (let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            numPares.push(arr[i]);
        }
    }
    return numPares;
}