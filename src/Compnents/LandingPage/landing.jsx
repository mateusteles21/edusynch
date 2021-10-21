import "./landing.css";

import Image from "../../images/image.png";
import Shape from "../../images/Shape.png";
import Shape2 from "../../images/Shape2.png";
import Shape3 from "../../images/Shape3.png";

const LandingPage = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#7A57FD" }}>
        <nav className="navbar navbar-expand-lg navbar-light  NavbarDashboard">
          <div className="container-fluid">
            <h1 className="navbar-brand text-white">EDUICK</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-white">How it works</li>
                <li className="nav-item text-white">About Us</li>
              </ul>
              {/*  <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}

              <button
                className="btn btn-warning btnGet me-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-6">
            <img src={Shape2} className="shape2" />
            <img src={Image} className="image" />
            <img src={Shape} className="shape" />
          </div>
          <div className="col-4 colForm">
            <h1>Find your</h1>
            <h1 className="h1">best teacher</h1>
            <p>
              Whether you are a student trying to find your ideal private
              language teachers/tutors or a teacher trying to find great
              students for your customised private lessons!
            </p>
            <form>
              <input
                type="text"
                placeholder="Type here what are you looking for"
                className="form-control"
              />
              <div className="form-check form-check-inline Teacher mt-5">
                <input
                  className="form-check-input input1 bg-warning text-dark"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                  style={{
                    marginLeft: "0px",
                    marginTop: "15px",
                    borderRadius: "25px",
                  }}
                />
                &nbsp;&nbsp;
                <label
                  className="form-check-label text-white"
                  for="inlineCheckbox1"
                >
                  I’m a teacher
                </label>
              </div>
              <div className="form-check form-check-inline Teacher mt-5">
                <input
                  className="form-check-input input1 bg-warning text-dark"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                  style={{
                    marginLeft: "0px",
                    marginTop: "15px",
                    borderRadius: "25px",
                  }}
                />
                &nbsp;&nbsp;
                <label
                  className="form-check-label text-white"
                  for="inlineCheckbox1"
                >
                  I’m a student
                </label>
              </div>
              <button className="btn btn-warning btnsearch">Search</button>
            </form>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#200E64" }}
          className="container-fluid mt-5"
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Get Started <span>Just Login</span>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="UserName"
                className="form-control"
              ></input>
              <input
                type="password"
                placeholder="PassWord"
                className="form-control"
              ></input>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Loguin
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
