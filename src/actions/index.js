export function addToDo(val){

    return{
        type:"ADD",
        payload:val
    }
}

export function clearAllData(){

    return{
        type:"CLEAR"
    }
}