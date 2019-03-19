const r = document.getElementById("r")
const g = document.getElementById("g")
const b = document.getElementById("b")


function change() {
  const color = "#" + hex(r.value) + hex(g.value) + hex(b.value)
   
  document.body.style.backgroundColor = color
  document.getElementById("hex-label").innerText = color
  document.getElementById("r-label").innerText = r.value
  document.getElementById("g-label").innerText = g.value
  document.getElementById("b-label").innerText = b.value

}

function hex(number) {
  let hex = parseInt(number).toString(16)
  
  if (parseInt(number) < 16) {
      hex = "0" + hex;
  }
  return hex;
}