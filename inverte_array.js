export function inverter(arrayinvert){
    let novoArray = [];
    for (let i = arrayinvert.length - 1; i >= 0; i--) {
        novoArray.push(arrayinvert[i]);
    }
    return novoArray;
}