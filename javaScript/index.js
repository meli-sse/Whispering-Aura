document.querySelector(".subscribe button")
.addEventListener("click", () => {

const email =
document.querySelector(".subscribe input").value;

if(email === ""){
alert("Please enter your email");
}
else{
alert("Thank you for subscribing!");
}
});