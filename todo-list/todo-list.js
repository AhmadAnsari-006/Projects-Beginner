const todoList=[];
renderTodoList();
function renderTodoList(){
  let todoListHTML='';

  todoList.forEach((todoObject, index)=>{
    const {name,dueDate}= todoObject;   //const name=todoObject.name;
    const html= `
      <div class="todo-act-name">${name}</div> 
      <div class="todo-act-date">${dueDate}</div>
      <button 
        class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
    todoListHTML+=html;
  })
  //for (let i=0; i<todoList.length; i++){ }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
        
  document.querySelectorAll('.js-delete-todo-button')//selects all delete buttons
    .forEach(
      (deleteButton, index) => {//loops run for all delete buttons
        deleteButton.addEventListener('click',()=>{
          todoList.splice(index,1);
          renderTodoList();
        });
      });//after loop ends the index is undefined
}
document.querySelector('.js-add-todo-button')
  .addEventListener('click',()=>{
    addTodo();
  });

function addTodo(){
  const inputElement= document.querySelector('.js-name-input');
  const name_value = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate_value = dateInputElement.value;

  todoList.push({
    name:name_value,
    dueDate:dueDate_value,
  });
  inputElement.value='';
  renderTodoList();
}