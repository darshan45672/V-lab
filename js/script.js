
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//start edit
const img =new Image();
img.src = 'battery1.png';
img.onload = function(){
  const newWidth=530;
  const newHeight=350;
  ctx.drawImage(img,-50,25,newWidth,newHeight);
};

const canvas1 = document.querySelector("#graphscreen1");
const ctx1 = canvas.getContext("2d");
//start edit
const img1 =new Image();
img1.src = 'circuit2.png';
img1.onload = function(){
  const newWidth=280;
  const newHeight=180;
  ctx1.drawImage(img1,90,-10,newWidth,newHeight);
};


//edited*/

//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#massSlider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#massSpinner").spinner("value", 0.05); // number initialisation : jQuery widget
  $("#lengthSlider").slider("value", 0.01);
  $("#lengthSpinner").spinner("value", 0.01);
  $("#dampSlider").slider("value", 0.05);
  $("#dampSpinner").spinner("value", 0.05);
  $("#CsArea").spinner("value", 0.01);
  $("#Ivalue").spinner("value", 0.01);
}
function varchange() {
  $("#massSlider").slider({ max: 610, min: 0, step: 10 });
  $("#massSpinner").spinner({ max: 610, min: 0, step: 10 });

  $("#massSlider").on("slide", function (e, ui) {
    $("#massSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#massSpinner").on("spin", function (e, ui) {
    $("#massSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#massSpinner").on("change", function () {
    varchange();
  });

  $("#lengthSlider").slider({ max: 51, min: 0, step: 1 });
  $("#lengthSpinner").spinner({ max: 51, min: 0, step: 1 });

  $("#lengthSlider").on("slide", function (e, ui) {
    $("#lengthSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#lengthSpinner").on("spin", function (e, ui) {
    $("#lengthSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#lengthSpinner").on("change", function () {
    varchange();
  });
  $("#lengthSpinner").on("touch-start", function () {
    varchange();
  });

 $("#dampSlider").slider({ max: 0.99, min: 0, step: 0.01 });
  $("#dampSpinner").spinner({ max: 0.99, min: 0, step: 0.01 });

  $("#dampSlider").on("slide", function (e, ui) {
    $("#dampSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#dampSpinner").on("spin", function (e, ui) {
    $("#dampSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#dampSpinner").on("change", function () {
    varchange();
  });
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#massSpinner").spinner("value", $("#massSlider").slider("value")); //updating slider location with change in spinner(debug)
  $("#lengthSpinner").spinner("value", $("#lengthSlider").slider("value"));
$("#dampSpinner").spinner("value", $("#dampSlider").slider("value"));
  endmass = $("#massSpinner").spinner("value"); //Updating variables
 beamlength = $("#lengthSpinner").spinner("value");
  dampingratio = $("#dampSpinner").spinner("value");

 };



window.addEventListener("load", varinit);
