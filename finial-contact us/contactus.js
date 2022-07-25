
       
var btnContainer = document.getElementById("navbar");
var btns = btnContainer.getElementsByClassName("btm");

for(var i=0; i<btns.length; i++){
  btns[i].addEventListener('click', function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active");
    this.className += " active";
  })
}

   
   

const min = 40;
const max = 1000;






const fname= document.querySelector("#inputFname");
window.onload = (event) => {
    console.log(fname)

  };
fname.addEventListener("input", ()=>{
    let nameInput =  document.querySelector("#inputFname").value

    if(!nameInput){
        document.querySelector(".nameFError").innerText = "Please Enter your name";
    }else if(nameInput.length < 3){
        document.querySelector(".nameFError").innerText = "Please Enter valid name"
    } else if(nameInput.length >= 3){
        document.querySelector(".nameFError").innerText = ""
    }

})


const Country= document.querySelector("#inputCountry");
window.onload = (event) => {
    console.log(Country)

  };
Country.addEventListener("input", ()=>{
    let nameInput =  document.querySelector("#inputCountry").value

    if(!nameInput){
        document.querySelector(".countryError").innerText = "Please Enter your name";
    }else if(nameInput.length < 3){
        document.querySelector(".countryError").innerText = "Please Enter valid name"
    } else if(nameInput.length >= 3){
        document.querySelector(".countryError").innerText = ""
    }

})



const validMail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

const YourEmail = document.querySelector("#inputEmail");
YourEmail.addEventListener("input", () => {
    let mailError = document.querySelector(".emailError")
    let value = document.querySelector("#inputEmail").value;
    if(!value){
        mailError.innerText = "Please Enter Your Mail"
    }else if(!value.match(validMail)){
        mailError.innerText = "Please Enter Valid Mail"
    }else if(value.match(validMail)){
        mailError.innerText = ""
    }
});


const validNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const phone = document.querySelector("#phone");
phone.addEventListener("input", () => {
    let mobileError = document.querySelector(".mobileError")
    let value = document.querySelector("#phone").value;
    if(!value){
        mobileError.innerText = "Please Enter Number"
    }else if(isNaN(value) === true){
        mobileError.innerText = "Please Enter Only Numbers"
    }
    else if(!value.match(validNumber)){
        mobileError.innerText = "Please Enter Valid Number"
    }
    else if(value.match(validNumber)){
        mobileError.innerText = ""
    }
})


const textArea1 = document.getElementById('message');
textArea1.minLength = min;
textArea1.maxLength = max;
textArea1.addEventListener('keyup', () => {
    console.log(max)
    let value = textArea1.value;
    if(value.length < min){
    document.querySelector(".messageError").innerText = "Please Enter above 40 characters"
    }else if(value.length === max){
        document.querySelector(".messageError").innerText = "Maximum 1000 Characters only"
    } else if(min < value.length < max){
        document.querySelector(".messageError").innerText = ""
    }
});




