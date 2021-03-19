// ... jquery...

(function ($) {
  "use strict"
  $(window).on('load', function () {
    $('#preloader-active').delay(1550).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });

  var outother =[]

  let bbtn = document.querySelectorAll('.btn')
  bbtn.forEach((element, index) => {
    element.addEventListener('click', function () {
      index++;
      // console.log(bbtn);
      let ID = $(`#button${index}`).parent().prev().attr('id');
      let yo = $(`#${ID}`).children('.imageAll').attr('id');
      // console.log(yo, ID);
      let ong = $(`#${yo}`).attr('src');
      let first = $(`#button${index}`).prev().attr('id');
      let second = $(`#button${index}`).prev().prev().attr('class');
      let thrid = $(`#button${index}`).prev().prev().prev().attr('class');
      let fourth = $(`#button${index}`).prev().prev().prev().prev().attr('class');
  

      let inother ={
        theimage : ong,
        thefirst : first,
        thesecond : second,
        thethrid : thrid,
        thefourth : fourth
      }

      outother.push(inother)
     localStorage.setItem('outo', JSON.stringify(outother))


    })

  });

})(jQuery);