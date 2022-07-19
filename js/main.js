var signLink = document.getElementById("sp2");
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passInput = document.getElementById("passInput");
var sOut = document.getElementById("logoutBtn");
var welcomeUser = document.getElementById("userNamePass");
var btn = document.querySelector("button");
var alertD = document.getElementById("alertDanger");
var uName = "";
var usersContainer ;

if(localStorage.getItem("allusers") == null){
    usersContainer = [];
}else{
    usersContainer = JSON.parse(localStorage.getItem("allusers"));
}

btn.addEventListener("click",function(){
    if(btn.innerHTML == "Sign Up"){
        if(nameInput.value != "" && emailInput.value != "" && passInput.value != ""){
            var oneUser = {
                name: nameInput.value,
                email:emailInput.value,
                pass:passInput.value
            }
            usersContainer.push(oneUser);
            localStorage.setItem("allusers",JSON.stringify(usersContainer));
            alert("Saved");
        }else{
            alert("You have to fill all the inputs");
        }
    }else if(btn.innerHTML == "Sign In"){
        if(emailInput.value != "" && passInput.value != ""){
            for(var i=0;i<usersContainer.length;i++){
                if(emailInput.value == usersContainer[i].email && 
                   passInput.value == usersContainer[i].pass){
                    sessionStorage.setItem("sessionuser",usersContainer[i].name);
                     window.location.href = "pass.html";       
                    

                }else{
                    alertD.classList.remove("d-none");
                    alertD.classList.add("d-block")
                }
            }
        }else{
            alert("You have to fill all the inputs");
           
        }
    }
});

if(sOut != null){
    sOut.addEventListener("click",function(){
        window.location.href = "index.html";
    })
}

// edit the displayed inputs in the browser
if(signLink != null){
    signLink.addEventListener("click",function(){
        if(signLink.innerHTML == " Sign Up"){
            nameInput.classList.remove("d-none");
            nameInput.classList.add("d-inline");
            signLink.innerHTML = " Sign In";
            btn.innerHTML = "Sign Up";
            if(alertD.classList.contains("d-block")){
                
                alertD.classList.remove("d-block");
                alertD.classList.add("d-none");
                
            }
        }else if(signLink.innerHTML == " Sign In"){
            nameInput.classList.remove("d-inline");
            nameInput.classList.add("d-none");
            signLink.innerHTML = " Sign Up";
            btn.innerHTML = "Sign In";
        }  
        
    });
}

/////////////////////////////////////////
// btn.addEventListener("click",function(){
//     if(this.innerHTML == "Sign Up"){
        
//     }
// });
