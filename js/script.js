var simStat = 0;
let check = 1;

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
img1.src = 'circuit4.png';
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
  $("#voltageSlider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltageSpinner").spinner("value", 0.05); // number initialisation : jQuery widget
  $("#resistorSlider").slider("value", 0.01);
  $("#resistorSpinner").spinner("value", 0.01);
  $("#thresholdSlider").slider("value", 0.05);
  $("#thresholdSpinner").spinner("value", 0.05);
  $("#CsArea").spinner("value", 0.01);
  $("#Ivalue").spinner("value", 0.01);

  var votlageDisplay = document.getElementById('voltage');
  var resistanceDisplay = document.getElementById('resistance');
  
  document.getElementById('voltage').innerHTML = 0;
  document.getElementById('resistance').innerHTML = 0;
  document.getElementById('current').innerHTML = 0;

  sliderDisable();

}
function varchange() {
  $("#voltageSlider").slider({ max: 300, min: 0, step: 10 });
  $("#voltageSpinner").spinner({ max: 300, min: 0, step: 10 });

  $("#voltageSlider").on("slide", function (e, ui) {
    $("#voltageSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("spin", function (e, ui) {
    $("#voltageSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("change", function () {
    varchange();
  });

  $("#resistorSlider").slider({ max: 200, min: 0, step: 1 });
  $("#resistorSpinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistorSlider").on("slide", function (e, ui) {
    $("#resistorSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorSpinner").on("spin", function (e, ui) {
    $("#resistorSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorSpinner").on("change", function () {
    varchange();
  });
  $("#resistorSpinner").on("touch-start", function () {
    varchange();
  });

 $("#thresholdSlider").slider({ max: 50, min: 0, step: 0.5 });
  $("#thresholdSpinner").spinner({ max: 50, min: 0, step: 0.5 });

  $("#thresholdSlider").on("slide", function (e, ui) {
    $("#thresholdSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#thresholdSpinner").on("spin", function (e, ui) {
    $("#thresholdSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#thresholdSpinner").on("change", function () {
    varchange();
  });
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#voltageSpinner").spinner("value", $("#voltageSlider").slider("value")); //updating slider location with change in spinner(debug)
  $("#resistorSpinner").spinner("value", $("#resistorSlider").slider("value"));
$("#thresholdSpinner").spinner("value", $("#thresholdSlider").slider("value"));
  volt = $("#voltageSpinner").spinner("value"); //Updating variables
  res = $("#resistorSpinner").spinner("value");
  thres = $("#thresholdSpinner").spinner("value");
  
  if (res === 0){
    document.getElementById('current').innerHTML = 0;
    document.getElementById('resultMessage').innerHTML = "";
  }else{
    if ((volt/res)>=thres) {
      document.getElementById('current').innerHTML = (volt/res);
      document.getElementById('resultMessage').innerHTML = "The fuse breaks as the maximum allowable current is exceeded";
    }
    else{
      document.getElementById('current').innerHTML = (volt/res).toFixed(4);
      document.getElementById('resultMessage').innerHTML = "";
    }
  }
  document.getElementById('voltage').innerHTML = volt;
  document.getElementById('resistance').innerHTML = res;
  
 };

 function sliderDisable() {
  if(!simStat)  {
    $('#voltageSlider').slider("disable"); 
    $('#voltageSpinner').spinner("disable");
    $('#resistorSlider').slider("disable"); 
    $('#thresholdSlider').slider("disable"); 
    $('#resistorSpinner').spinner("disable"); 
    $('#thresholdSpinner').spinner("disable"); 
    document.getElementById('message').innerHTML = "Complete the circuit connection"
  }
 }
 function checkEnable() {
  if(check)  {
    // console.log("working");
    alert('Circuit connection is correct ')
    $('#voltageSlider').slider("disable"); 
    $('#voltageSpinner').spinner("disable");
    $('#resistorSlider').slider("disable"); 
    $('#resistorSpinner').spinner("disable"); 
    $('#thresholdSlider').slider("enable"); 
    $('#thresholdSpinner').spinner("enable"); 
    
    check = 0
    
    document.getElementById('message').innerHTML = "Set the threshold current and click on simulate button"
    }
  }

  function setThreshold() {
    if(simStat = 1)  {
      // console.log("working");
      $('#voltageSlider').slider("disable"); 
      $('#voltageSpinner').spinner("disable");
      $('#resistorSlider').slider("disable"); 
      $('#resistorSpinner').spinner("disable"); 
      $('#thresholdSlider').slider("enable"); 
      $('#thresholdSpinner').spinner("enable"); 
      
      document.getElementById('message').innerHTML = "Set the threshold current and click on simulate button"
      }
    }
  
  function parametreSliderEnable() {
    if(simStat = 1)  {
      console.log("working");
      $('#voltageSlider').slider("enable"); 
      $('#voltageSpinner').spinner("enable");
      $('#resistorSlider').slider("enable"); 
      $('#resistorSpinner').spinner("enable"); 
      $('#thresholdSlider').slider("disable"); 
      $('#thresholdSpinner').spinner("disable"); 
    }
    document.getElementById('message').innerHTML = "Vary the parameters and see the Result"
  }
 
//  if(simStat)
//  {
//  $('#thetaslider').slider("enable"); 
//  $('#thetaspinner').spinner("enable");
//  $('#omegaslider').slider("disable"); 
//  $('#omegaspinner').spinner("disable"); 
//  theta=$('#thetaspinner').spinner("value");
//  printcomment("Centre at "+theta+"&deg;  Position = "+roundd(-b.ycoord+o.ycoord-r,2)+"cm<br>Vel = "+roundd(-vel,2)+"cm/s  Acc = "+roundd(-acc,2)+"cm/s^2<br>Jerk = "+roundd(-jerk,2)+"cm/s^3",2);
//  }

window.addEventListener("load", varinit);
