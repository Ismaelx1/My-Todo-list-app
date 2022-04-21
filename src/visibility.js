


let myOptions = [];
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
    const inputProject = document.querySelector('#projectName')
    let proBtn = document.querySelector('.btnthis')
  
    inputProject.style.visibility = 'hidden'
    addProject.style.visibility = 'hidden'
    proBtn.style.visibility = 'visible'
  }

  export function showPro() {
    let proBtn = document.querySelector('.btnthis')
    proBtn.style.visibility = 'hidden'
  
    inputProject.style.visibility = 'visible'
    addProject.style.visibility = 'visible'
  }

 export function showForm() {
    const formShow = document.querySelector('.form')
    formShow.style.visibility = "visible"
  }
  