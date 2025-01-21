import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
const NewsBoard = ({ category }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div>
      <h2
        data-aos="fade-down"
        data-aos-duration="550"
        className="text-center py-3 d-flex justify-content-center align-content-center display-1 bg-dark text-light  "
      >
        LATEST <span className="badge bg-danger">News</span>
      </h2>
      <div className="row justify-content-center g-4 mt-4 pb-4">
        {articles.map((news, index) => {
          return (
            <NewsItems
              key={index}
              author={news.author}
              title={news.title}
              description={news.description}
              url={news.url}
              urlToImage={news.urlToImage}
              content={news.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
