

function submit() {
    let newitem = document.createElement("li"); 
    newitem.textContent = document.getElementById('items').value;
    document.getElementById('list').appendChild(newitem);
    document.getElementById('items').value = '';
    

}


