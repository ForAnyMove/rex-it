import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Slider.sass';
import { select } from '../actions/index';
import PassiveSlider from './PassiveSlider';

let result;

class MySlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: '0',
      value2: '0',
      value3: '0'
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }

  handleChange1(event) {
    event.target.value > 100 - (Number(this.props.valOfSliders[1].valOfSl) + Number(this.props.valOfSliders[2].valOfSl))
      ? (event.target.value = event.target.value - (event.target.value - 100) & (event.preventDefault())) :
      this.setState({ value1: event.target.value });
  }
  handleChange2(event) {
    event.target.value > 100 - (Number(this.props.valOfSliders[0].valOfSl) + Number(this.props.valOfSliders[2].valOfSl))
      ? (event.target.value = event.target.value - (event.target.value - 100) & (event.preventDefault())) :
      this.setState({ value2: event.target.value });
  }
  handleChange3(event) {
    event.target.value > 100 - (Number(this.props.valOfSliders[0].valOfSl) + Number(this.props.valOfSliders[1].valOfSl))
      ? (event.target.value = event.target.value - (event.target.value - 100) & (event.preventDefault())) :
      this.setState({ value3: event.target.value });
  }

  showList(index) {
    console.log(this.state.value1, this.state.value2, this.state.value3)
    this.props.valOfSliders[index].valOfSl = Number((index === 0) ? this.state.value1 : (index === 1) ? this.state.value2 : this.state.value3);

  }
  maxTotalVal() {
    let maxTotal = 100,
      total = Number(this.props.valOfSliders[0].valOfSl) + Number(this.props.valOfSliders[1].valOfSl) + Number(this.props.valOfSliders[2].valOfSl);
    result = (maxTotal - total < 0) ? 0 : maxTotal - total;

    this.props.valOfSliders[3].valOfSl = result;
  }
  render() {
    return (
      <div>
        <div className="slider salt-slider">
          <div className="circle cl1">S</div>
          <input onChange={this.handleChange1} value={this.state.value1}
            type='range' className='slide-row' step="1" />
          {this.showList(0)}
          <output htmlFor="fader" className="volume">{this.props.valOfSliders[0].valOfSl}%</output>
          {this.maxTotalVal()}
        </div>
        <div className="slider green-slider">
          <div className="circle cl2">G</div>
          <input onChange={this.handleChange2} value={this.state.value2}
            type='range' className='slide-row' step="1" />
          {this.showList(1)}
          <output htmlFor="fader" className="volume">{this.props.valOfSliders[1].valOfSl}%</output>
          {this.maxTotalVal()}
        </div>
        <div className="slider yellow-slider">
          <div className="circle cl3">Y</div>
          <input onChange={this.handleChange3} value={this.state.value3}
            type='range' className='slide-row' step="1" />
          {this.showList(2)}
          <output htmlFor="fader" className="volume">{this.props.valOfSliders[2].valOfSl}%</output>
          {this.maxTotalVal()}
        </div>
        <PassiveSlider res={result} />
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

export default connect(mapStateToProps, matchDispatchToProps)(MySlider);