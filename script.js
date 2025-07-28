const inputField = document.getElementById('input-field');

document.querySelectorAll('button').forEach((button) =>{
  button.addEventListener('click', e =>{
    const input = e.target.innerHTML;
    if(input === 'C'){
      inputField.value = ''
    } else if (input === 'Del'){
      inputField.value = ''
    } else if(input === '×'){
      inputField.value += '*';
    } else if (input === '÷'){
      inputField.value += '/'
    } else if(input === '='){
      return
    } else if(input === '%'){
      if(!isNaN(inputField.value)) {
        inputField.value = inputField.value / 100;
      } else {
        inputField.value = 'Math error'
      }
    } else{
      inputField.value += input;
    }
  })
})

document.getElementById('equal-sign').addEventListener('click', () =>{
  if(inputField.value){
    calculate()
  }
})

function calculate(){
  try{
    inputField.value = eval(inputField.value);
  } catch(err){
    inputField.value = 'Math error'
  }
}