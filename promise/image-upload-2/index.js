import { addImage } from "./addImage.js";

// function wrapping another function in a promise
const addImageV2 = url => {

  const pageUploadData = new Promise((resolve, reject) => {

    const imageLoadOutcome = (text, size) => {
      if (text === null) {
        resolve(size);
        return;
      };
      reject(text);
    };

    addImage(url, imageLoadOutcome)

  });

  return pageUploadData;
};

const imageLink = 
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// test calls
addImageV2(imageLink)
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
