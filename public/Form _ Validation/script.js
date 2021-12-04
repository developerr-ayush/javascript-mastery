
let create = document.querySelector("#create");
let errors = []

let errortag = document.querySelector(".errors");

let errorlist = document.querySelector(".errors-list");


function clearErrors() {
    errorlist.innerHTML = "";
    errortag.classList.remove("show")


}




create.addEventListener('click', function (a) {
    clearErrors();

    let username = document.querySelector("#username").value;

    if (username.length <= 6) {
        console.log("ayush");
        errors.push("Ensure the username is at least 6 characters long")
        a.preventDefault();
    }

    let pass = document.querySelector("#password").value;
    let cpass = document.querySelector("#password-confirmation").value;
    if (pass.length < 9) {
        console.log("ayush");
        errors.push("Ensure the password is at least 10 characters long")
        a.preventDefault();
    }
    if (cpass !== pass) {
        console.log("ayush");
        errors.push("Ensure the password and confirmation password match")
        a.preventDefault();
    }
    let terms = document.querySelector("#terms").checked;
    if (terms == false) {
        console.log("ayush");
        errors.push("Ensure the terms checkbox is checked")
        a.preventDefault();
    }
    showErrors()

})



function showErrors() {
    let createli = document.createElement("li")
    errortag.classList.add("show")
    errorlist.appendChild(createli)
    createli.innerHTML = errors;
    console.log(errors)
    for (let i = 0; i < errors.length; i++) {
        console.log("hello")
        errorlist.innerHTML = "<li>" + errors[i] + "</li>";
        
    }
}
