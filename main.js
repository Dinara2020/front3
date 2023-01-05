import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
new AirDatepicker('#el', {
    inline: true,
    range: true,
    multipleDatesSeparator: ' - ',
    locale: localeEn,
    navTitles: {
        days: '<strong>yyyy MMMM</strong>'
    }
});