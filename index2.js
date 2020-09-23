let cvfile = window.localStorage.getItem("firstname");
let cvfile1 = window.localStorage.getItem("middlename");
let cvfile2 = window.localStorage.getItem("lastname");
let cvfile3 = window.localStorage.getItem("number");
let cvfile4 = window.localStorage.getItem("email");
let cvfile5 = window.localStorage.getItem("address");

document.getElementById("name").innerHTML=cvfile+' '+cvfile1+' '+cvfile2
document.getElementById("number").innerHTML=cvfile3
document.getElementById("email").innerHTML=cvfile4
document.getElementById("address").innerHTML=cvfile5


