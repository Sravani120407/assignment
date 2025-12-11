import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';
import { displayTodos } from '../modules/displayToDos.js';

// Check if user is logged in
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
if (!currentUser) {
    window.location.href = 'login.html';
}

// Load navbar and footer
document.getElementById('navbar').innerHTML = createNavbar();
document.getElementById('footer').innerHTML = createFooter();

// Fetch and display todos
async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        
        // Filter to show only first 30 todos (from users 1-3)
        const userTodos = data.filter(todo => todo.userId <= 3);
        displayTodos(userTodos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        document.getElementById('loading').textContent = 'Error loading todos. Please try again later.';
    }
}

fetchTodos();