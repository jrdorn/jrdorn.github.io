$(document).ready(function(){

    // datepicker for Flights and Stuff to Do

    flatpickr(".calendarpickr", {
        minDate: "today",
        maxDate: new Date().fp_incr(365),
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d"
    });

    flatpickr(".timepickr", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i"
    });

    

  

  });