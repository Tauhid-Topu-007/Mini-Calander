const monthName= document.getElementById('month-name');
const dayName=document.getElementById('day-name');
const dayNum= document.getElementById('day-number');
const year=document.getElementById('year');

const date = new Date();

const month= date.getMonth();
monthName.innerText=date.toLocaleString('en',{month:'long'});


dayName.innerText=date.toLocaleDateString('en',{
    weekday:'long'
});
dayNum.innerHTML=date.getDate();
year.innerHTML=date.getFullYear();
