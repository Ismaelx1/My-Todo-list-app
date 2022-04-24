

export let myOptions = [];
export let navDiv = ['Home'];

export function fillSelect() {
    let select = document.getElementById('project');
  select.innerHTML = '<option value="home">Home</option>' 
  for (let i = 1; i <= myOptions.length; i++) {
      let option = '<option value="'+ i + '" >' + myOptions[i-1] + '</option>';
      select.insertAdjacentHTML( 'beforeend', option );
  }
}

export function exitForm() {
    const formShow = document.querySelector('.form')
    formShow.style.visibility = "hidden"
  }


 export function hidePro() {
  const addProject = document.querySelector('.addProject')
    const inputProject = document.querySelector('#projectName')
    let proBtn = document.querySelector('.btnthis')

    inputProject.style.visibility = 'hidden'
    addProject.style.visibility = 'hidden'
    proBtn.style.visibility = 'visible'
  }

  export function showPro() {
    let navLen = navDiv.length

   

    if (navLen <= 4) {
      const addProject = document.querySelector('.addProject')
      const inputProject = document.querySelector('#projectName')
      let proBtn = document.querySelector('.btnthis')
  
      proBtn.style.visibility = 'hidden'
      inputProject.style.visibility = 'visible'
      addProject.style.visibility = 'visible'
    } else {
      return
    }
  }

 export function showForm() {
    const formShow = document.querySelector('.form')
    formShow.style.visibility = "visible"
  }
  
export function addProjectFunc() {
  const nav = document.querySelector('.navdiv')
  const addProject = document.querySelector('.addProject')

addProject.addEventListener('click', () => {
  const inputProject = document.querySelector('#projectName')

  let div = document.createElement('div')
  
 
  if (!inputProject.value) {
 hidePro()
  } else if (inputProject.value) {

    div.classList.add('divnav')
    div.textContent = inputProject.value
    
 
    myOptions.push(inputProject.value)
    navDiv.push(inputProject.value)

 //   const navIndex = navDiv.indexOf(inputProject.value, 0)
 
 //   div.append(deletePro(navIndex))

    nav.append(div)
    inputProject.value = ''
    fillSelect()
    hidePro()
   // console.log(navDiv, myOptions)
//   renderNav()


  }
  return div
}
)

}
/* 
  export function deletePro(index) {

   let deleteBtn = document.createElement('button')
   deleteBtn.classList.add('proBtn')
   deleteBtn.textContent = 'X'

   deleteBtn.addEventListener('click', () => {
     navDiv.splice(index,  1)
     myOptions.splice(index, 1)
     console.log(navDiv, myOptions)
     renderNav()
     fillSelect()
   })
    return deleteBtn
 }



 export function renderNav() {

  const div = document.createElement('div')

  const nav = document.querySelector('.navdiv')

   nav.innerHTML = '<div class="divnav today">Home</div>' 


navDiv.forEach((divN) => {
  const navIndex = navDiv.indexOf(divN, 0)

 
   div.classList.add('divnav');
   div.textContent = divN;
   nav.append(div)
   div.append(deletePro(navIndex))
}
)
}
*/





