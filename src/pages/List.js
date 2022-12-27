import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const List = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [aa, setAa] = useState();
  
  useEffect(() => {
    fetchData();
    creatBlob();
  }, [])

  const creatBlob = () => {
    const obj = {hello: 'world'};
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type: 'application/json'});
    console.log(blob.arrayBuffer())
    console.log(blob.length)
  }

  

  const fetchData = () => {
    fetch('/odata/v4/BoardService/Board')
    .then(res => res.json())
    .then(
      (response) => {
        setData(response.value)
      },
      (error) => {
        console.log(error);
      })
  }
  return(
    <div>
    {data.length > 0 && (
      <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
        {data.map(datas => (
          <tr key={datas.ID} onClick={() => navigate('/read', { state: { id: datas.ID}})}>
            <td>{datas.title}</td>
            <td>{datas.content.substring(0, 3) + '....'}</td>
            <td>{datas.author}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create"><button>글쓰기</button></Link>
      <div>
        <Link to="/uploadIMG"><button>이미지 업로드</button></Link>    
      </div>
      
      </>
      )}
    </div>
  )
}

export default List;