userEmail = document.getElementById("signinEmail");
userPassword = document.getElementById("signinPassword");
signupName = document.getElementById("signupName");
signupEmail = document.getElementById("signupEmail");
signupPassword = document.getElementById("signupPassword");

var signUpContainer = [];
if (localStorage.getItem('signUpData') == null) {
    signUpContainer = []
} else {
    signUpContainer = JSON.parse(localStorage.getItem('signUpData'))
}

function signUp() {
    x = signupName.value;
    var signUp = {
        signName: signupName.value,
        signPassword: signupPassword.value,
        signEmail: signupEmail.value
    }
    if (signUp.signName == '' || signUp.signEmail == '' || signUp.signPassword == '') {
        document.getElementById("exist").innerHTML = `<span class="text-danger m-3">All inputs is required</span>`;
    }
    else {
        if (signUpContainer.length == 0) {
            signUpContainer.push(signUp);
            document.getElementById("exist").innerHTML = `<span class=" text-success  m-3">Success</span>`;
            localStorage.setItem('signUpData', JSON.stringify(signUpContainer));
            document.location.href = "Index.html";
        }
        else {
            for (var i = 0; i < signUpContainer.length; i++) {
                if (signUp.signEmail == signUpContainer[i].signEmail) {
                    document.getElementById("exist").innerHTML = `<span class="text-danger m-3">email already exists</span>`;
                }

                else
                    document.getElementById("exist").innerHTML = `<span class=" text-success  m-3">Success</span>`;

            }

            signUpContainer.push(signUp);
            localStorage.setItem('signUpData', JSON.stringify(signUpContainer));
            document.location.href = "Index.html";

        }
    }



}

function login() {

    if (userEmail.value == '' || userPassword.value == '') {
        document.getElementById("incorrect").innerHTML = `<span class="text-danger m-3">All inputs is required</span>`;
    }
    else {

        if (signUpContainer.length == 0)
            document.getElementById("incorrect").innerHTML = `<span class="text-danger m-3">SignUp First</span>`;

        else {
            for (var i = 0; i < signUpContainer.length; i++) {

                if (userEmail.value.toLowerCase() == signUpContainer[i].signEmail.toLowerCase() && userPassword.value.toLowerCase() == signUpContainer[i].signPassword.toLowerCase()) {
                    sessionStorage.setItem('name', signUpContainer[i].signName)
                    document.location.href = 'Index3.html'


                }
                else
                    document.getElementById("incorrect").innerHTML = `<span class="text-danger m-3">Incorrect Email or Password</span>`;

            }
        }

    }




}

var regt=/^\w{1,}(@)\w{1,5}(.com)/
function testEmail(sigEmail){
    

    if (regt.test(sigEmail.value)) {
        document.getElementById(sigEmail.id).classList.add('is-valid')
        document.getElementById(sigEmail.id).classList.remove('is-invalid')

    }
    else
    {
        document.getElementById(sigEmail.id).classList.add('is-invalid')
        document.getElementById(sigEmail.id).classList.remove('is-valid')
    }
   
}
try {
    var Uname = sessionStorage.getItem('name');
document.getElementById('username').innerHTML = `<h1 >welcome ${Uname}</h1>`;
} catch (error) {
    console.log('my time to excute is coming');
}


