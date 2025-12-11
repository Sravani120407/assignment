export function displayTodos(data) {
    const container = document.getElementById('todosContainer');
    const loading = document.getElementById('loading');
    
    if (loading) {
        loading.style.display = 'none';
    }
    
    if (!data || data.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">No todos found.</p>';
        return;
    }
    
    container.innerHTML = data.map(todo => `
        <div style="
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border-left: 4px solid ${todo.completed ? '#4CAF50' : '#ff9800'};
        ">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                       style="margin-right: 0.5rem; width: 18px; height: 18px; cursor: pointer;">
                <span style="
                    font-size: 0.9rem;
                    color: ${todo.completed ? '#4CAF50' : '#ff9800'};
                    font-weight: bold;
                ">
                    ${todo.completed ? 'Completed' : 'Pending'}
                </span>
            </div>
            <h3 style="
                color: #333;
                margin-bottom: 0.5rem;
                text-decoration: ${todo.completed ? 'line-through' : 'none'};
            ">
                ${todo.title}
            </h3>
            <p style="color: #666; font-size: 0.9rem;">User ID: ${todo.userId}</p>
            <p style="color: #999; font-size: 0.8rem;">Todo ID: ${todo.id}</p>
        </div>
    `).join('');
}