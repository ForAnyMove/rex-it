import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Slider.sass';
import { select } from '../actions/index';


class PassiveSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '0' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
     this.setState({ value: this.props.res });
}

  showList() {
    this.props.valOfSliders[3].valOfSl = this.props.res;
    console.log(this.props.valOfSliders);
    return (
        <output htmlFor="fader" className="volume">{this.props.res}%</output>
    )
  }
//   maxTotalVal(r){
//     let maxTotal = 100, 
//     total = Number(this.props.valOfSliders[0].valOfSl)+Number(this.props.valOfSliders[1].valOfSl)+Number(this.props.valOfSliders[2].valOfSl);
//     r = maxTotal - total;
//     this.props.valOfSliders[3].valOfSl = r;
//   }
  render() {
    return (
      <div className="slider grey-slider">
        <div className="circle cl4">G</div>
        <input onChange={this.handleChange} value={this.props.res}
          type='range' className='slide-row' step="1"/>
        {/* {this.maxTotalVal(this.props.res)} */}
        {this.showList()}
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

export default connect(mapStateToProps, matchDispatchToProps)(PassiveSlider);