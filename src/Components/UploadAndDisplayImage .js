import React, {useState} from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUpload, faTrash, faImage} from '@fortawesome/free-solid-svg-icons';
import './UploadAndDisplayImage.scss';
const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictResult, setPredictResult] = useState(null);

  const uploadAndShowImg = (event) => {
    console.log(event.target.files[0]);
    setSelectedImage(event.target.files[0]);
    predict();
  };

  const predict = async () => {
    console.log('loading mobilenet...');
    const net = await mobilenet.load();
    console.log('succesfuly loaded model..');
    const elma = document.querySelector('#img');
    const result = await net.classify(elma);
    setPredictResult(result);
    console.log(result);
  };

  return (
    <div>
      {selectedImage ? (
        <div className="ImageContainer">
          <img
            id="img"
            alt="not fount"
            width={'450px'}
            src={URL.createObjectURL(selectedImage)}
          />
        </div>
      ) : (
        <div className="ImageContainer">
          <FontAwesomeIcon icon={faImage} size="7x" color="#D8CBC7" />
        </div>
      )}
      <div className="icons">
        <form>
          <label onChange={uploadAndShowImg}>
            <input type="file" name="image" hidden />
            <FontAwesomeIcon
              icon={faUpload}
              size="2x"
              className="icon"
              id="uploadIcon"
            />
          </label>
          <label>
            <button onClick={() => setSelectedImage(null)} hidden>
              Remove
            </button>
            <FontAwesomeIcon
              icon={faTrash}
              size="2x"
              className="icon"
              id="trashIcon"
            />
          </label>
        </form>
      </div>
      <div className="predictions">
        <h5>
          {predictResult ? 'Class Name - Probability' : 'Please Upload a Image'}
        </h5>
        <p>
          {predictResult
            ? predictResult[0].className +
              ' : ' +
              Number.parseFloat(predictResult[0].probability).toFixed(3)
            : ''}
        </p>
        <p>
          {predictResult
            ? predictResult[1].className +
              ' : ' +
              Number.parseFloat(predictResult[1].probability).toFixed(3)
            : ''}
        </p>
        <p>
          {predictResult
            ? predictResult[2].className +
              ' : ' +
              Number.parseFloat(predictResult[2].probability).toFixed(3)
            : ''}
        </p>
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
