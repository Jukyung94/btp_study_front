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
        console.log(response.data)
    })
  }

  return(
    <div>
        aaaaa
    </div>
  )
}

export default ImageViewer;