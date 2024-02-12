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
// const promise=function(cart){
//     let pr=new Promise((res,rej)=>{
//         if(cart==="true")
//         {
//             res("sucessfull resolved");
//         }
//         else{
//             res("rejected");
//         }
//     })
//     return pr;
// }
// let pr=promise("false");
// pr.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(error)
// })
// let pro=new Promise((res,rej)=>{
//     let con=false;
//     if(con==true)
//     {
//         setTimeout(()=>{
//            res( 1)
//         },1000)
//     }
//     else{
//         rej( 2)
//     }
// })
// pro.then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
// console.log(rej)})
let lists=document.getElementById("list");
console.log(lists.innerText)

let url = "https://dummyjson.com/products";
// let data = fetch(url);
// data
//   .then((res) => {
//    let iteams=res.json();
//    return iteams
   
//   })
//   .then((res) => {
//   console.log(res.products);
//   let data=res.products;
//   lists.innerHTML=("")
//   data.map((iteam)=>{
//     console.log(iteam.title)
//     let listitm=document.createElement("p");
//     listitm.innerText=iteam.title;
//     lists.appendChild(listitm)
//   })
//   });
// async function fetchdata(){

//     let response=await fetch(url);
//     let data=await response.json();
//     console.log(data.products);

// } 
// fetchdata();
function Fun1(name,branch,bal){
    let obj1={
      name,branch,bal,
      amount:(amo)=>{
       let total= this.bal+amo
       return total;
      }
    }
   
    return obj1;
}

let obj2=new Fun1("umer","kanir",1000);
console.log(obj2.amount(300))