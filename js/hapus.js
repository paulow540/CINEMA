(function ($) {
  "use strict"
  $(window).on('load', function () {
    $('#preloader-active').delay(1550).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });
  $('#showDate')

  //   $('#wanto').on('click', function () {
  //       $('#secondform').show()
  //       $('#firstform').hide()
  //       console.log('hello');

  //   })
  var a = document.getElementById('secondform')
  var b = document.getElementById('firstform')

  var show1 = document.getElementById('wanto')
  show1.addEventListener('click', showing)
  console.log('mm');

  function showing() {
    a.style.display = "inherit";
    b.style.display = "none";
    show1.style.display = "none"
  }

  let sigup = [];
  let name1 = document.querySelector('#name')
  let email1 = document.querySelector('#email')
  let password1 = document.querySelector('#password')

  let go = going.addEventListener('click', goingto)

  function goingto() {
    let na = name1.value;
    let em = email1.value;
    let pas = password1.value
    let inside = {
      nam: na,
      ema: em,
      pass: pas
    }
    sigup.push(inside)

    console.log(sigup);
    localStorage.setItem('out', JSON.stringify(sigup))
  }

  let signinf=document.getElementById('signinfir')
  let signinse=document.getElementById('signinsec')
  let sim = sig.addEventListener('click', goingin)

  function goingin() {
    let signi=signinf.value;
    let signin=signinse.value
    let loc =localStorage.getItem('out')
    ok =JSON.parse(loc)
    console.log(ok);
    
  }

  






})(jQuery);