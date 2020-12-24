// const url = 'https://login-servers.herokuapp.com';
function signup() {


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var cnic = document.getElementById("cnic").value;
    var password = document.getElementById("password").value;

    user = {
        name1: name,
        email1: email,
        password1: password,
        cnic1: cnic,
    }

    const Http = new XMLHttpRequest();
    
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = () => {

        document.getElementById("result").innerHTML = Http.responseText;
    }
    return false;

}


function login() {

    let Emails = document.getElementById("uEmail").value;
    let Passwords = document.getElementById("uPassword").value;
    let user1 = {
        email: Emails,
        password: Passwords
    }
    const Http = new XMLHttpRequest();
    
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify(user1));
    document.getElementById('uEmail').value = ""
    document.getElementById('uPassword').value = ""
    Http.onreadystatechange = () => {
        document.getElementById("container").innerText = Http.responseText;
    }
    return false;
}