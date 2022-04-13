
import './styles/main.css'



const nav = document.querySelector('.navdiv')
const showBtn = document.getElementById('showBtn')
const btnExit = document.querySelector('#exitform')
const formShow = document.querySelector('.form')
const addTask = document.querySelector('#addTask')
const taskInput = document.querySelector('#taskName')
const descInput = document.querySelector('#taskDesc')
const container = document.getElementById('taskdiv')

let myTasks = [];

nav.addEventListener('click', (e) => {
console.log(e)
})




function renderTasks() {

   myTasks.forEach((task, desc) => {
    const div = document.createElement('div')
    const divTxt = document.createElement('div')
    const divBtn = document.createElement('div')
    const doneBtn = document.createElement('button')
    const removeBtn = document.createElement('button')
    const txtH = document.createElement('h1')
    const txtDesc = document.createElement('p')

Object.keys(task, desc).forEach(item => {
    txtH.innerText = task[item];
    txtDesc.innerText = desc[item];

})
    div.classList.add('s')
    divTxt.classList.add('txtTask')
    divBtn.classList.add('btnTask')
   
    container.append(div)
    div.append(divTxt)
    div.append(divBtn)
    divTxt.append(txtH)
    divTxt.append(txtDesc)
    divBtn.append(doneBtn)
    divBtn.append(removeBtn)


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




function Task(task, description) {
    this.task = task,
    this.desc = description
}

function addtask() {
    let taskpara = taskInput.value
    let descriptionpara = descInput.value
    let newTask = new Task(taskpara, descriptionpara)
    myTasks.push(newTask)

taskInput.value = ''
descInput.value = ''
    console.log(myTasks)
    renderTasks()

}


const obj = {
    name: 'Jean-Luc Picard',
    rank: 'Captain'
  };

  // Prints "name Jean-Luc Picard" followed by "rank Captain"
  Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
   });