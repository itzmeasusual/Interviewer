var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var intro = document.querySelector(".intro");
var inp = document.querySelector(".inp");
var qu = document.querySelector(".qu");
var wrong = document.querySelector(".wrong");
var qr = document.querySelector(".qr")

btn1.addEventListener("click", interviewQuestions);



function interviewQuestions(e){
    e.preventDefault();
    intro.classList.add("hide");
    if((inp.value).toLowerCase() == "developer"){
        qr.classList.remove("hide")
        qu.innerHTML = "Please, what is your area of specialization and what tools do you use?"
    }
    else if((inp.value).toLowerCase() == "driver"){
        qr.classList.remove("hide")
        qu.innerHTML = "Please, how long have you been driving and do you have a driving license?"
    }
    else if((inp.value).toLowerCase() == "nurse"){
        qr.classList.remove("hide")
        qu.innerHTML = "Please, what nursing degree do you possess and  how many years of experience do you have?"
    }
    else{
        intro.classList.remove("hide")
        wrong.innerHTML = "Enter a valid option or check your spelling."
    }
};

btn2.addEventListener("click", feedback);

function feedback(e){
    e.preventDefault();
    window.open("response.html", "_self")
}