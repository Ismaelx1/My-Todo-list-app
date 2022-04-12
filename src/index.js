import './styles/main.css'



const nav = document.querySelector('.navdiv')
const addBtn = document.getElementById('addBtn')

nav.addEventListener('click', () => {

})

addBtn.addEventListener('click',add)



function add() {
    const container = document.getElementById('taskdiv')
    const div = document.createElement('div')
    div.classList.add('s')
    container.append(div)

}