import {combineReducers} from 'redux';
import SlidersVal from './slidersVal';

const allReducers = combineReducers ({
   valOfSliders: SlidersVal
});

export default allReducers;