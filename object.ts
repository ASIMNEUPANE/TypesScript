// const user = {
// name:"asim",
// email:"a@",
// isActive:true
// }

// function createUSer ({name:string, isActive:boolean}){

// }
// createUSer({name:'asim', isActive:false})
// function creasteCorse({name:string, isActive:boolean}){
// }



// let news =( {name:'asim', isActive:'false',email:'asim@'})

// creasteCorse(news)



// type User = {
//     name:string;
//     email:string;
//     isActive:boolean;
// }

// function createUser(user:User):User{
// return {name:'',email:'', isActive:false}
// }

// createUser({name:'',email:'', isActive:false})


type User = {
    readonly _id:string
    name:string;
    email:string;
    isActive:boolean;
    creditcardDetails? :number;
}

const myUser:User = {_id:'1234' ,name:'asim', email:'asim@', isActive:true}

myUser.name = 'asimuu' 





























export{}

