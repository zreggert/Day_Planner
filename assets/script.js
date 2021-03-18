var today = moment();
var currentTime = moment().hours();
$("#currentDay").text(moment().format('LLLL'));
var timeBlock;
var task;
$(document).ready(function() {
    //setting items to local storage
    
    $('.btn').click(function() {
        var timeBlock = $(this).parent().attr('id') 
        var task = $(this).siblings('.description').val()
        localStorage.setItem(timeBlock, task);
        console.log(timeBlock)
    })
    // $('#10 .btn').click(function() {
    //     var timeBlock = $(this).parent().attr('id') 
    //     var task = $(this).siblings('.description').val()
    //     localStorage.setItem(timeBlock, task);
    // })
    // $('#11 .btn').click(function() {
    //     var timeBlock = $(this).parent().attr('id') 
    //     var task = $(this).siblings('.description').val()
    //     localStorage.setItem(timeBlock, task);
    // })
    // $('#12 .btn').click(function() {
    //     var timeBlock = $(this).parent().attr('id') 
    //     var task = $(this).siblings('.description').val()
    //     localStorage.setItem(timeBlock, task);
    // })
    // $('#13 .btn').click(function() {
    //     var timeBlock = $(this).parent().attr('id') 
    //     var task = $(this).siblings('.description').val()
    //     localStorage.setItem(timeBlock, task);
    // })
    // $('#14 .btn').click(function() {
    //     var timeBlock = $(this).parent().attr('id') 
    //     var task = $(this).siblings('.description').val()
    //     localStorage.setItem(timeBlock, task);
    // })
    // $('#15 .btn').click(function() {
    //     var timeBlock = $(this).parent().attr('id') 
    //     var task = $(this).siblings('.description').val()
    //     localStorage.setItem(timeBlock, task);
    // })
    // $('#16 .btn').click(function() {
    //     var timeBlock = $(this).parent().attr('id') 
    //     var task = $(this).siblings('.description').val()
    //     localStorage.setItem(timeBlock, task);
    // })
    // $('#17 .btn').click(function() {
    //     var timeBlock = $(this).parent().attr('id') 
    //     var task = $(this).siblings('.description').val()
    //     localStorage.setItem(timeBlock, task);
    // })


    //getting from local storage
    $('#9 .description').val(localStorage.getItem("9"));
    $('#10 .description').val(localStorage.getItem("10"));
    $('#11 .description').val(localStorage.getItem("11"));
    $('#12 .description').val(localStorage.getItem("12"));
    $('#13 .description').val(localStorage.getItem("13"));
    $('#14 .description').val(localStorage.getItem("14"));
    $('#15 .description').val(localStorage.getItem("15"));
    $('#16 .description').val(localStorage.getItem("16"));
    $('#17 .description').val(localStorage.getItem("17"));
})


