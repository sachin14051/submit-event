let cl=console.log;

let email= document.getElementById("email");

let password= document.getElementById("password");

let formSection =document.getElementById("formSection");

let emailDb ='sachin14051@gmail.com';
let passwordDb ='sachin';

const onSubmitHandler = (eve) =>{
    eve.preventDefault();
    //alert("submit successfully")

    let emailValue = email.value;

    let passValue = password.value;

if(emailDb === emailValue && passwordDb === passValue){
    //alert(`submit successfully`)
    
Swal.fire({
  //position: 'top-end',
  icon: 'success',
  title: 'submit successfully',
  showConfirmButton: false,
  timer: 1500
})
    return true;
}else{
    //alert(`username and password wrong`)
     
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'username and password wrong!',
    footer: '<a href="">Why do I have this issue?</a>',
    timer:3000
  })
    return false;
}
}








formSection.addEventListener("submit", onSubmitHandler)