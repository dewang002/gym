const form=document.querySelector('#form')
const btn=document.querySelector('.enterbtn')
const result=document.querySelector('#result')
const slider=document.querySelector('.slider')
const sliderbox=document.querySelector('.sliderbox')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
})
var value=0;

btn.addEventListener('click',()=>{
  const input=document.querySelector('.input1')
  const input2=document.querySelector('#input2')
  const weight=input.value
  const reps=input2.value
   value=1.0278-(0.0278*reps)
  value= Math.floor(weight/value)
  result.innerHTML=`${value}KG`
  
})

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const toggleCircle = toggleButton.querySelector('div');

  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('bg-green-500');
    toggleButton.classList.toggle('bg-gray-400');
    toggleCircle.classList.toggle('translate-x-6');
    if(toggleButton.classList.contains('bg-green-500')){
      result.innerHTML=`${2.2*value}LBS`
    }else{
      result.innerHTML=`${value}KG`
    }
  });
});



