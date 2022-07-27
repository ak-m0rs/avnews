import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const avNewsURL =
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9744286cd44e46b5a33ecb5504466f4f";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(avNewsURL)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);
  //console.log("articles", articles);
  const renderArticles = () => {
    return articles.map((article, index) => {
      return (
        <div
          style={{
            backgroundColor: "#BFE5FF",
            border: "1px solid",
            borderRadius: "6px",
            margin: "10px",
            alignItems: "center",
          }}
        >
          <h4>{` ${article.title}`}</h4>
          <div>
            <a href={article.url} target="_blank">
              <img
                src={article.urlToImage}
                alt={article.title}
                width={350}
                height={250}
              />
            </a>
            <h5>{`Published By: ${article.source.name} on ${article.publishedAt}`}</h5>
            <a href={article.url} target="_blank">
              <h6>{`Heading : [${article.description}]`}</h6>
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h2>AVNEWS</h2>
      {renderArticles()}
    </div>
  );
}

export default App;
