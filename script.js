document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded!');
    
    // Add a button click handler
    const button = document.createElement('button');
    button.textContent = 'Click me!';
    button.onclick = function() {
        alert('Hello from GitHub Pages!');
    };
    document.body.appendChild(button);
});