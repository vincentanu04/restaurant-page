
import newInput from "./builders/buildInput";

const contactForm = document.createElement('section');
contactForm.classList.add('contact');

const emailDiv = document.createElement('div');
emailDiv.classList.add('email');

const p = document.createElement('p');
p.innerHTML = 'Any questions?';

const h1 = document.createElement('h1');
h1.innerHTML = 'Email us!';

const hr = document.createElement('hr');

const form = document.createElement('form');

const textarea = document.createElement('textarea');
textarea.placeholder = 'Enter your message...';
textarea.name = 'message';
textarea.id = 'message';
textarea.cols = 30;
textarea.rows = 10;

const button = document.createElement('button');
button.type = 'submit';

const p2 = document.createElement('p')
p2.innerHTML = 'Submit';

button.appendChild(p2);

const inputs = [
    newInput('text', 'Enter your name', 'name'),
    newInput('tel', 'Phone number', 'phone-number'),
    newInput('email', 'Email address', 'email'),
    textarea,
    button
];

for (const input of inputs) {
    form.appendChild(input);
}



emailDiv.appendChild(p);
emailDiv.appendChild(h1);
emailDiv.appendChild(hr);
emailDiv.appendChild(form);

contactForm.appendChild(emailDiv);

export default contactForm;