/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const NewsItems = ({ author, title, description, url, urlToImage }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="700"
      className="card bg-dark text-light mb-3 mx-3 my-3 px-3 py-3 rounded-0"
      style={{ maxWidth: "345px", boxShadow: "5px 4px 0px rgb(249, 103, 6)" }}
    >
      <img
        height={240}
        width={350}
        src={urlToImage ? urlToImage : "/default_img.webp"}
        className="card-img-top"
        alt="news image"
      />
      <div className="card-body">
        <h5 className="card-title text-bg-danger px-2 py-2 text-center">
          {" "}
          {title ? title.slice(0, 20) : "Do not have a title"}
        </h5>
        <h5 className="card-title ">
          {" "}
          Author - {author ? author.slice(0, 15) : "Unknown"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Could green tea be the secret to protecting your brain and reducing the risk of dementia?"}
        </p>
        <div className="text-center">
          <a
            href={url}
            target="_blank"
            className="btn btn-primary w-100 d-inline-block rounded-0"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
