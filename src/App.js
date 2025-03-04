import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import { useEffect, useState } from 'react';
import Comments from './pages/comments/comments';

function Application() {
  const [comments, setComments] = useState([]);

  const [imageObj, setImageObj] = useState({
    url: "https://t4.ftcdn.net/jpg/01/36/70/67/360_F_136706734_KWhNBhLvY5XTlZVocpxFQK1FfKNOYbMj.jpg",
    title: "smile"
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(json => setComments(json));
  }, []);

  return (
    <div className="App">
      <Main count={10} name={"Gayan"}/>
    </div>
  );
}

export default Application;
