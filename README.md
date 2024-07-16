### wk2code-Interactive-Shopping-List

## html part
1.have create 2 sections in my page; input area and out put area
<div id="form"></div> as the input area with button 'btn1' to list user-input in the out put section

<div id="output"></div> this is the output section dispalying user-input inform of a list. it has a clear button 'btn2' to clear its content.
Another button here is the 'mark as purchesed' (btn3). it not working at the moment. it function was to mark element when user decied to buy them.



## javascript part
# Maintain a JavaScript array to store shopping list items
const newlist = [];
function arraylisting() {
  const userinput = document.getElementById('inpt').value;
  newlist.push(userinput);
  console.log(newlist);
}

const btn = document.getElementById('btn1');
btn.addEventListener('click', arraylisting);

# Attach event listeners to the "Add" button to capture user input and add items to the list.
function creatinglist() {
  let mylist = document.getElementById('list');
  for (let i = 0; i < newlist.length; ++i) {
    let li = document.createElement('li');
    li.innerText = newlist[i];
    mylist.appendChild(li);
  }
}
btn.addEventListener('click', creatinglist);

# Attach event listeners to the list of items to allow users to mark them as purchased
function strikethrough() {
  let listItems = document.getElementsByTagName('li');
  Array.from(listItems).forEach(item => {
    item.style.textDecoration = 'line-through';
  });
}
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', strikethrough);


# Attach an event listener to the "Clear List" button to remove all items from the list.
function deleting(){
  document.querySelector('ul').innerHTML = "";
}
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', deleting);