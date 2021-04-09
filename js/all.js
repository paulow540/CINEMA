(function ($) {
  "use strict"
  $(window).on('load', function () {
    $('#preloader-active').delay(1550).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });
  let a;
  var date1 = document.getElementById('date').value
  var time1 = document.getElementById('time').value
  var time2 = document.getElementById('chooseOne').value

  $('#btn').on('click', function () {
// console.log(time2);
    if (date1 == "" && time1 == "" && chooseOne.value == 'CHOOSE A CINEMA') {

      console.log('Cannot go');    
         
    }
    else {
      // console.log('cannot go');
         location.href = "hapus.html" 
        
    }
  })
  let b = true;
  chooseOne.addEventListener('change', showdati)

  function showdati() {
    if (chooseOne.value == "1") {
      date.value = "01 April, 2021"
      time.value = "4:PM"
    }
    else if (chooseOne.value == "2") {
      date.value = "01 April, 2021"
      time.value = "6:PM"
    }
    else if (chooseOne.value == "3") {
      date.value = "01 April, 2021"
      time.value = "8:PM"
    }
    else if (chooseOne.value == "4") {
      date.value = "04 April, 2021"
      time.value = "4:PM"
    }
    else if (chooseOne.value == "5") {
      date.value = "04 April, 2021"
      time.value = "6:PM"
    }
    else {
      date.value = "show Date"
      time.value = " show Time"
    }

  }

   
   addEventListener('load',() =>{
     
    if (localStorage.getItem('outo')  != '') {
      let pp=0
    let  view = JSON.parse(localStorage.getItem('outo'))
      console.log(view);
      $('#mmm').attr('src', view[pp].theimage)
      $('#ti').html( view[pp].thefourth)
      $('#span').html(view[pp].thethrid)
      $('#dis').html(view[pp].thesecond)
     
      
      
    }
   
  });



})(jQuery);