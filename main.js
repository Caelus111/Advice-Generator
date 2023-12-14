const title = document.querySelector('.title')
const advice = document.querySelector('.advice')
const dice = document.querySelector('.dice')
const apiUrl = 'https://api.adviceslip.com/advice'


function getAdvice(params) {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        title.textContent = `advice #${data.slip.id}`
        advice.textContent = `${data.slip.advice}`
    })
}

getAdvice()

dice.addEventListener('click', getAdvice)