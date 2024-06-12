import "./App.css";
import { faCore } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, fagear, fabrand } from "@fortawesome/free-solid-svg-icons";
import arrowicon from "./assets/icons8-down-arrow-48.png";
import setting from "./assets/setting.png";

function App() {
  return (
    <>
      <div className="app">
        <div className="box">
          <div className="container">
            <div className="navbar">
              <div className="nav1">
                <span id="swap">Swap</span>
                <span>Limit</span>
                <span>Send</span>
                <span>Buy</span>
              </div>

              <div className="setting">
                <img src={setting} className="setting" />
              </div>
            </div>
            <div className="container-2">
              <div id="box1">
                <span>Sell</span>
              </div>
              <div className="box2">
                <div>
                  <span>0</span>
                </div>
                <div>
                  <select id="select-box">
                    <option>
                      <FontAwesomeIcon icon="fa-brands fa-ethereum" />
                      ETH
                    </option>
                  </select>
                </div>
              </div>
              <div className="downarrow">
                <img src={arrowicon} className="arrowDown" />
              </div>
            </div>
            <div></div>
            <div className="container-3">
              <div id="box3">
                <span>Buy</span>
              </div>
              <div className="box4">
                <div>
                  <span>0</span>
                </div>
                <div>
                  <select id="select-box1">
                    <option>Select token</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="but">
              <button id="button">Connect wallet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
