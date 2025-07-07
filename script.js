

function submit() {
    let newitem = document.createElement("li");
    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "list-item";
    newitem.textContent = document.getElementById('items').value;
    newitem.className = "list-item";
    newitem.appendChild(check);
    document.getElementById('list').appendChild(newitem);
    document.getElementById('items').value = '';
}

function del() 
{ 
    let list = document.getElementById('list');
    let items = list.getElementsByTagName('li');
    let found = false;
    // Convert HTMLCollection to array to avoid issues when removing elements
    let itemsArray = Array.from(items);
    itemsArray.forEach(function(item) {
        let checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            list.removeChild(item);
            found = true;
        }
    });
    if (!found) {
        alert("nothing to delete");
    }
  

}
