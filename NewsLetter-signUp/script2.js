const submitEmail = document.getElementById('submitEmail')
const dismissBtn = document.getElementById('dismissbtn')

submitEmail.textContent = localStorage.getItem("savedEmail") + "."

dismissBtn.addEventListener('click', function() {
    window.location = 'index.html'
})