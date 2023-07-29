const newInput = (type, placeholder, namee) => {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.name = namee;
    return input;
}


export default newInput;