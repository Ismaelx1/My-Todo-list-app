import { renderTasks } from "./render.js"


export function addtask(thisArr) {
    const inputDate = document.querySelector('#appt')
  const prioInput = document.getElementById('priority')
  const taskInput = document.querySelector('#taskName')
  const descInput = document.querySelector('#taskDesc')
  const container = document.getElementById('taskdiv')
  
      let taskpara = taskInput.value
      let descriptionpara = descInput.value
      let datee = inputDate.value
      let priority = prioInput.value
      let newTask = new Task(taskpara, descriptionpara, datee, priority)
      calSelect(newTask)
  
  taskInput.value = ''
  descInput.value = ''
  container.innerHTML = ''
     renderTasks(thisArr)
  }

  function calSelect(newTask) {
    let selectt = document.getElementById('project')
    let myTasks = [];
    let proj0 =[];
    let proj1 = [];
    let proj2 = [];
    let proj3 = [];
   
  
    if (selectt.value === 'home') {
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

 export function Task(task, description, date, priority) {
    this.task = task,
    this.desc = description,
    this.date = date,
    this.priority = priority,
    this.done = false
}