import { myTasks, proj0, proj1, proj2, proj3 } from "./nav.js"
import {renderTasks, createDelete, doneEffect} from './render.js'
import { addProjectFunc, deletePro  } from "./visibility.js"

export function Task(task, description, date, priority) {
  this.task = task,
  this.desc = description,
  this.date = date,
  this.priority = priority,
  this.done = false
}

export function calSelect(newTask) {
  let selectt = document.getElementById('project')

  if (selectt.value === 'Home') {
  myTasks.push(newTask)
    return myTasks

  } else if (selectt.value === '1') {
    proj0.push(newTask)
     return proj0

  } else if (selectt.value === '2') {
    proj1.push(newTask)
     return proj1
   
  } else if (selectt.value === '3') {
    proj2.push(newTask)
     return proj2
 
  } else if (selectt.value === '4') {
    proj3.push(newTask)
     return proj3

  } else {
   myTasks.push(newTask)
   return myTasks
  }
}


export function addtask(thisArr) {
  const taskInput = document.querySelector('#taskName')
  const descInput = document.querySelector('#taskDesc')
  const container = document.getElementById('taskdiv')
  const inputDate = document.querySelector('#appt')
  const prioInput = document.getElementById('priority')

    let taskpara = taskInput.value
    let descriptionpara = descInput.value
    let datee = inputDate.value
    let priority = prioInput.value
    let newTask = new Task(taskpara, descriptionpara, datee, priority)

  calSelect(newTask)
    renderTasks(thisArr)
      taskInput.value = ''
        descInput.value = ''
          container.innerHTML = ''
}


