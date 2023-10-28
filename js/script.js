
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#massSlider").slider("value", 25); // slider initialisation : jQuery widget
  $("#massSpinner").spinner("value", 25); // number initialisation : jQuery widget
  $("#lengthSlider").slider("value", 1500);
  $("#lengthSpinner").spinner("value", 1500);
  $("#dampSlider").slider("value", 0.05);
  $("#dampSpinner").spinner("value", 0.05);
  $("#CsArea").spinner("value", 0.01);
  $("#Ivalue").spinner("value", 0.01);
}
function varchange() {
  $("#massSlider").slider({ max: 200, min: 0, step: 0.5 });
  $("#massSpinner").spinner({ max: 200, min: 0, step: 0.5 });

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

  $("#lengthSlider").slider({ max: 3000, min: 1000, step: 10 });
  $("#lengthSpinner").spinner({ max: 3000, min: 1000, step: 10 });

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
