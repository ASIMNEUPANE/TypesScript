class User{
  private _courseCount = 1
    private readonly city : string ='kapilvastu'
    constructor(public email:string, public name:string, 
        // private userId : string
        ){
       
    }

    private deleteToken(){
        console.log('token deleted')
    }

    get getAppleEmail():string{
return `apple ${this.email}`
    }
    get courseCount():number{
        return this._courseCount
    }
    set courseCount (courseNum){
if(courseNum <=1){
    throw new Error('error')
}
this._courseCount= courseNum
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

