import { navDiv } from "./visibility.js"
import {renderTasks, createDelete, doneEffect} from './render.js'

export let myTasks = [];
export let proj0 = [];
export let proj1 = [];
export let proj2 = [];
export let proj3 = [];

export function navFunc() {
    const nav = document.querySelector('.navdiv')
     nav.addEventListener('click', () => {
      let e = event.target
       const container = document.getElementById('taskdiv')
        let divIndex = navDiv.indexOf(e.textContent, 0)
      
      if (e.textContent === 'Home') {
        container.innerHTML = ''
        renderTasks(myTasks)
      }

    else if (divIndex == 1) {
        container.innerHTML = ''
        
        renderTasks(proj0)
      } else if (divIndex == 2) {
        container.innerHTML = ''
        
        renderTasks(proj1)
      } else if (divIndex == 3) {
        container.innerHTML = ''
        
        renderTasks(proj2)
      } else if (divIndex == 4) {
        container.innerHTML = ''
    
        renderTasks(proj3)
      } else if (divIndex != 1 || divIndex != 2 || divIndex != 3 || divIndex != 4 || divIndex != 0) {
        renderTasks(myTasks)
      }
    }) 
    return
}
