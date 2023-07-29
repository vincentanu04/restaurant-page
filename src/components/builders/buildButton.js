const newButton = (text) => {
    const button = document.createElement('button');
    button.innerHTML = text;
    return button;
}

export default newButton;