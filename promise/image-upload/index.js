// function returning the object of a promise with certain data passed by resolve() and reject()

const addImage = imgSrc => {

  const pageUploadData = new Promise((resolve, reject) => {

    const webPage = document.querySelector('.page');
    const imageElement = document.createElement('img');
    imageElement.setAttribute('alt', 'A drone photo of forests and lakes');
    imageElement.src = imgSrc;
    webPage.append(imageElement);

    imageElement.addEventListener('load', () => {
      const { width, height } = imageElement;
      resolve( { width, height } );
    });
    imageElement.addEventListener('error', () => {
      reject(new Error('Image load is failed...'));
    });
  });

  return pageUploadData;
};

// callback function displaying the size of a loaded picture
const imageSizeDisplay = (imageSize) => {

  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${imageSize.width} x ${imageSize.height}`;
};

const imageLink = 
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jjpg';

const onImageLoad = addImage(imageLink);

onImageLoad.then(imageSizeDisplay);
onImageLoad.catch(function (error) {
  alert(error);
});