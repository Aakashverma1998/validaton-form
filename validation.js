function myfun(){
    var username=document.getElementById("user").value
    var password=document.getElementById("pass").value
    var conform_password=document.getElementById("con-pass").value
    var email=document.getElementById("email").value
    var mobile=document.getElementById("mobile").value
    if(username==""){
        document.getElementById("user1").innerHTML="** please enter your name **"
        return false;
    }
    if((username.length<=2)||(username.length>20)){
        document.getElementById("user1").innerHTML="** user length must be between 3 to 20 **"
        return false;
    }
    if(!isNaN(username)){
        document.getElementById("user1").innerHTML="** invalid username **"
        return false;
    }
    if(password==""){
        document.getElementById("pass1").innerHTML="** please enter your password **"
        return false;
    }
    if((password.length<=5)||(password.length>20)){
        document.getElementById("pass1").innerHTML="** user password must be between 5 to 20 **"
        return false;
    }
    if(conform_password==""){
        document.getElementById("con-pass1").innerHTML="** please enter your conform-password **"
        return false;
    }
    if(password!=conform_password){
        document.getElementById("con-pass1").innerHTML="** user password is not matching **"
        return false;
    }
    if(email==""){
        document.getElementById("email1").innerHTML="please enter your mail"
        return false;
    }
    if(email.indexOf("@")<=0){
        document.getElementById("email1").innerHTML="** @ invalid position"
        return false;
    }
    if((email.charAt(email.length-4)!=".")&&(email.charAt(email.length-3)!=".")){
        document.getElementById("email1").innerHTML="** . invalid position"
        return false;
    }
    if(mobile==""){
        document.getElementById("mobile1").innerHTML="please enter your mobile no"
        return false;
    }
    if(mobile.length!=10){
        document.getElementById("mobile1").innerHTML="**invalid contact number**"
        return false;
    }
    user_details = {"username":username,"password":password,"conform_password":conform_password,"email":email,"mobile number":mobile}
    console.log(user_details)
}