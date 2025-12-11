import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';

document.getElementById('navbar').innerHTML = createNavbar();
document.getElementById('footer').innerHTML = createFooter();

const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
        
        messageDiv.className = 'message success';
        messageDiv.textContent = 'Login successful! Redirecting...';
        
        setTimeout(() => {
            window.location.href = 'todos.html';
        }, 1000);
    } else {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Invalid email or password!';
    }
});