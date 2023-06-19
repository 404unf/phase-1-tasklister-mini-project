document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('create-task-form');
  const currentList = document.getElementById('tasks');
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete'
  deleteButton.textContent = 'X'

  input.addEventListener('submit', function (event) {
    event.preventDefault()

    const text = document.getElementById('new-task-description').value
    const newLi = document.createElement('li')
    const newButton = deleteButton.cloneNode(true)
    newButton.addEventListener('click', (event) => { event.target.parentElement.remove() })

    newLi.textContent = text
    newLi.appendChild(newButton)

    currentList.appendChild(newLi)
  }); 
})