
let create = document.querySelector("#create");
let errors = []

let errortag = document.querySelector(".errors");

let errorlist = document.querySelector(".errors-list");


function clearErrors() {
    errorlist.innerHTML = "";
    errortag.classList.remove("show")
    console.log(errors)
    let lastItem = errors.length;
    errors.splice(0,lastItem)


}




create.addEventListener('click', function (a) {
    clearErrors();

    let username = document.querySelector("#username").value;

    if (username.length <= 6) {
        // console.log("");
        errors.push("Ensure the username is at least 6 characters long")
        a.preventDefault();
    }

    let pass = document.querySelector("#password").value;
    let cpass = document.querySelector("#password-confirmation").value;
    if (pass.length < 9) {
        errors.push("Ensure the password is at least 10 characters long")
        a.preventDefault();
    }
    if (cpass !== pass) {
        errors.push("Ensure the password and confirmation password match")
        a.preventDefault();
    }
    let terms = document.querySelector("#terms").checked;
    if (terms == false) {
        errors.push("Ensure the terms checkbox is checked")
        a.preventDefault();
    }
    showErrors()

})



function showErrors() {
    errortag.classList.add("show")
    // createli.innerHTML = errors;
    for (let i = 0; i < errors.length; i++) {
        // console.log(errors);
        // li tag created 
        let createli = document.createElement("li")
        // created value 
        var textnode = document.createTextNode(errors[i]);
        // added value in li tag 
        createli.appendChild(textnode)
        // added li in ul 
        errorlist.appendChild(createli)

        // errorlist.innerHTML = "<li>" + errors[i] + "</li>";
    }
}
