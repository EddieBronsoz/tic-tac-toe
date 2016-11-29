// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function first() {
var canvas = document.getElementById("game-board")
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", "45")
 circle.setAttribute("cy", "45")
 circle.setAttribute("r", "40")
 circle.setAttribute("fill", "green")
 canvas.appendChild(circle)
}
function second() {
  var canvas = document.getElementById("game-board")
   var circle = document.createElementNS(namespace, "circle")
   circle.setAttribute("cx", "145")
   circle.setAttribute("cy", "45")
   circle.setAttribute("r", "40")
   circle.setAttribute("fill", "blue")
   canvas.appendChild(circle)
}

function third() {
  var canvas = document.getElementById("game-board")
   var circle = document.createElementNS(namespace, "circle")
   circle.setAttribute("cx", "245")
   circle.setAttribute("cy", "45")
   circle.setAttribute("r", "40")
   circle.setAttribute("fill", "pink")
   canvas.appendChild(circle)
}

function fourth() {
var canvas = document.getElementById("game-board")
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", "45")
 circle.setAttribute("cy", "145")
 circle.setAttribute("r", "40")
 circle.setAttribute("fill", "yellow")
 canvas.appendChild(circle)
}
function fifth() {
  var canvas = document.getElementById("game-board")
   var circle = document.createElementNS(namespace, "circle")
   circle.setAttribute("cx", "145")
   circle.setAttribute("cy", "145")
   circle.setAttribute("r", "40")
   circle.setAttribute("fill", "purple")
   canvas.appendChild(circle)
}

function sixth() {
  var canvas = document.getElementById("game-board")
   var circle = document.createElementNS(namespace, "circle")
   circle.setAttribute("cx", "245")
   circle.setAttribute("cy", "145")
   circle.setAttribute("r", "40")
   circle.setAttribute("fill", "black")
   canvas.appendChild(circle)
}

function seventh(){
var canvas = document.getElementById("game-board")
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", "45")
 circle.setAttribute("cy", "245")
 circle.setAttribute("r", "40")
 circle.setAttribute("fill", "brown")
 canvas.appendChild(circle)
}
function eighth() {
  var canvas = document.getElementById("game-board")
   var circle = document.createElementNS(namespace, "circle")
   circle.setAttribute("cx", "145")
   circle.setAttribute("cy", "245")
   circle.setAttribute("r", "40")
   circle.setAttribute("fill", "pink")
   canvas.appendChild(circle)
}

function ninth() {
  var canvas = document.getElementById("game-board")
   var circle = document.createElementNS(namespace, "circle")
   circle.setAttribute("cx", "245")
   circle.setAttribute("cy", "245")
   circle.setAttribute("r", "40")
   circle.setAttribute("fill", "white")
   canvas.appendChild(circle)
}
