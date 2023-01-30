// Write a function that reads text inside an input field and appends it to a list inside the HTML page

function addItem() {
    const text = document.getElementById('newItemText').value;

    const li = document.createElement('li');
    li.textContent = text;

    const list = document.getElementById('items');
    list.appendChild(li);
}