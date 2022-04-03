import { addImage } from "./addImage.js";

// function returning the promise with an uploaded picture information or data of an error
const addImageV2 = url => {
  const imageData = new Promise((resolve, reject) => {

    // adding an image
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = url;
    const pageElem = document.querySelector('.page');
    pageElem.append(img);

    // returning promises
    img.addEventListener('load', () => {
      const { width, height } = img;
      resolve( { width, height } );
    });
    img.addEventListener('error', () => {
      reject('Image load failed');
    });
  });

  return imageData;
};

const imageLink = 
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// test call
addImageV2(imageLink)
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
