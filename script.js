function reset() {
  for(let i = 10; i<=100; i = i+10) {
    // console.log(i);
    let temp = i.toString();
    document.getElementById(temp).className = "";
  }
}

function ten() {
  // console.log("10");

  document.getElementById("progress").style.width = "10%";
  reset();
  document.getElementById("10").className += "active";
}
function twenty() {
  document.getElementById("progress").style.width = "20%";
  reset();
  document.getElementById("20").className += "active";
  console.log("20");

}
function thirty() {
  document.getElementById("progress").style.width = "30%";
  reset();
  document.getElementById("30").className += "active";
}
function forty() {
  document.getElementById("progress").style.width = "40%";
  reset();
  document.getElementById("40").className += "active";
}
function fifty() {
  document.getElementById("progress").style.width = "50%";
  reset();
  document.getElementById("50").className += "active";
}
function sixty() {
  document.getElementById("progress").style.width = "60%";
  reset();
  document.getElementById("60").className += "active";
}
function seventy() {
  document.getElementById("progress").style.width = "70%";
  reset();
  document.getElementById("70").className += "active";
}
function eighty() {
  document.getElementById("progress").style.width = "80%";
  reset();
  document.getElementById("80").className += "active";
}
function ninety() {
  document.getElementById("progress").style.width = "90%";
  reset();
  document.getElementById("90").className += "active";
}
function hundred() {
  document.getElementById("progress").style.width = "100%";
  reset();
  document.getElementById("100").className += "active";
}