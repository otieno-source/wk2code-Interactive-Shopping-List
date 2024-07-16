// Maintain a JavaScript array to store shopping list items
const newlist = [];
function arraylisting() {
  const userinput = document.getElementById('inpt').value;
  newlist.push(userinput);
  console.log(newlist);
}

const btn = document.getElementById('btn1');
btn.addEventListener('click', arraylisting);

//Attach event listeners to the "Add" button to capture user input and add items to the list.
function creatinglist() {
  let mylist = document.getElementById('list');
  for (let i = 0; i < newlist.length; ++i) {
    let li = document.createElement('li');
    li.innerText = newlist[i];
    mylist.appendChild(li);
  }
}
btn.addEventListener('click', creatinglist);

//Attach event listeners to the list of items to allow users to mark them as purchased
function strikethrough() {
  let listItems = document.getElementsByTagName('li');
  Array.from(listItems).forEach(item => {
    item.style.textDecoration = 'line-through';
  });
}
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', strikethrough);


//Attach an event listener to the "Clear List" button to remove all items from the list.
function deleting(){
  document.querySelector('ul').innerHTML = "";
}
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', deleting);