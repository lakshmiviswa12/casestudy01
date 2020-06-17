
function validate(user,passwd,callback)
{
    if((user=="admin") && (passwd==12345))
    {
        alert("The given credentials are valid");
        return true;
        callback();   
    }
    else{
        alert("The given credentials are invalid");
        location.href="login.html";
    } 
}

function login()
{
    let user = document.getElementById("username").value;
    let passwd = document.getElementById("password").value;
    validate(user,passwd,redirect());
}

function redirect()
{
    location.href="index.html";
}