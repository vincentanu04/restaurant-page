const listItem = (content, datas) => {
    const item = document.createElement('li');
    item.classList.add('nav-item');
    item.innerHTML = content;
    item.dataset.page = datas;
    return item;
}

export default listItem;