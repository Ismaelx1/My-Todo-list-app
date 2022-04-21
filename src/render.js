import { exitForm } from "./visibility.js"


export function renderTasks(rendArr) {
    const container = document.getElementById('taskdiv')
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
      divBtn.appendChild(doneEffect(task, div, rendArr))
      divBtn.append(createDelete(index, rendArr))
     })
  exitForm()
  }

  function createDelete(index, arr) {
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
      removeBtn.addEventListener('click', () => {
        arr.splice(index, 1)
    renderTasks(arr)
      })
      return removeBtn
    }
    
    function doneEffect(task, had, thisa) {
      const doneBtn = document.createElement('button')
      doneBtn.textContent = 'Done'
      doneBtn.addEventListener('click', () => {
        if (task.done == false) {
          task.done = true;
          had.classList.add('newone')
        } else if (task.done == true) {
          task.done = false;
          had.classList.add('s')
        }
        renderTasks(thisa)
      })
      return doneBtn
    }