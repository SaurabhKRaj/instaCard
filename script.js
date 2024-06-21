//17
// function btnClicked(){
//     console.log("Button Clicked")
// }
// let b=document.getElementById("btn");
// b.addEventListener('click',btnClicked);

// function divClicked(){
//     console.log("Div Clicked")
// }
// let a =document.getElementById("div");
// a.addEventListener('click',divClicked);

// function bodyClicked(){
//     console.log("Body Clicked")
// }
// document.body.addEventListener('click',bodyClicked)

// //18
// let k = document.getElementById("anchor");
// a.addEventListener('click',function(temp){
// console.log("link clicked");
// temp.preventDefault();
// });

let abc=document.querySelector("h5");
let xyz= document.querySelector("#btn");

let temp=0;
function follow(){
    if(temp==0){
    abc.innerHTML="Following"
    abc.style.fontWeight=500
    // abc.style.fontFamily=Cursive
    xyz.innerHTML="Unfollow"
    temp=1
}else{
    abc.innerHTML="Suggested For You"
    abc.style.fontWeight=700
    xyz.innerHTML="Follow"
    temp=0

}

}
xyz.addEventListener('click',follow);