

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
const prioInput = document.getElementById('priority')




let myTasks = [];

nav.addEventListener('click', (e) => {
console.log(e)
})

renderTasks()



function renderTasks() {
  container.innerHTML = ''
   myTasks.forEach((task, index) => {
    const div = document.createElement('div')
    const divTxt = document.createElement('div')
    const divBtn = document.createElement('div')
    const taskName = document.createElement('div')
    const taskDescrip = document.createElement('div')
    const dueDate = document.createElement('div')
    const doneBtn = document.createElement('button')
  //  const removeBtn = document.createElement('button')
    const prioDiv = document.createElement('div')
    div.classList.add('s')
    divTxt.classList.add('txtTask')
    divBtn.classList.add('btnTask')
    taskName.classList.add('taskname')
    taskDescrip.classList.add('taskdes')
    dueDate.classList.add('duedate')
    prioDiv.classList.add('priotask')
   
console.log(myTasks)

    Object.keys(task).forEach((prop) => {
      
    if (prop === 'task') {
      taskName.textContent = task[prop]
    } else if (prop === 'desc') {
      taskDescrip.textContent = task[prop]
    } else if (prop === 'date') {
      dueDate.textContent = 'Before:' + ' ' + task[prop]
    } else if (prop === 'priority') {
      prioDiv.textContent = `Priority:` + ' ' + task[prop]
    }
    })
// taskName.textContent = task.task
// taskDescrip.textContent = task.desc
// dueDate.textContent = task.date
// prioDiv.textContent = task.priority

    container.append(div)
    div.append(divTxt)
    div.append(divBtn)
    divTxt.append(taskName)
    divTxt.append(taskDescrip)
    divTxt.append(dueDate)
    divTxt.append(prioDiv)

    doneBtn.textContent = 'Done'
    divBtn.appendChild(doneBtn)
  //  removeBtn.textContent = 'Remove'
    // divBtn.append(removeBtn)

    divBtn.append(createDelete(index))
   })
   taskInput.value = ''
   descInput.value = ''
    exitForm()


    
}

function createDelete(index) {
const removeBtn = document.createElement('button')
removeBtn.textContent = 'Remove'
  removeBtn.addEventListener('click', (e) => {
    myTasks.splice(index, 1)

renderTasks()
console.log(myTasks)
  })
  return removeBtn
}

// function createDelete(index, arr) {
//   const removeBtn = document.createElement('button')
//   removeBtn.textContent = 'Remove'
//   removeBtn.addEventListener('click', () => {
//       arr.splice(index, 1)
//   })
 //  return removeBtn
// } 

btnExit.addEventListener('click', exitForm)
addTask.addEventListener('click',addtask)
showBtn.addEventListener('click', showForm)

function exitForm() {
    formShow.style.visibility = "hidden"
}
function showForm() {
    formShow.style.visibility = "visible"

}




function Task(task, description, date, priority) {
    this.task = task,
    this.desc = description,
    this.date = date,
    this.priority = priority
    
}

function addtask() {
  const contentDiv = document.querySelector('.taskdiv')
  console.log(contentDiv)
    let taskpara = taskInput.value
    let descriptionpara = descInput.value
    let datee = inputDate.value
    let priority = prioInput.value
    let newTask = new Task(taskpara, descriptionpara, datee, priority)
    myTasks.push(newTask)

taskInput.value = ''
descInput.value = ''

   renderTasks()

}

