import './styles/main.css'
import { renderTasks } from './render.js';
import { exitForm, hidePro, showForm, showPro, fillSelect } from './visibility.js';
import { addtask, Task } from './task.js'


let navDiv = ['Home'];
const nav = document.querySelector('.navdiv')
nav.addEventListener('click', () => {
let e = event.target
const container = document.getElementById('taskdiv')
const navIndex = navDiv.indexOf(e.textContent, 0)

  if (e.textContent === 'Home') {
    container.innerHTML = ''

    renderTasks(myTasks)
  } else if (navIndex == 1) {
    container.innerHTML = ''

    renderTasks(proj0)
  } else if (navIndex == 2) {
    container.innerHTML = ''
    
    renderTasks(proj1)
  } else if (navIndex == 3) {
    container.innerHTML = ''
    
    renderTasks(proj2)
  } else if (navIndex == 4) {
    container.innerHTML = ''
    
    renderTasks(proj3)
  } else if (navIndex != 1 || roro != 2 || roro != 3 || roro != 4 || roro != 0) {
    
    renderTasks(myTasks)
  }
}) 

const addTask = document.querySelector('#addTask')
addTask.addEventListener('click',() => {
  addtask(myTasks)
})

const addProject = document.querySelector('.addProject')
  addProject.addEventListener('click', () => {
    let newArr =  inputProject.value
    let div = document.createElement('div')
   
    if (!inputProject.value) {
   hidePro()
    } else if (inputProject.value) {
      div.classList.add('divnav')
      div.textContent = newArr
      nav.appendChild(div)
      myOptions.push(newArr)
      navDiv.push(newArr)
      fillSelect()
      inputProject.value = ''
      hidePro()
    }
    return div
  })

const showProject = document.querySelector('.btnthis')
showProject.addEventListener('click', showPro)

const btnExit = document.querySelector('#exitform')
btnExit.addEventListener('click', exitForm)

const showBtn = document.getElementById('showBtn')
showBtn.addEventListener('click', showForm)
