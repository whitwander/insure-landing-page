const menu = document.getElementById('menu')
const open = document.getElementById('open')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    menu.classList.remove('hidden')
})

close.addEventListener('click', () => {
    menu.classList.add('hidden')
})
