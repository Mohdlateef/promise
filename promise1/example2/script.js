let btn=document.getElementById("btn");

let output=document.getElementById("output");
btn.addEventListener("click",()=>{
	let text=document.getElementById("text").value;
let num=document.getElementById("delay").value;
	setTimeout(()=>{
		output.innerText=`${text}`
	},num)
});