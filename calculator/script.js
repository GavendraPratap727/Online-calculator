const result = document.getElementById('result');  

function updateDisplay(value) {  
  result.value = value;  
}  

function clearDisplay() {  
  result.value = '';  
}  

function deleteChar() {  
  result.value = result.value.slice(0, -1);  
}  

function calculate() {  
  try {  
    result.value = eval(result.value);  
  } catch (error) {  
    result.value = 'Error';  
  }  
}  

function square() {  
  result.value = Math.pow(parseFloat(result.value), 2);  
}  

document.querySelectorAll('.btn').forEach(btn => {  
  btn.addEventListener('click', () => {  
    const value = btn.id;  
    switch (value) {  
      case 'ac':  
        clearDisplay();  
        break;  
      case 'del':  
        deleteChar();  
        break;  
      case '=':  
        calculate();  
        break;  
      case 'square':  
        square();  
        break;  
      default:  
        updateDisplay(result.value + value);  
        break;  
    }  
  });  
});