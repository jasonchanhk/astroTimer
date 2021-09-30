var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

var wm = document.getElementById("work_minutes");
var ws = document.getElementById("work_seconds");

var bm = document.getElementById("break_minutes");
var bs = document.getElementById("break_seconds");

var cycle = document.getElementById("counter");

//control panel setting

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        document.getElementById("notice").innerText = "Timer is already running";
    }
})


reset.addEventListener('click', () => {
    wm.innerText = 50;
    ws.innerText = "00";
    bm.innerText = 10;
    bs.innerText = "00";

    cycle.innerText = 0;

    clearInterval(startTimer)
})

pause.addEventListener('click', () => {
    clearInterval(startTimer);
    startTimer = undefined;
})

//timer function begin with work(-) > break(-) > cycle(+)
function timer(){
    //work time countdown


    if(ws.innerText != 0){
        ws.innerText--;
        ws.innerText = parseInt(ws.innerText).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }
    else if(wm.innerText != 0 && ws.innerText == 0){
        wm.innerText--;
        wm.innerText = parseInt(wm.innerText).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        ws.innerText = 59;
    }

    //break time countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
        bs.innerText--;
        bs.innerText = parseInt(bs.innerText).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        }
        else if(bm.innerText != 0 && bs.innerText == 0){
            bm.innerText--;
            bm.innerText = parseInt(bm.innerText).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
            bs.innerText = 59;
        }
    }

    //cycle counter
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 50;
        ws.innerText = "00";
        bm.innerText = 10;
        bs.innerText = "00";

        cycle.innerText++;
    }

    if (cycle.innerText == 3){
        clearInterval(startTimer);
        startTimer = undefined;
        document.getElementById("notice").innerText = "Good job! It is time to rest!";
    }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");

for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className = "dismiss";
  span.appendChild(text);
  myNodelist[i].appendChild(span);
}

// Click on a close button to dismiss the current list item
var dismiss = document.getElementsByClassName("dismiss");
//dismiss is inside span tag
for (var i = 0; i < dismiss.length; i++) {
  dismiss[i].onclick = () => {
    this.parentElement.particularli.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul'); //first element match the selector
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {//ul 
    event.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var listitem = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var text = document.createTextNode(inputValue);
  listitem.appendChild(text); //<li>inputValue</li>

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "dismiss";
  span.appendChild(txt);
  listitem.appendChild(span);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(listitem);
  }
  document.getElementById("myInput").value = "";

  for (i = 0; i < dismiss.length; i++) {
    dismiss[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function play() {
    var audio = new Audio("./Click2-Sebastian-759472264.mp3");
    audio.volume = 1
    audio.play();
  }

