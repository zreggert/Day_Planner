var today = moment();
var currentTime = moment().hours();
//console.log(currentTime);
$("#currentDay").text(moment().format('LLLL'));
var timeBlock;
var task;
$(document).ready(function() {
    //setting items to local storage
    
    $('.btn').click(function() {
        var timeBlock = $(this).parent().attr('id') 
        var task = $(this).siblings('.description').val()
        localStorage.setItem(timeBlock, task);
    });

    //getting from local storage
    // $('#9 .description').val(localStorage.getItem("9"));
    // $('#10 .description').val(localStorage.getItem("10"));
    // $('#11 .description').val(localStorage.getItem("11"));
    // $('#12 .description').val(localStorage.getItem("12"));
    // $('#13 .description').val(localStorage.getItem("13"));
    // $('#14 .description').val(localStorage.getItem("14"));
    // $('#15 .description').val(localStorage.getItem("15"));
    // $('#16 .description').val(localStorage.getItem("16"));
    // $('#17 .description').val(localStorage.getItem("17"));

    function getStoredTasks() {
        // Object.keys(localStorage).forEach((key) => {
        //     $(key).val(localStorage.getItem(key))
        //     console.log(localStorage.getItem(key));
        //    });
        var timeBlocks = $('.row').toArray();
        $.each(timeBlocks, function() {
            var hour = $(this).attr('id')
            //console.log(hour);
            $('.description', this).prepend(localStorage.getItem(hour));
        })
    }
    getStoredTasks();


    //changing the colors of the time blocks over time
    function hoursLeft() {
        var timeBlocks = document.querySelectorAll('.row');
        //console.log(timeBlocks);
        timeBlocks.forEach(element => {
            var hour = $(element).attr('id');
            var hourT = $(element).attr('data-hour');
            //console.log(hour);
            //console.log(hourT);
            if (hour > currentTime) {
                $(hourT).addClass('future');
            } else if (hour < currentTime) {
                $(hourT).addClass('past');
            } else {
                $(hourT).addClass('present');
            }
         })
    }
    hoursLeft();
})
