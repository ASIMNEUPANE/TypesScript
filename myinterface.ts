interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?: string,
    // startTrail:()=> string
    startTrail():string
    getCoupon(couponName:string, value:number): number
} 

interface User{
    gitHubToken:string,
}
interface Admin extends User{
roles:"admin" | "ta" | 'learner'
}


const asim : Admin={dbId:22,gitHubToken:'hellp',roles:"admin",email:"asim", userId:222,

startTrail: ()=> {
    return 'trail started'
},
getCoupon:(name:'asim', off:10)=>{
    return 10
}

}

asim.email="neupane"
