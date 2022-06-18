// https://type.fit/api/quotes
// api
let button = document.getElementById("btn")
let show = document.getElementById("show")
let author = document.getElementById("author")


async function ayush() {
    let response = await fetch("https://type.fit/api/quotes")
    let response1 = await response.json()
    // console.log(response1)
    
    return response1
}
ayush().then(function(response1){
    // let i = Math.floor(Math.random() * 10) + 1;
    let i = 1
    show.innerHTML= response1[i].text
    author.innerHTML= response1[i].author
})
button.addEventListener("click",function(){
    ayush().then(function(response1){
        // console.log(response1)
        let i = Math.floor(Math.random() * 1500) + 1;
        // console.log(i)
        // let i = 1
        show.innerHTML= response1[i].text
        author.innerHTML= response1[i].author
    })
})
