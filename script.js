window.addEventListener("resize", centerSquare);

function centerSquare() {
    const square = document.querySelector('.rounded-square');
    const container = document.querySelector('.centered-container');

    const verticalOffset = (window.innerHeight - container.offsetHeight) / 2;
    const horizontalOffset = (window.innerWidth - container.offsetWidth) / 2;

    container.style.top = `${verticalOffset}px`;
    container.style.left = `${horizontalOffset}px`;
}

centerSquare();
