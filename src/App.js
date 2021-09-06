import React from 'react';
import './App.sass';
import MySlider from './r-elements/Slider';
import allReducers from './reducers/index';
import { select } from './actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
let totalPuchase = 450;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.output = this.output.bind(this);
    this.state = {
      value: '0',

    };
  }
  output(valS) {
    this.setState({ outVal: valS })
    console.log(this.outVal)
  }


  render() {

    return (
      <div className="App">
        <header>
          <div className="top-header-div">
            <div className="logo">
              <a href="/">
                <img className="logo-img" src="https://i.ibb.co/4pxD2mh/logo.png" alt="logo" />
              </a>
            </div>
            <div>
              <nav>
                <ul className="nav-ul">
                  <li className="nav-li">
                    <a className="nav-a" href="/">
                      <img className="icon" src="http://www.entypo.com/images/app-store.svg" alt="backet" />
                    </a>
                  </li>
                  <li className="nav-li">
                    Total: {totalPuchase}
                  </li>
                  <li className="nav-li">
                    <a className="nav-a" href="/">Details</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="bottom-header-div">

          </div>
        </header>
        <section className="App-section">
          <div className="app-div">
            <h1 className="title">CRACKER INC. WELCOME</h1>
            <div>
              <MySlider ident={0} />
              {/* {console.log(this.props.valOfSliders[0], this.state, this.props)} */}
              <div className="cl-bt">
                <div className="circle cl5">T</div>
                <div>
                  <button className="bt choose-bt"><span className="bt-span">Choose your pack</span></button>
                </div>
              </div>

            </div>
            {/* {console.log(this.props.valOfSliders[0], this.state)} */}
            <div className="to-flex">
              <div>
                <button className="bt add-bt"><span className="bt-span">Add to cart</span></button>
              </div>
            </div>


          </div>
        </section>
        <footer>
          <div className="footer-container">
            <div className="footer-div">
              <div className="local">
                <img className="icon footer-title" src="http://www.entypo.com/images/app-store.svg" alt="phone icon" />
                <h3 className="footer-title">
                  Phone
                </h3>
              </div>

              <p className="footer-text">
                +43(987)345-6782
              </p>
            </div>
            <div className="footer-div">
              <div className="local">
                <img className="icon footer-title" src="http://www.entypo.com/images/app-store.svg" alt="adress icon" />
                <h3 className="footer-title">
                  Adress
                </h3>
              </div>
              <p className="footer-text">
                <p>Cracker Ink.</p>
                <p>10 Cloverfield Lane</p>
                <p>Berlin? IL 10928</p>
                <p>Germany</p>
              </p>
            </div>
            <div className="footer-div ">
              <img className="icon footer-title" src="http://www.entypo.com/images/app-store.svg" alt="share icon" />
              <h3 className="footer-title">
                Share us
              </h3>
              <p>
                <img className="icon2" src="http://www.entypo.com/images/app-store.svg" alt="share icon pinterest" />
                <img className="icon2" src="http://www.entypo.com/images/app-store.svg" alt="share icon facebook" />
                <img className="icon2" src="http://www.entypo.com/images/app-store.svg" alt="share icon google+" />
              </p>
            </div>
          </div>

        </footer>
      </div>
    );


  }
}


function mapStateToProps(state) {
  return {
    valOfSliders: state.valOfSliders
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ select: select }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
