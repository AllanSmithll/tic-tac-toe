const nameProject = "Tic Tac Toe";
window.onload = () => {
    let elements = document.querySelectorAll('.nameProject');
    elements.forEach(element => {
        element.textContent = nameProject;
    });
};
