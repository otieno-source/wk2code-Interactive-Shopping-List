
//geting user input from html to js
const userinput = document.getElementById('inpt')

//linking <ul></ul> section to my js
const listing = document.getElementById('listed')

// creating the onclick function to add items to the list for my button 'btn1'
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
//creating delete function for the clear button
function deleting(){
  document.getElementById("listed").innerHTML = "";
}

 // trying to store user input into an array
function array(){
  const itemlist = [];
  return itemlist.push(li);
}
