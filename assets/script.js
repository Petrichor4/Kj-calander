const lis = document.querySelectorAll('li');
let currentIndex = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown' || event.key === 'Enter') {
        event.preventDefault(); // Prevent default behavior of ArrowDown key
        if (currentIndex < lis.length - 1) {
            lis[currentIndex].classList.remove('active');
            currentIndex++;
            lis[currentIndex].classList.add('active');
            lis[currentIndex].focus();
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault(); // Prevent default behavior of ArrowUp key
        if (currentIndex > 0) {
            lis[currentIndex].classList.remove('active');
            currentIndex--;
            lis[currentIndex].classList.add('active');
            lis[currentIndex].focus();
        }
    }
});

// Set initial focus on the first <li>
lis[currentIndex].classList.add('active');
lis[currentIndex].focus();