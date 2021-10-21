import "./dashboard.css";

import ImgCard from "../../images/Rectangle 415.png";
import Meeting from "../../images/Meeting #2 1.png";
import user from "../../images/Rectangle 12.png";

const Dashboard = () => {
  return (
    <>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-white">My classes</li>
            </ul>
            {/*  <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}

            <button className="btn text-white buttonNavbar">Change to teacher mode</button>
          </div>
          <img src={user} className="rounded-circle" />
        </div>
      </nav>

      <div className="container FirstContainer">
        <div className="row">
          <div className="col-6 mt-5 ms-5">
            <h3>Hello Student</h3>
            <p>
              Whether you are a student trying to find your ideal private
              language teachers/tutors
            </p>
          </div>
          <div className="col-4 ">
            <img src={Meeting} />
          </div>
        </div>
      </div>

      <div className="container  mt-5">
        <div className="row">

          <div className="col-4">
            <div class="card p-2" style={{width: "22rem"}}>
              <img src={ImgCard} class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="estrelas">
                  <input
                    type="radio"
                    id="cm_star-empty"
                    name="fb"
                    value=""
                    checked
                  />
                  <label for="cm_star-1">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-1" name="fb" value="1" />
                  <label for="cm_star-2">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-2" name="fb" value="2" />
                  <label for="cm_star-3">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-3" name="fb" value="3" />
                  <label for="cm_star-4">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-4" name="fb" value="4" />
                  <label for="cm_star-5">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-5" name="fb" value="5" />
                </div>
                <button className="btn lessonsBtn">10  lessons</button>
                <p class="card-text mt-3 textCard">Master English: Improve Your Speaking</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card p-2" style={{width: "22rem"}}>
              <img src={ImgCard} class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="estrelas">
                  <input
                    type="radio"
                    id="cm_star-empty"
                    name="fb"
                    value=""
                    checked
                  />
                  <label for="cm_star-1">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-1" name="fb" value="1" />
                  <label for="cm_star-2">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-2" name="fb" value="2" />
                  <label for="cm_star-3">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-3" name="fb" value="3" />
                  <label for="cm_star-4">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-4" name="fb" value="4" />
                  <label for="cm_star-5">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-5" name="fb" value="5" />
                </div>
                <button className="btn lessonsBtn">10  lessons</button>
                <p class="card-text mt-3 textCard">Master English: Improve Your Speaking</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card p-2" style={{width: "22rem"}}>
              <img src={ImgCard} class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="estrelas">
                  <input
                    type="radio"
                    id="cm_star-empty"
                    name="fb"
                    value=""
                    checked
                  />
                  <label for="cm_star-1">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-1" name="fb" value="1" />
                  <label for="cm_star-2">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-2" name="fb" value="2" />
                  <label for="cm_star-3">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-3" name="fb" value="3" />
                  <label for="cm_star-4">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-4" name="fb" value="4" />
                  <label for="cm_star-5">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-5" name="fb" value="5" />
                </div>
                <button className="btn lessonsBtn">10  lessons</button>
                <p class="card-text mt-3 textCard">Master English: Improve Your Speaking</p>
              </div>
            </div>
          </div>

        </div>

        <div className="row mt-5">

          <div className="col-4">
            <div class="card p-2" style={{width: "22rem"}}>
              <img src={ImgCard} class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="estrelas">
                  <input
                    type="radio"
                    id="cm_star-empty"
                    name="fb"
                    value=""
                    checked
                  />
                  <label for="cm_star-1">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-1" name="fb" value="1" />
                  <label for="cm_star-2">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-2" name="fb" value="2" />
                  <label for="cm_star-3">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-3" name="fb" value="3" />
                  <label for="cm_star-4">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-4" name="fb" value="4" />
                  <label for="cm_star-5">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-5" name="fb" value="5" />
                </div>
                <button className="btn lessonsBtn">10  lessons</button>
                <p class="card-text mt-3 textCard">Master English: Improve Your Speaking</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card p-2" style={{width: "22rem"}}>
              <img src={ImgCard} class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="estrelas">
                  <input
                    type="radio"
                    id="cm_star-empty"
                    name="fb"
                    value=""
                    checked
                  />
                  <label for="cm_star-1">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-1" name="fb" value="1" />
                  <label for="cm_star-2">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-2" name="fb" value="2" />
                  <label for="cm_star-3">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-3" name="fb" value="3" />
                  <label for="cm_star-4">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-4" name="fb" value="4" />
                  <label for="cm_star-5">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-5" name="fb" value="5" />
                </div>
                <button className="btn lessonsBtn">10  lessons</button>
                <p class="card-text mt-3 textCard">Master English: Improve Your Speaking</p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card p-2" style={{width: "22rem"}}>
              <img src={ImgCard} class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="estrelas">
                  <input
                    type="radio"
                    id="cm_star-empty"
                    name="fb"
                    value=""
                    checked
                  />
                  <label for="cm_star-1">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-1" name="fb" value="1" />
                  <label for="cm_star-2">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-2" name="fb" value="2" />
                  <label for="cm_star-3">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-3" name="fb" value="3" />
                  <label for="cm_star-4">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-4" name="fb" value="4" />
                  <label for="cm_star-5">
                    <i class="fa"></i>
                  </label>
                  <input type="radio" id="cm_star-5" name="fb" value="5" />
                </div>
                <button className="btn lessonsBtn">10  lessons</button>
                <p class="card-text mt-3 textCard">Master English: Improve Your Speaking</p>
              </div>
            </div>
          </div>

        </div>
      </div><br/><br/>

      <div className="row bolls">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>

      <footer className="mt-5 p-5">
        <h5>Copyright © 2020 Eduick. Todos os direitos reservados. </h5>
        <br/></footer>
    </>
  );
};

export default Dashboard;
