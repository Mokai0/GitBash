//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); //completed-tasks

//Add a new task
var addTask = function () {
	console.log('Add task...');
  //When the button is pressed
  //Create a new list item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended
}
//Edit an existing task
var editTask = function () {
	console.log('Edit task...');
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text
    
    //Toggle .editMode on the parent
}
//Delete an existing task
var deleteTask = function () {
	console.log('Delete task...');
	//When the Delete button is pressed
    //Remove the parent list item from the ul
}
//Mark a task as complete
var taskCompleted = function () {
	console.log('Completed task...');
	//When the checkbox is checked
    //Append the task list item to the #completed-tasks
}
//Mark a task as incomplete
var taskIncomplete = function () {
	console.log('Incompleted task...');
	//When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	//select taskListItem's children
	var checkBox = ???;
	var editButton = ???;
	var deleteButton = ???;
		//bind editTask to edit button
		//bind deleteTask to delete button
		//bind taskCompleted to checkbox
}

//Set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over incompleteTaskHolder ul list items
for(var i=0; i<incompleteTaskHolder.children.length; i++) {
	//bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}
	
//cycle over completedTasksHolder ul list items
for(var i=0; i<completedTasksHolder.children.length; i++) {
	//bind events to list item's children (taskIncomplete)
	bindTaskEvents (completedTasksHolder.children[i], taskIncomplete);
}









