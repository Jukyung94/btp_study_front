import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import ImageViewer from './ImageViewer';

function ImageUploader() {
  const navigate = useNavigate()
  const [view, setView] = useState([]);
  const [file, setFile] = useState({
    imgName: null,
    image: null,
  });
  const [convert, setConvert] = useState();

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get('odata/v4/BoardService/ImageSource')
    .then(response => {
        console.log(response)
    })
  }

  const converToBase64 = () => {
    const reader = new FileReader()

    reader.readAsDataURL(file.image)

    reader.onload = () => {
      console.log(reader)
      setConvert(reader.result)
    }
  }

  async function UploadImage() { 
    converToBase64()
    const config = {
        Headers: {
            'content-type': 'multipart/form-data',
        },
    };

    console.log('aaaaaa', convert)

    if(file) {
      console.log(file)
       await axios.post('/odata/v4/BoardService/ImageSource', {
        imgName: 'aa',
        image: convert
      }, config)
        .then(function (response) {
            console.log('등록')
            console.log(response)
        })
        .catch(function (err) {
            console.log(err)
        })
    }
  }

  return(
    <div>
      <input type="file" accept='image/*' onChange={(event) => {
        console.log(file)
        console.log(event.target.files)
        setFile({
          imgName: 'title',
          image: event.target.files[0]
        })}}/>
      <button onClick={() => UploadImage()}>Upload</button>
      <ImageViewer />
      <div>
        {/* <img src={file.image}/> */}
        <button onClick={() => navigate('/')}>돌아가기</button>
      </div>
    </div>
  )
}

export default ImageUploader;