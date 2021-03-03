'use strict';
const now = new Date();
const dateContent = document.querySelector('.date');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = now.getDay()



const date = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const dayName = days[day];

dateContent.innerHTML = `${dayName} ${date} ${month} ${year}`;
