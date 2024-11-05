// Selectors - Style Properties

// classname - id - tag name

// getElementById: catching element according to id
// getElementByClassname: catching element according to class name.
// getElementByTagName: catching element according to tag name.

// const button= document.getElementById("todoAddButton");

// console.log(button);

// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// console.log(button.type);
// console.log(button.getAttribute("type"));

// const listOfClass= button.classList[3];
// console.log(listOfClass);

// const listOfClass= button.classList;
// listOfClass.forEach(function(ClassName){
//     console.log(ClassName);
// })

// let buttonText= button.textContent;
// let buttonText2= button.innerHTML;
// console.log(buttonText);
// console.log(buttonText2);

// const todoList= Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo.textContent);
// })
// console.log(todoList);

// const forms= Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[0].getAttribute("id"));
// console.log(forms[1].name);


// const lis= document.getElementsByTagName("li");
// console.log(lis);


//          getElementById - getElementByClassname - getElementByTagname

//          querySelector - querySelectorAll

// const clearButton= document.querySelector("#clearButton"); //   to get id, use '#'
// console.log(clearButton);
// console.log(document.getElementById("clearButton"));

// const classList= document.querySelector(".list-group");  //     to get class, use '.'
// console.log(classList);

// const todoList= document.querySelector(".list-group-item");  //     if there are many classes with same name, use querySelectorAll
// console.log(todoList);
// const todoList= document.querySelectorAll(".list-group-item");
// console.log(todoList);
// const todoList= document.querySelectorAll(".list-group-item")[2];
// console.log(todoList);

// const todoList= document.querySelectorAll("li:nth-child(2)");
// console.log(todoList);

// const todoList= Array.from(document.querySelectorAll("li:nth-child(odd)"));
// todoList.forEach(function(todo){
//     todo.style.backgroundColor= "lightblue";
// })
// console.log(todoList);
