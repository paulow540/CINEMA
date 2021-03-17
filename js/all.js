(function ($)
{ "use strict"
  $(window).on('load', function () {
    $('#preloader-active').delay(1550).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });
  let a;
   var date1=document.querySelector('#date').value
  var time1=document.querySelector('#time').value

  $('#btn').on('click', function () {
        
    if (date1 == "date" && time1 =="time") {
        console.log('mmmm');
        console.log(date1);
        console.log(time1);        
    //   location.href = "index.html"       
    }
    else{        
        console.log('cannot go');
    }
     
      
  })
  let b=true;
  chooseOne.addEventListener('change', showdati)

  function showdati() {
      if (chooseOne.value == "1") {
          date.value ="01 April, 2021"
          time.value ="4:PM"
      }
      else if (chooseOne.value == "2") {
        date.value ="01 April, 2021"
          time.value ="6:PM"
      }
      else if (chooseOne.value == "3") {
        date.value ="01 April, 2021"
          time.value ="8:PM"
      }
      else if (chooseOne.value == "4") {
        date.value ="04 April, 2021"
          time.value ="4:PM"
      }
      else if (chooseOne.value == "5") {
        date.value ="04 April, 2021"
          time.value ="6:PM"
      }
      else{
        date.value ="Date"
          time.value =  "Time"
      }
      
  }


  
})(jQuery);