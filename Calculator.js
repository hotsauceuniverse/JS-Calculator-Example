function sum() {
  let first = document.getElementById('text1').value
  let second = document.getElementById('text2').value
  let result = (parseFloat(first)+parseFloat(second)).toFixed(1)
  document.getElementById('result').value = result
}

function minus() {
  let first = document.getElementById('text1').value
  let second = document.getElementById('text2').value
  let result = (parseFloat(first)-parseFloat(second)).toFixed(1)
  document.getElementById('result').value = result
}

function multiplication() {
  let first = document.getElementById('text1').value
  let second = document.getElementById('text2').value
  let result = (parseFloat(first)*parseFloat(second)).toFixed(1)
  document.getElementById('result').value = result
}

function division() {
  let first = document.getElementById('text1').value
  let second = document.getElementById('text2').value
  let result = (parseFloat(first)/parseFloat(second)).toFixed(1)
  document.getElementById('result').value = result
}