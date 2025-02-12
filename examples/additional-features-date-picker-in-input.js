import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/light.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css';

// start irrelevant code
document.querySelector('#calendar-input').style.display = 'flex';
// end irrelevant code

const options = {
  input: true,
  actions: {
    changeToInput(e, calendar, dates, time, hours, minutes, keeping) {
      if (dates[0]) {
        calendar.HTMLInputElement.value = dates[0];
        // if you want to hide the calendar after picking a date
        calendar.hide();
      } else {
        calendar.HTMLInputElement.value = '';
      }
    },
  },
};

const calendarInput = new VanillaCalendar('#calendar-input', options);
calendarInput.init();
