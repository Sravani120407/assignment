import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';

document.getElementById('navbar').innerHTML = createNavbar();
document.getElementById('footer').innerHTML = createFooter();

const signupForm = document.getElementById('signupForm');
const messageDiv = document.getElementById('message');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        messageDiv.className = 'message error';
        messageDiv.textContent = 'User already exists with this email!';
        return;
    }
    
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    messageDiv.className = 'message success';
    messageDiv.textContent = 'Account created successfully! Redirecting to login...';
    
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
});