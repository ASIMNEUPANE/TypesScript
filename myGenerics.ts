const score: Array<number> = []
const names:Array<string>=[]

function identityOne(val:boolean | number):boolean| number{
return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}
identityThree(3)

function identityFour<T>(v:T){
    return v
}
interface Bootle{
    brand:string,
    type:number,
}
// identityFour<Bootle>({})


// function getSearchProducts<T>(products: T[]):T
// {
//     // do some database operations
//     const myIndex = 3
//     return products[3]
// }
const getSearchProducts=<T,>(products:T[]):T=>{
const myIndex=4;
return products[myIndex]
}