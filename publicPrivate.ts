class User{
  
    private readonly city : string ='kapilvastu'
    constructor(public email:string, public name:string, private userId : string){
       
    }
}
// class User{
//    public email:string
//     private name:string
//     private readonly city : string ='kapilvastu'
//     constructor(email:string,name:string){
//         this.email= email;
//     this.name=name;

//     }
// }
const asu = new User('asim@@', 'asim')
