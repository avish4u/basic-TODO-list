
// 	function add(){
// 	var work = todoEntryBox.value;
// 	newListElement(work , false);
// 	// document.getElementById("main").innerHTML = work;
// }
//  var myList = document.getElementById("main");
//  var todoEntryBox = document.getElementById("work");
//  //this function creates a new todo list item.

// function newToDoItem(work, completed){
// 		var work = todoEntryBox.value;
     
//          var newListItem = document.createElement('li');

//      newListItem.textContent = work;
//      myList.appendChild(newListItem)
//      newListItem.addEventListner("dblclick", )
 // 
//  function empty(){
// 	document.getElementById("work").value = " ";
// document.getElementById("main").innerHTML = "";
// }
var todoinput = document.getElementById("work");
var todobutton = document.getElementById("add");
var todoList = document.getElementById("main");


function addItem(event){
	//prevent Form from submitting
	// event.preventDefault();
	//todo DIV
	var todoDiv = document.createElement('div');
	todoDiv.classList.add("todo");
	//create LI
	var newTodo = document.createElement("li");
	// newTodo.innerText = "heloo";
	newTodo.classList.add('todo-item');
		todoDiv.appendChild(newTodo);
	//Check Mark Button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append That Div to the List
    todoList.appendChild(todoDiv);
    newTodo.innerHTML = todoinput.value;
    //Clear tO DO INPUT VALUE//
    todoinput.value = "";
}
todoList.onclick = function(e){
	var item = e.target;
	if(item.classList[0]==="trash-btn"){
		const todo = item.parentElement;
		todo.classList.toggle('deleted');
		todo.ontransitionend = function(){
			todo.remove();
		};
		//console.log(item.parentElement); Answer = DIV
       }


	if(item.classList[0]==="complete-btn"){

        const todo = item.parentElement;
		todo.classList.toggle('completed');
		
	}
};




  
	









