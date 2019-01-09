//Example Component builder for Nutshell
//declaring object
const formBuidler = {
  //creating method to build the login form
  buildLoginForm(){
    //using string interpolation to create the form
    let formHTML = `
      <div class = "form">
        <form action="" class = registerForm>
          <input type="text" placeholder = "Name" required>
          <input type="email" placeholder = "Email" required>
          <input type="text" placeholder = "Username" required>
          <input type="password" placeholder = "Password" required>
          <input type="password" placeholder = "Confirm Password" required>
          <button>Create Account</button>
          <p class = "message">Already a Registered Member? <a href = "#">LogIn </a></p>
        </form>
        <form class = "login-form">
          <input type="text" placeholder = "Username" required>
          <input type="password" placeholder = "Password" required>
          <button>Login</button>
          <p class = "message">Don't have an account? <a href = "#">Register Now!</a></p>
        </form>
      </div>
      `
      $(".login-page").html(formHTML)
    },



    // /*RUSS CAN TAKE A LOOK LOL*/
    // buildLoginForm2(){
    //   let formContainer = document.createElement("div")
    //   formContainer.setAttribute("class", "form",)

    //   let form = document.createElement("form")
    //   formContainer.setAttribute("action", " ",)
    //   formContainer.setAttribute("class", "registerForm")


    //   let nameInput = document.createElement("input")
    //   nameInput.setAttribute("type", "text")
    //   nameInput.setAttribute("placeholder", "Name")

    //   let emailInput = document.createElement("input")
    //   emailInput.setAttribute("type", "email")
    //   emailInput.setAttribute("placeholder", "Email")

    //   let userNameInput = document.createElement("input")
    //   userNameInput.setAttribute("type", "text")
    //   userNameInput.setAttribute("placeholder", "Username")

    //   let userPasswordInput = document.createElement("input")
    //   userPasswordInput.setAttribute("type", "password")
    //   userPasswordInput.setAttribute("placeholder", "Password")

    //   let confirmUserPasswordInput = document.createElement("input")
    //   confirmUserPasswordInput.setAttribute("type", "password")
    //   confirmUserPasswordInput.setAttribute("placeholder", "Confirm Password")

    //   let registerButton = document.createElement("button")


    //   formContainer.appendChild(form)
    //   formContainer.appendChild(nameInput)
    //   formContainer.appendChild(emailInput)
    //   formContainer.appendChild(userNameInput)
    //   formContainer.appendChild(userPasswordInput)
    //   formContainer.appendChild(confirmUserPasswordInput)
    //   formContainer.appendChild(registerButton)

    //   let loginForm = document.createElement("form")
    //   loginForm.setAttribute("class", "loginForm")

    //   let loginUserNameInput = document.createElement("input")
    //   loginUserNameInput.setAttribute("type", "text")
    //   loginUserNameInput.setAttribute("placeholder", "Username")

    //   let loginUserPasswordInput = document.createElement("input")
    //   loginUserPasswordInput.setAttribute("type", "password")
    //   loginUserPasswordInput.setAttribute("placeholder", "Password")

    //   let loginButton = document.createElement("button")
    //   loginButton.textContent = "login"

    //   formContainer.appendChild(loginUserNameInput)
    //   formContainer.appendChild(loginUserPasswordInput)
    //   formContainer.appendChild(loginButton)



    //   return formContainer
    // }
}
formBuidler.buildLoginForm()




/*targeting the a tag on the message p tags. adding an event listener to at hyperlink and calling a function that targets the form
and animates it. on click the height width and opacity toggle to the next form ie goes from log in to register form*/
$(".message a").click(function(){
$("form").animate({height: "toggle", opacity: "toggle"}, "slow")
})
