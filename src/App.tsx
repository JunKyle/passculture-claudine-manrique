import "./App.css";

import React from "react";
import logo from "./logo-pass-culture.svg";
import newsData from './news.json';

function App() {
  const news = newsData.news || [];
  let selectCategories:string[] = [] 
  if (news) {
    for (let i = 0; i < news.length; i++) {
      if (!selectCategories.includes(news[i].category)) {
        selectCategories.push(news[i].category);
      }
    }
  }
  console.log('selectCategories', selectCategories);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <section className="News" id="news">
          {news.length ? <h1>News</h1> : ''}
          {news.map((item, index) => (
            <div className="NewsItem" key={index}>
              <span className="NewsItem__title">{item.title}</span>
              <span className="NewsItem__category">{item.category}</span>
              <span className="NewsItem__date">{item.date}</span>
              <p className="NewsItem__description">{item.text}</p>
            </div>
          ))}
        </section>
        <a href="https://create-react-app.dev/docs/running-tests/">Learn react</a>
      </main>
    </div>
  );
}

export default App;
