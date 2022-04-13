
import './styles/main.css'



const nav = document.querySelector('.navdiv')
const showBtn = document.getElementById('showBtn')
const btnExit = document.querySelector('#exitform')
const formShow = document.querySelector('.form')
const addTask = document.querySelector('#addTask')
const taskInput = document.querySelector('#taskName')
const descInput = document.querySelector('#taskDesc')
const container = document.getElementById('taskdiv')
const inputDate = document.querySelector('#appt')


let myTasks = [];

nav.addEventListener('click', (e) => {
console.log(e)
})




function renderTasks() {

   myTasks.forEach((task, desc, date) => {
    const div = document.createElement('div')
    const divTxt = document.createElement('div')
    const divBtn = document.createElement('div')
    const taskName = document.createElement('div')
    const taskDescrip = document.createElement('div')
    const dueDate = document.createElement('div')
    const doneBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
    div.classList.add('s')
    divTxt.classList.add('txtTask')
    divBtn.classList.add('btnTask')
    taskName.classList.add('taskname')
    taskDescrip.classList.add('taskdes')
    dueDate.classList.add('duedate')
   




    container.append(div)
    div.append(divTxt)
    div.append(divBtn)
    divTxt.append(taskName)
    divTxt.append(taskDescrip)
    divTxt.append(dueDate)
    divBtn.append(doneBtn)
    divBtn.append(removeBtn)


    
    taskDescrip.textContent = desc
    dueDate.textContent = date
   })
   taskInput.value = ''
   descInput.value = ''
    exitForm()

}
btnExit.addEventListener('click', exitForm)
addTask.addEventListener('click',addtask)
showBtn.addEventListener('click', showForm)

function exitForm() {
    formShow.style.visibility = "hidden"
}
function showForm() {
    formShow.style.visibility = "visible"

}




function Task(task, description, date) {
    this.task = task,
    this.desc = description,
    this.date = date
}

function addtask() {
    let taskpara = taskInput.value
    let descriptionpara = descInput.value
    let datee = inputDate.value
    let newTask = new Task(taskpara, descriptionpara, datee)
    myTasks.push(newTask)

taskInput.value = ''
descInput.value = ''

    console.log(myTasks)
    renderTasks()

}





