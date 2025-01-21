/* eslint-disable react/prop-types */
import "./style.css";

const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top top-0 "
      data-bs-theme="dark"
    >
      <div className="container ">
        <a className="navbar-brand" href="#">
          <span className="badge text-dark bg-light fs-4">NEWS WEB</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-uppercase ms-auto " role="button">
            <li className="nav-item ">
              <a
                className="nav-link "
                href="#"
                onClick={() => setCategory("business")}
              >
                business
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link "
                onClick={() => setCategory("health")}
              >
                health
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => setCategory("science")}
              >
                science
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => setCategory("sports")}
              >
                sports
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
