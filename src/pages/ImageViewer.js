import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ImageViewer() {
  const [view, setView] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get('/odata/v4/BoardService/ImageSource')
    .then(response => {
      setView(response.data.value[1].image)
        // const myFile = new File([response.data.value[2].image], 'testImage')
        // const reader = new FileReader()
        // reader.onload = ev =>{
        //   const previewImage =  String(ev.target?.result)
        //   setView(previewImage)
        // }
        // reader.readAsDataURL(myFile)
    })
  }

  return(
    <div>
        aaaaabbb
        <img src={view} style={{width: "300px", height: "300px"}}/>
    </div>
  )
}

export default ImageViewer;