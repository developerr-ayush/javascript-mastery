
let create = document.querySelector("#create");
let errors = [
    "Ensure the username is at least 6 characters long",
    "Ensure the password is at least 10 characters long",
    "Ensure the password and confirmation password match",
    "Ensure the terms checkbox is checked"
]

let errortag = document.querySelector(".errors");

let errorlist = document.querySelector(".errors-list")

function clearErrors() {
    
errorlist.innerHTML = "";
errortag.classList.remove("show")


}


function showErrors(i) {
    let createli = document.createElement("li")
    errortag.classList.add("show")
    errorlist.appendChild(createli)
    createli.innerHTML = errors[i];
}


create.addEventListener('click', function (a) {
    clearErrors();

    let username = document.querySelector("#username").value;

    if (username.length <= 6) {
        console.log("ayush");
        showErrors(0);
        a.preventDefault();
    }

    let pass = document.querySelector("#password").value;
    let cpass = document.querySelector("#password-confirmation").value;
    if (pass.length < 9) {
        console.log("ayush");
        showErrors(1);
        a.preventDefault();
    }
    if (cpass !== pass) {
        console.log("ayush");
        showErrors(2);
        a.preventDefault();
    }
    let terms = document.querySelector("#terms").checked;
    if (terms == false) {
        console.log("ayush");
        showErrors(3);
        a.preventDefault();
    }


})

