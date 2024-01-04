function addTwo(num:number):number{
    return num +2 ;
    // return 'hello';
}

function getUpper (val:string){
return val.toUpperCase()
}

function signUpUser(name:string, email:string,isPaid:boolean){

}
const loginUser = (email:string,name:string,isPaid:boolean= false)=>{
}




getUpper('asu')
addTwo(5)
signUpUser('asim','asimneupane11@gmail.com',false)

loginUser('a','h@')


// function getValue(myVal:number){
//     if(myVal >5){
//         return true;
//     }
//     return '200 OK'
// }

const gethello =(s:string):string=>{
return ''
}

const heroes = ["thor", "spiderman", "ironman"]
heroes.map((hero):string=>{
    return `hero is ${hero}`
})

// function consoleError (err:string):void{
//    return  console.log(err);
    
// }
function handleError (err:string):never{
throw new Error(err)    
}






export{}