import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Aos.init(); // Initialize AOS for animations
  }, []);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Check if articles data exists
        if (data.articles) {
          setArticles(data.articles);
        } else {
          console.error("No articles found or invalid response");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <div>
      <h2
        data-aos="fade-down"
        data-aos-duration="550"
        className="text-center py-3 d-flex justify-content-center align-content-center display-1 bg-dark text-light"
      >
        LATEST <span className="badge bg-danger">News</span>
      </h2>

      {/* Show loading text until articles are fetched */}
      {articles.length === 0 ? (
        <p className="text-center">Loading news...</p>
      ) : (
        <div className="row justify-content-center g-4 mt-4 pb-4">
          {articles.map((news, index) => (
            <NewsItems
              key={index}
              author={news.author}
              title={news.title}
              description={news.description}
              url={news.url}
              urlToImage={news.urlToImage}
              content={news.content}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
