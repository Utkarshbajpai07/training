const input = document.getElementById('itemInput');
const button = document.getElementById('addButton');
const list = document.getElementById('itemList');

button.addEventListener('click',function(){
    const text = itemInput.value.trim();
    if(text!== ''){
        const Listitem =document.createElement('li');
        Listitem.textContent = text;
      itemList.appendChild(Listitem);
      itemInput.value = '';
    }
})