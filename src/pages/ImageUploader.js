import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import ImageViewer from './ImageViewer';

function ImageUploader() {
  const navigate = useNavigate()
  const [view, setView] = useState([]);
  const [file, setFile] = useState();
  const [convert, setConvert] = useState();

//   useEffect(() => {
//     fetchData()
//   }, [])

//   const fetchData = () => {
//     axios.get('odata/v4/BoardService/ImageSource')
//     .then(response => {
//         console.log(response)
//     })
//   }
  function UploadImage() {
    const fd = new FormData();
    fd.append('imgSource', file)
    
    const config = {
        Headers: {
            'content-type': 'multipart/form-data',
        },
    };

    if(file) {
        axios.post('/odata/v4/BoardService/ImageSource', {imgSource: fd}, config)
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
      <input type="file" accept='image/*' onChange={(event) => {setFile(event.target.files[0]); console.log(event.target.files[0])}}/>
      <button onClick={() => UploadImage()}>Upload</button>
      <ImageViewer />
      <div>
        <button onClick={() => navigate('/')}>돌아가기</button>
      </div>
    </div>
  )
}

export default ImageUploader;