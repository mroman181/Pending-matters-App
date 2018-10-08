const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

var itemCount=0;
var uncheckedCount=0;

function newTodo() {


	var li = document.createElement("li");
	var input = document.createElement("input");
	var label = document.createElement("label");

	label.innerHTML=itemCount;
	label.setAttribute("for", "task"+itemCount);
	label.contentEditable = true;

	input.type="checkbox";
	input.name="task";
	input.id="task"+itemCount;  
	

	li.appendChild(input);
	li.appendChild(label);
	li.onclick=actualizarSpans;

	list.appendChild(li);

	itemCount=itemCount+1;
	uncheckedCount=uncheckedCount+1;

	itemCountSpan.innerHTML=itemCount;
	uncheckedCountSpan.innerHTML=uncheckedCount;
}

function actualizarSpans(){
	
	var checkbox = document.getElementsByTagName("input");
	uncheckedCount = itemCount;
	for(i=0; i< checkbox.length; i++){
		
		if(checkbox[i].checked){
			uncheckedCount=uncheckedCount-1;
			uncheckedCountSpan.innerHTML=uncheckedCount;
		}
	
	}
}

function deleteTodo() {

	var li = document.getElementsByTagName("li");
	var input = document.getElementsByTagName("input");
	var checkbox = document.getElementsByTagName("input");

	var j=0;
	for(var i=0; i<itemCount; i++){
	
		if(checkbox[j].checked){
			list.removeChild(li[j]);
		}else{
			j++;
		}
	}

	itemCount=uncheckedCount;
	actualizarSpans();
	itemCountSpan.innerHTML=itemCount;
}