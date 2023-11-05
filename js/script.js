var simStat = 0;
var thres = 0;
;

var red = 0;
var black = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const points = [
  { x: 200, y: 185, color: 'red' },
  { x: 400, y: 185, color: 'red' },
  { x: 200, y: 366, color: 'black' },
  { x: 400, y: 366, color: 'black' },
];

// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");

function drawPoint(x, y, color) {
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

points.forEach((point) => {
  drawPoint(point.x, point.y, point.color);
});

let clickedPoints = [];

canvas.addEventListener("click", function (e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Find the clicked point
  const clickedPoint = points.find((point) => {
    const distance = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
    return distance <= 5;
  });

  if (clickedPoint) {
    clickedPoints.push(clickedPoint);
    drawPoint(clickedPoint.x, clickedPoint.y, clickedPoint.color);

    if (clickedPoints.length === 2) {
      if (clickedPoints[0].color === clickedPoints[1].color) {
        // Connect points with a straight line using their respective color
        ctx.lineWidth = 2;
        ctx.strokeStyle = clickedPoints[0].color;
        ctx.beginPath();
        ctx.moveTo(clickedPoints[0].x, clickedPoints[0].y);
        ctx.lineTo(clickedPoints[1].x, clickedPoints[1].y);
        ctx.stroke();
        ctx.strokeStyle = "black"; // Reset the stroke style to black
      }
      // canvas
      clickedPoints = [];
    }
  }
});

function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

ctx.fillStyle = "black";
roundRect(150, 200, 100, 160, 10);
ctx.fill();


ctx.fillStyle = "yellow";
roundRect(150, 200, 100, 50, 10);
ctx.fill();

ctx.fillStyle = "gray";
roundRect(177, 192, 50, 11, 5);
ctx.fill();

// starting red line
ctx.fillStyle = "red";
roundRect(195, 180, 12, 12, 6);
ctx.fill();

// starting black line
ctx.fillStyle = "black";
roundRect(195, 360, 12, 12, 6);
ctx.fill();

// ending red line
ctx.fillStyle = "red";
roundRect(394, 180, 12, 12, 6);
ctx.fill();

// ending black line
ctx.fillStyle = "black";
roundRect(394, 360, 12, 12, 6);
ctx.fill();

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

ctx.rect(500, 110, 100, 25);
ctx.stroke();

// Add a plus (+) symbol
ctx.fillStyle = "black";
ctx.fillRect(198, 210, 5, 15);
ctx.fillRect(193, 215, 15, 5);

// Add a minus (-) symbol
ctx.fillStyle = "white";
ctx.fillRect(195, 345, 15, 5);

canvas.addEventListener('click', function(event) {
  // Get the click coordinates relative to the canvas
  // console.log("mouse click");
  const clickX = event.clientX - canvas.getBoundingClientRect().left;
  const clickY = event.clientY - canvas.getBoundingClientRect().top;

  // Check if the click is on the ending red point
   if ((clickX >= 394) && (clickX <= 394 + 12) && (clickY >= 180) && (clickY <= 180 + 12)) {
     // Draw a red line between the starting red point and ending red point
     let colour = "red";
     ctx.strokeStyle = colour;
    //  console.log("mouse line red ");
     ctx.lineWidth = 2;
     ctx.beginPath();
     ctx.moveTo(200, 186);
     ctx.lineTo(398, 186);
     ctx.stroke();
     if(colour == 'red'){
      console.log("red line");
      red = 1;
    }
   }

  if ( clickX >= 394 && clickX <= 394 + 12 && clickY >= 360 && clickY <= 360 + 12 ) {
    // console.log("mouse line black");
    let colour = "black"
    ctx.strokeStyle = colour;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(205, 367);
    ctx.lineTo(403, 367);
    ctx.stroke();
    if(colour == 'black'){
      console.log("black line");
      black = 1;
    }
  }
});

ctx.strokeStyle = "black";
      ctx.lineWidth = 2;

       // Vertical lines
      ctx.beginPath();
      ctx.moveTo(400, 120);
      ctx.lineTo(400, 180);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(400, 360);
      ctx.lineTo(400, 430);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(700, 120);
      ctx.lineTo(700, 241);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(700, 315);
      ctx.lineTo(700, 430);
      ctx.stroke();

      // Horizontal lines
      ctx.beginPath();
      ctx.moveTo(400, 430);
      ctx.lineTo(700, 430);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(520, 122);
      ctx.lineTo(400, 122);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(580, 122);
      ctx.lineTo(701, 122);
      ctx.stroke();

      
      //resistor
      
      ctx.beginPath();
      ctx.moveTo(690, 310);
      ctx.lineTo(700, 316);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(690, 310);
      ctx.lineTo(710, 298);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(710, 298);
      ctx.lineTo(690, 286);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(690, 286);
      ctx.lineTo(710, 272);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(710, 272);
      ctx.lineTo(690, 260);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(690, 260);
      ctx.lineTo(710, 248);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(710, 248);
      ctx.lineTo(698, 241);
      ctx.stroke();

      fuse()
      
      function fuse(){
        // fuse full line
        ctx.strokeStyle ="black";
        ctx.beginPath();
        ctx.moveTo(520, 122);
        ctx.lineTo(580, 122);
        ctx.stroke();
      }

      function fusebreak(){
        // fuse full line
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(520, 122);
        ctx.lineTo(580, 122);
        ctx.stroke();
      }


      //ground

      
      ctx.beginPath();  
      ctx.moveTo(570, 450);
      ctx.lineTo(540, 450);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(565, 455);
      ctx.lineTo(545, 455);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(560, 460);
      ctx.lineTo(550, 460);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(555, 430);
      ctx.lineTo(555, 450);
      ctx.stroke();


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

  $('#voltageSlider').slider("disable"); 
  $('#voltageSpinner').spinner("disable");
  $('#resistorSlider').slider("disable"); 
  $('#thresholdSlider').slider("disable"); 
  $('#resistorSpinner').spinner("disable"); 
  $('#thresholdSpinner').spinner("disable"); 

  document.getElementById("threshold-btn").disabled = true;
  document.getElementById("simulate-btn").disabled = true;

  document.getElementById('message').innerHTML = "Complete the circuit connection"
  
  document.getElementById('voltage').innerHTML = 0;
  document.getElementById('resistance').innerHTML = 0;
  document.getElementById('current').innerHTML = 0;
  document.getElementById('threshold').innerHTML = 0;
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
    fuse();
    $('#current').text(0);
    $('#resultMessage').text("");
  }else{
    if ((volt/res)>=thres) {
      fusebreak();
      $('#current').text((volt / res));
      $('#resultMessage').text("The fuse breaks as the maximum allowable current is exceeded");
    }
    else{
      fuse();
      $('#current').text((volt / res).toFixed(4));
      $('#resultMessage').text("");
    }
  }
  $('#voltage').text(volt);
  $('#resistance').text(res);
  $('#threshold').text(thres);
  
 };

 function checkConnection() {
    // console.log("working check");
    if(red && black){
      // console.log("working red black");
    alert('Circuit connection is correct ')
    $('#voltageSlider').slider("disable"); 
    $('#voltageSpinner').spinner("disable");
    $('#resistorSlider').slider("disable"); 
    $('#resistorSpinner').spinner("disable"); 
    $('#thresholdSlider').slider("enable"); 
    $('#thresholdSpinner').spinner("enable"); 
    document.getElementById("check-btn").disabled = true;
    document.getElementById('message').innerHTML = "Set the threshold current and click on simulate button"
    document.getElementById("threshold-btn").disabled = false;
    document.getElementById("simulate-btn").disabled = false;
    }
    else{
      if(red == 0 ){
        if(black == 0){
          alert('complete the circuit connection')
          return;
        }else{
          alert('connect live wire')
          console.log("live wire");
        }
      }
      if(black == 0){

          alert("connect neutral wire")
          console.log("neutral wire");
        }
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
 

window.addEventListener("load", varinit);
