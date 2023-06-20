const dateNow = document.querySelector('.date-now');
const inputYear = document.querySelector('.input-year');
const inputMonth = document.querySelector('.input-month');
const button = document.querySelector('.get-date');
const output = document.querySelector('.output-date');

const d = new Date();
const dayTitle = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const nowDate = (d.getDate()).toString().padStart(2, '0');
const nowDay = dayTitle[d.getDay()]
const nowMonth = (d.getMonth() + 1).toString().padStart(2, '0');
const nowYear = d.getFullYear();

dateNow.innerHTML = `${nowDay}, ${nowDate}.${nowMonth}.${nowYear}`


button.addEventListener('click', getMonthAgo);

let sumMonths;

function sumMonth() {
   // Сумма месяцев
   const yearsAgo = Number(inputYear.value)
   const monthsYearAgo = yearsAgo * 12
   const monthsAgo = Number(inputMonth.value);
   sumMonths = monthsYearAgo + monthsAgo;
}

function getMonthAgo() {

    sumMonth()

    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - sumMonths, currentDate.getDate());
    const monthTitle = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    const targetD = targetDate.getDate();
    const targetDay = dayTitle[targetDate.getDay()]
    const targetMonth = monthTitle[targetDate.getMonth()];
    const targetYear = targetDate.getFullYear()


    const getDate = `${targetDay}, ${targetD} ${targetMonth} ${targetYear} года`
    output.classList.remove('none')
    output.innerHTML = getDate

    return getDate
}
