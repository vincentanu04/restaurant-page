const buildImage = (imgSrc, imgAlt) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;
    return img;
}

export default buildImage;