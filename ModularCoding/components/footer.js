export function createFooter() {
    const year = new Date().getFullYear();
    return `
        <footer>
            <p>&copy; ${year} Modular Todo App. All rights reserved.</p>
        </footer>
    `;
}