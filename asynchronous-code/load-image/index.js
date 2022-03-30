// function displaying an image and its size on a screen with asynochronous code
const addImage = (imgSrc, callback) => {

  const webPage = document.querySelector('.page');
  const imageElement = document.createElement('img');
  imageElement.setAttribute('alt', 'A drone photo of forests and lakes');
  imageElement.src = imgSrc;
  webPage.append(imageElement);
  
  imageElement.addEventListener('load', () => callback(null, imageElement));
  imageElement.addEventListener('error', () => callback('Image load is failed', imageElement));
};

// callback function displaying the size of a loaded picture
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  };

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

const imageLink = 
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jjpg';

addImage(imageLink, onImageLoaded);
