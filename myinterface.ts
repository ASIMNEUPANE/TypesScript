interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?: string,
    // startTrail:()=> string
    startTrail():string
    getCoupon(couponName:string, value:number): number
} 


const asim : User={dbId:22,email:"asim", userId:222,

startTrail: ()=> {
    return 'trail started'
},
getCoupon:(name:'asim', off:10)=>{
    return 10
}

}

asim.email="neupane"
