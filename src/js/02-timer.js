import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysText = document.querySelector('[data-days]');
const hoursText = document.querySelector('[data-hours]');
const minutesText = document.querySelector('[data-minutes]');
const secondsText = document.querySelector('[data-seconds]');

let deadline;

function convertMs(term) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(term / day);
  // Remaining hours
  const hours = Math.floor((term % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((term % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((term % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// ------------------
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates, dateStr) {
    startBtn.disabled = true;
    dateStr = selectedDates[0];
    if (dateStr < new Date()) {
      Notiflix.Report.warning(
        'WARNING',
        'Please choose a date in the future',
        'Choose another date'
      );
    } else {
      deadline = dateStr;
      startBtn.disabled = false;
    }
  },
};
let timerId;

const countdown = () => {
  const term = deadline - new Date();
  console.log(term);
  if (term <= 0) {
    clearInterval(timerId);
  }
  startBtn.disabled = true;
  const { days, hours, minutes, seconds } = convertMs(term);
  secondsText.textContent = seconds;
  minutesText.textContent = minutes;
  hoursText.textContent = hours;
  daysText.textContent = days;
};
// --------------------
startBtn.addEventListener('click', () => {
  timerId = setInterval(countdown, 1000);
  startBtn.disabled = false;
});
flatpickr(input, options);
