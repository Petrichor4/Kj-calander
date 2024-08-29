const memoItem = document.createElement('li');
const memoPad = document.querySelector('ul');
const newItem = memoPad.setAttribute('contenteditable', 'true');
document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        memoPad.appendChild(newItem);
        memoItem.textContent = 'New memo';
    }
});