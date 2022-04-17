

import './styles/main.css'

localStorage.clear();

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
const showProject = document.querySelector('.btnthis')
const inputProject = document.querySelector('#projectName')
const addProject = document.querySelector('.addProject')




let myTasks = [];



// nav.addEventListener('click', () => {
 // let e = event.target
//   if (e.innerHTML === 'Accomplished Tasks' || e.innerHTML === 'Removed Tasks') {
//    return false;
//   } else if (e.innerHTML !== 'Accomplished Tasks' || e.innerHTML !== 'Removed Tasks') {
//     let newM = e.textContent
// 
//     newM = new Array;
//     newM = [
//       {
//         task: 'This Man',
//         desc: 'Holy Hell',
//         date: '23/54/2012',
//         priority: 'Medium'
 //      }
//     ]
// console.log(newM)
//     container.innerHTML = ''
//     renderTasks(newM)
//   }
// 
// })

renderTasks(myTasks)



function renderTasks(rendArr) {
  container.innerHTML = ''
   rendArr.forEach((task, index) => {
    const div = document.createElement('div')
    const divTxt = document.createElement('div')
    const divBtn = document.createElement('div')
    const taskName = document.createElement('div')
    const taskDescrip = document.createElement('div')
    const dueDate = document.createElement('div')
    const prioDiv = document.createElement('div')
    div.classList.add('s')
    divTxt.classList.add('txtTask')
    divBtn.classList.add('btnTask')
    taskName.classList.add('taskname')
    taskDescrip.classList.add('taskdes')
    dueDate.classList.add('duedate')
    prioDiv.classList.add('priotask')

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

    if (task.done) {
      div.classList.add('newone')
    } else if (!task.done) {
      div.classList.add('s')
    }

    container.append(div)
    div.append(divTxt)
    div.append(divBtn)
    divTxt.append(taskName)
    divTxt.append(taskDescrip)
    divTxt.append(dueDate)
    divTxt.append(prioDiv)
    divBtn.appendChild(doneEffect(task, div))
    divBtn.append(createDelete(index))
   })
   taskInput.value = ''
   descInput.value = ''
    exitForm()    
}

function createDelete(index) {
const removeBtn = document.createElement('button')
removeBtn.textContent = 'Remove'
  removeBtn.addEventListener('click', () => {
    myTasks.splice(index, 1)
renderTasks(myTasks)
  })
  return removeBtn
}

function doneEffect(task, had) {
  const doneBtn = document.createElement('button')
  doneBtn.textContent = 'Done'
  doneBtn.addEventListener('click', () => {
    task.done = true;
    had.classList.add('newone')
    renderTasks(myTasks)
  })
  return doneBtn
}

  addProject.addEventListener('click', () => {
    let newArr =  inputProject.value
    let div = document.createElement('div')
    div.classList.add('divnav')
    div.textContent = newArr
    nav.appendChild(div)
    newArr = [];
    

    hidePro()
    return newArr
   

  })

function hidePro() {
  inputProject.style.visibility = 'hidden'
  addProject.style.visibility = 'hidden'
}

function showPro() {
  inputProject.style.visibility = 'visible'
  addProject.style.visibility = 'visible'
}

function exitForm() {
  formShow.style.visibility = "hidden"
}
function showForm() {
  formShow.style.visibility = "visible"
}

showProject.addEventListener('click', showPro)
btnExit.addEventListener('click', exitForm)
addTask.addEventListener('click',addtask)
showBtn.addEventListener('click', showForm)


function Task(task, description, date, priority) {
    this.task = task,
    this.desc = description,
    this.date = date,
    this.priority = priority,
    this.done = false
}

function addtask() {
    let taskpara = taskInput.value
    let descriptionpara = descInput.value
    let datee = inputDate.value
    let priority = prioInput.value
    let newTask = new Task(taskpara, descriptionpara, datee, priority)
    myTasks.push(newTask)
    localStorage.setItem("myTasks", JSON.stringify(myTasks))
taskInput.value = ''
descInput.value = ''

   renderTasks(myTasks)
}

const localLeads = JSON.parse(localStorage.getItem("myTasks"))
    if (localLeads) {
        myTasks = localLeads
      
    }

