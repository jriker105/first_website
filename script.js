// Change background color on double click anywhere on the page
document.addEventListener('dblclick', () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

// Add interactivity to the heading
const heading = document.querySelector('h1');
let count = 0;

heading.style.cursor = 'pointer';
heading.title = 'Click me!';

heading.addEventListener('click', () => {
    count++;
    heading.textContent = `Clicked ${count} time${count === 1 ? '' : 's'}! 🎉`;
    
    // Add a quick pop animation
    heading.style.transform = 'scale(1.1)';
    heading.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
        heading.style.transform = 'scale(1)';
    }, 100);
});
