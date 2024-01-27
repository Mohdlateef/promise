// let p1 = new Promise((res, rej) => {
//   let con = true;
//   if (con === true) {
//     res("resolved");
//   } else {
//     rej("rejected");
//   }
// });
// {
//   console.log(
//     "only callback functiion is async in nature apart from that everything is sync in primise fun"
//   );
// }
// p1.then((data) => {
//   console.log(data);
// });
// p1.catch((data) => {
//   console.log(data);
// });


//  function name(a,call) {
// console.log(a);
// call();
// }
// name(10, ()=>{
//     console.log("a");

// });
const promise=function(cart){
    let pr=new Promise((res,rej)=>{
        if(cart==="true")
        {
            res("sucessfull resolved");
        }
        else{
            res("rejected");
        }
    })
    return pr;
}
let pr=promise("false");
pr.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(error)
})