
export const select = (valOfSlider) =>{
   console.log("now : ", valOfSlider.valOf);
   return {
      type: "Slider %",
      payload: valOfSlider
   }
};