(function ($) {
  //   "use strict"
  //   $(window).on('load', function () {
  //     $('#preloader-active').delay(1550).fadeOut('slow');
  //     $('body').delay(450).css({
  //       'overflow': 'visible'
  //     });
  //   });
  //   $('#showDate')

  //   $('#wanto').on('click', function () {
  //       $('#secondform').show()
  //       $('#firstform').hide()
  //       console.log('hello');

  //   })
  var a = document.getElementById('secondform')
  var b = document.getElementById('firstform')

  var show1 = document.getElementById('wanto')
  show1.addEventListener('click', showing)
  // console.log('mm');

  function showing() {
    a.style.display = "inherit";
    b.style.display = "none";
    show1.style.display = "none"
  }

  let sigup = [];
  let name1 = document.querySelector('#name')
  let email1 = document.querySelector('#email')
  let password1 = document.querySelector('#password')

 $('#going').on('click', goingto)

  function goingto() {
    let na = name1.value;
    let insidename =/^[a-zA-Z]*/
    let myName =insidename.test(na)
    let em = email1.value;
   let insidemail= /^[a-zA-Z]*[@]{1}[a-zA-Z]{5,6}[.]{1}[a-zA-Z]{3,3}$/
   let myEmail =insidemail.test(em)
    let pas = password1.value
    let insidepass =/^[a-zA-Z0-9]{8,9}/
    let myPassword =insidepass.test(pas)
    let inside = {
      nam:  na,
      ema: em,
      pass:pas
    }
  
    // sigup.push(inside)

    localStorage.setItem(`${em}`, JSON.stringify(inside))
    if (myPassword && myEmail && myName) {
      console.log('welcome');
      alert()
   
      location.href ='index.html'; 
    }     
   
    else{
      console.log('empty');
    let checkpass =  $('#incorrect').html( `your have to enter 8 charaters as password`)
    checkpass.css('color','red'," margin",'center')

    }

  }


  let sim = sig.addEventListener('click', goingin)

  function goingin(e) {
    // alert()
    let signinf = document.getElementById('signinfir')
    let signinse = document.getElementById('signinsec')
    let signinEmail = signinf.value;
    console.log(signinf.value,signinEmail);
    let signinPass = signinse.value
    let ok = JSON.parse(localStorage.getItem(`${signinEmail}`));
    // alert(ok);
    if (ok.pass == signinPass) {
      
      // console.log("man");
      alert('welcome log in')
      location.href ='index.html';
    }
   
    else{
      console.log('kolo');
    }
    console.log(ok);


    e.preventDefault();
  }








})(jQuery);