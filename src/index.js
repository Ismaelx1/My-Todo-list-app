import './styles/main.css'
import {showForm, fillSelect, exitForm, hidePro, showPro, myOptions, addProjectFunc, navDiv} from './visibility.js'
import { Task, calSelect, addtask} from './task.js'
import {navFunc, myTasks, proj0, proj1, proj2, proj3} from './nav.js'
import {renderTasks, createDelete, doneEffect} from './render.js'


addProjectFunc()
navFunc()

const addTask = document.querySelector('#addTask')
addTask.addEventListener('click',() => {
  addtask(myTasks)
})

  const showProject = document.querySelector('.btnthis')
showProject.addEventListener('click', showPro)

const btnExit = document.querySelector('#exitform')
btnExit.addEventListener('click', exitForm)

const showBtn = document.getElementById('showBtn')
showBtn.addEventListener('click', showForm)




