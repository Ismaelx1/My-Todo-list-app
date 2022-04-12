
import './styles/main.css'



const nav = document.querySelector('.navdiv')
const showBtn = document.getElementById('showBtn')
const btnExit = document.querySelector('#exitform')
const formShow = document.querySelector('.form')
const addTask = document.querySelector('#addTask')
const taskInput = document.querySelector('#taskName')
const descInput = document.querySelector('#taskDesc')

let myTasks = [];

nav.addEventListener('click', () => {

})

addTask.addEventListener('click',addtask)
showBtn.addEventListener('click', showForm)


function renderTasks() {
    const container = document.getElementById('taskdiv')
   myTasks.forEach((task) => {
    const div = document.createElement('div')
    div.classList.add('s')
    container.append(div)
   })
    exitForm()

}
btnExit.addEventListener('click', exitForm)
function exitForm() {
    formShow.style.visibility = "hidden"
}
function showForm() {
    formShow.style.visibility = "visible"

}




function Task(task, description) {
    this.task = task,
    this.desc = description
}

function addtask() {
    let taskpara = taskInput.value
    let descriptionpara = descInput.value
    let newTask = new Task(taskpara, descriptionpara)
    myTasks.push(newTask)

    console.log(myTasks)
    renderTasks()

}