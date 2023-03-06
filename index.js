if (localStorage.getItem('text'))
{
    let a = JSON.parse(localStorage.getItem('text'))
    for (let i=0;i<a.length;i++)
    {
        
    }
}

let div = document.querySelector('.todo-list')
let input = document.querySelector('input')
let btn = document.querySelector('button')

btn.onclick = function () { 
    
   
    
    let text = input.value
    let newDiv = document.createElement('div')
    let newBtn = document.createElement('button',)
  
     if (input.value === "") 
    {
        alert('Write some task')
    }
    else
    {
    newBtn.className = 'delete'
    newDiv.innerText = text
    newBtn.innerText = 'DEL'
    newDiv.append(newBtn)
    div.append(newDiv)
    input.value = ('')
    }
   

    let deleteTask = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteTask.length; i++) {
        deleteTask[i].onclick = function () {
            this.parentNode.remove();
        }
    }
}