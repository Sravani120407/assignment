export function createNavbar() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (currentUser) {
        return `
            <nav>
                <div class="nav-left">
                    <a href="index.html"><strong>Todo App</strong></a>
                    <a href="todos.html">My Todos</a>
                </div>
                <div class="nav-right">
                    <span class="user-info">Welcome, ${currentUser.name}</span>
                    <a href="#" class="logout-btn" onclick="sessionStorage.removeItem('currentUser'); window.location.href='index.html'">Logout</a>
                </div>
            </nav>
        `;
    }
    
    return `
        <nav>
            <div class="nav-left">
                <a href="index.html"><strong>Todo App</strong></a>
            </div>
            <div class="nav-right">
                <a href="signup.html">Sign Up</a>
                <a href="login.html">Login</a>
            </div>
        </nav>
    `;
}