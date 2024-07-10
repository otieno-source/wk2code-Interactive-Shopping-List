### wk2code-Interactive-Shopping-List

## html part
1. have create 2 sections in my page; input area and out put area
<div id="form"></div> as the input area with button 'btn1' to list user-input in the out put section

<div id="output"></div> this is the output section dispalying user-input inform of a list. it has a clear button 'btn2' to clear its content.
Another button here is the 'mark as purchesed' (btn3). it not working at the moment. it function was to mark element when user decied to buy them.



## javascript part
# 1. geting user input from html to js
const userinput = document.getElementById('inpt')

# 2. linking <ul></ul> section to my js
const listing = document.getElementById('listed')

# 3. creating the onclick function for 'btn1'(add to list) to add user items to the list.
function addlist(){
  if (userinput.value === '') {
    alert('Enter item');
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = userinput.value;
    listing.appendChild(li);
  }
  userinput.value = '';
}
# 4. creating delete function for the clear button 'btn2'
function deleting(){
  document.getElementById("listed").innerHTML = "";
}

# 5. trying to store user input into an array
function array(){
  const itemlist = [];
  return itemlist.push(li);
}

