import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Read = () => {
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();
  const [read, setRead] = useState([])

  useEffect(() => {
    axios.get(`/odata/v4/BoardService/Board(${id})`)
    .then(function (response) {
        setRead(response.data)
    })
  }, [id])

  function deleteArticle(id) {
    axios.delete(`/odata/v4/BoardService/Board(${id})`)
        .then(function (response) {
          alert('삭제되었습니다')
          navigate("/")
        })
        .catch(function(error) { console.log(error) });
  }

  return (
    <div>
    {read.title !== undefined &&
    <div>
      <span>글제목</span>
      <span>{read.title}</span>
      <p>글쓴이</p>
      <p>{read.author}</p>
      <p>내용</p>
      <div>{read.content}</div>
      
      <button onClick={() => navigate(-1)}>목록으로 돌아가기</button>
      <button onClick={() => deleteArticle(id)}>삭제</button>
      <button onClick={() => navigate('/create', { state: {id : id, title: read.title, author: read.author, content: read.content}})}>수정</button>
      </div>
    }
    </div>

  )
}

export default Read;