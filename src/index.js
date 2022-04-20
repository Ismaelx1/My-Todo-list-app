

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
let navDiv = ['Home'];
let proj0 =[];
let proj1 = [];
let proj2 = [];
let proj3 = []

let myOptions = [];

function fillSelect() {

  let select = document.getElementById('project');
 
select.innerHTML = '<option value="home">Home</option>'
for (let i = 1; i <= myOptions.length; i++) {
    let option = '<option value="'+ i + '" >' + myOptions[i-1] + '</option>';
    select.insertAdjacentHTML( 'beforeend', option );
   
}
}






nav.addEventListener('click', () => {
let e = event.target

  if (e.textContent === 'Home') {
    container.innerHTML = ''
    renderTasks(myTasks)
    addTask.addEventListener('click',() => {
      addtask(myTasks)
    })
  }

//  let playa = e.textContent
  let roro = navDiv.indexOf(e.textContent, 0)


  if (roro == 1) {
    container.innerHTML = ''
    
    renderTasks(proj0)
    addTask.addEventListener('click',() => {
      addtask(proj0)
    })
  } else if (roro == 2) {
    container.innerHTML = ''
    
    renderTasks(proj1)
    addTask.addEventListener('click',() => {
      addtask(proj1)
    })
  } else if (roro == 3) {
    container.innerHTML = ''
    
    renderTasks(proj2)
    addTask.addEventListener('click',() => {
      addtask(proj2)
    })
  } else if (roro == 4) {
    container.innerHTML = ''
    
    renderTasks(proj3)
    addTask.addEventListener('click',() => {
      addtask(proj3)
    })
  }

})






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
    divBtn.appendChild(doneEffect(task, div, rendArr))
    divBtn.append(createDelete(index, rendArr))
   })
   taskInput.value = ''
   descInput.value = ''

exitForm()
}

addTask.addEventListener('click',() => {
  addtask(myTasks)
})

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

function hidePro() {
  inputProject.style.visibility = 'hidden'
  addProject.style.visibility = 'hidden'

  let proBtn = document.querySelector('.btnthis')
  proBtn.style.visibility = 'visible'
}

function showPro() {
  let proBtn = document.querySelector('.btnthis')
  proBtn.style.visibility = 'hidden'

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

showBtn.addEventListener('click', showForm)


function Task(task, description, date, priority) {
    this.task = task,
    this.desc = description,
    this.date = date,
    this.priority = priority,
    this.done = false
}

function addtask(thisArr) {
    let taskpara = taskInput.value
    let descriptionpara = descInput.value
    let datee = inputDate.value
    let priority = prioInput.value
    let newTask = new Task(taskpara, descriptionpara, datee, priority)
    let selectt = document.getElementById('project')
    

 



  // if (selectt.value == 'home') {
  //   myTasks.push(newTask)
  // } else if (selectt.value == '1') {
   //  proj0.push(newTask)
 //  } else if (selectt.value == '2') {
 //    proj1.push(newTask)
 //  } else if (selectt.value == '3') {
  //   proj2.push(newTask)
 //  } else if (selectt.value == '4') {
 //    proj3.push(newTask)
 //  } else {
 //    myTasks.push(newTask)
 //  }

 //  switch(selectt.value) {
 //    case 'home': myTasks.push(newTask)
 //    break;
// 
 //    case '1': proj0.push(newTask) 
   //  break;

 //    case '2': proj1.push(newTask) 
//     break;

 //    case '3': proj2.push(newTask) 
   // break;

  //   case '4': proj3.push(newTask) 
  //   break;

 //    default: alert('Ho')


 //  }



 //   localStorage.setItem("myTasks", JSON.stringify(myTasks))
taskInput.value = ''
descInput.value = ''


container.innerHTML = ''
   renderTasks(thisArr)
}

// const localLeads = JSON.parse(localStorage.getItem("myTasks"))
//     if (localLeads) {
//         myTasks = localLeads
//       
//     }
// 
