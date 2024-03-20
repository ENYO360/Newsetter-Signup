const inputEl = document.getElementById('inputEl')
const btnEl = document.getElementById('btnEl')
const invalidMsg = document.getElementById('invalid')

const inputEmail = inputEl.value


btnEl.addEventListener('click', function() {
    validEmail(inputEmail)

    emailStorage()
})

function validEmail(inputEmail) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (inputEmail.match(validRegex)) {
        return inputEmail
    
    } else {
        invalidMsg.textContent = 'Valid Email Required'
        console.log('wrong email')
        inputEl.style.border = '1px solid red'
        inputEl.style.color = 'red'
        inputEl.style.background = 'hsl(0, 69%, 87%)'
    }
}

function emailStorage() {
    let myEmail = inputEl.value

   localStorage.setItem("savedEmail", myEmail)
}
