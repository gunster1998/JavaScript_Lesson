let MyDate = new Date();
console.log(MyDate);

const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
let day = MyDate.getDate();  
console.log(day)
let year = MyDate.getFullYear();
console.log(year);
let month = MyDate.getMonth();
console.log(month)
let newDate = `Месяц ${months[month]}`
console.log(newDate);