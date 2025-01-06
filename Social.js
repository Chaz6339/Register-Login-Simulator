

let feedContent = ["Test"]
let userNamesC = ["Test"]
let passWordsC = ["Test"]
function upload() {
let feed = document.getElementById("feed-el")
let userPostInput = document.getElementById("postText").value //POST INPUT
feedContent.push(userPostInput)
console.log(feedContent)
for (i = 0; i < feedContent.length; i++) {
feed.textContent = feedContent[i]
}
}
function create(){
   if (userNamesC.indexOf(document.getElementById("usernameCreate").value) !== -1){
       document.getElementById("greeting-el").innerHTML = "Username already taken. Please choose a new one."
    }
    else {
        var username = document.getElementById("usernameCreate").value
        localStorage.setItem("UserName", username)
        userNamesC.push(document.getElementById("usernameCreate").value)
        passWordsC.push(document.getElementById("passcode").value)
    }
    var password = document.getElementById("passcode").value
    localStorage.setItem("PassWord", password)
    document.getElementById("usernameCreate").innerHTML = ""
    document.getElementById("passcode").innerHTML = ""
    console.log(userNamesC)
    console.log(passWordsC)
    
}

function login() {
    if (document.getElementById("usernamee").value != localStorage.getItem("UserName") || document.getElementById("passcodee").value != localStorage.getItem("PassWord")) {

        document.getElementById("greeting-el").innerHTML = "Your username or password is incorrect. Please try again"
    }
    else {
        document.getElementById("usernameCreate").value = ""
        document.getElementById("passcode").value = ""
        document.getElementById("greeting-el").innerHTML = "Login Successful!"
    }
}


