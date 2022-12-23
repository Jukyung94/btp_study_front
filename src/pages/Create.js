import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Create = () => {
  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const navigate = useNavigate()
  const [article, setArticle] = useState(
    {
      title: null,
      author: null,
      content: null
    }
  )
  
  useEffect(() => {
    if (id) {
      axios.get(`/odata/v4/BoardService/Board(${id})`)
      .then(function (response) {
        setArticle({
          title: response.data.title,
          author: response.data.author,
          content: response.data.content,
        })
    })
    }
  }, [])
  
  return (
    <div>
      제목
      <input 
        type="text"
        value={article.title ? article.title : ""}
        onChange={(value) => {setArticle({...article, title: value.target.value})}}
      />
      작성자
      <input 
        type="text"
        value={article.author ? article.author : ""}
        onChange={(value) => {setArticle({...article, author: value.target.value})}}
      />
      내용
      <input 
        type="text"
        value={article.content ? article.content : ""}
        onChange={(value) => {setArticle({...article, content: value.target.value})}}
      />
           
      {!id ? <button onClick={() => {
        if(article.title !== null && article.author !== null && article.content != null ){
          axios.post('/odata/v4/BoardService/Board', article)
          .then(function (response) {
            console.log(response)
              alert('등록되었습니다.')
              navigate("/")
            })
            .catch(function (err) {console.log(err)})
        } else{
            alert('내용을 입력해주세요')
        }
        }}>등록</button> :
        <button onClick={() => {
        if(article.title !== "" && article.author !== "" && article.content !== "" ){
          axios.patch(`/odata/v4/BoardService/Board(${id})`, article)
          .then(function (response){
            alert('수정되었습니다.')
            navigate('/')
          }) 
        } else {
          alert('내용을 입력해주세요')
        }
        }}>수정</button>}
        </div>
    )
}

export default Create;