
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
