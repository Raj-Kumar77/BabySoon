
// youtube
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
    });

    // textimonals
    var swiper = new Swiper(".mySwiperr", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        // 1423: {
        //     slidesPerView: 3,
        // },
    },
    });




    // ----------------------Modal------------------

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
  btn[0].onclick = function() {
  modal.style.display = "block";
}

  btn[1].onclick = function() {
  modal.style.display = "block";
}

  btn[2].onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var usercheck = /^[A-Za-z. ]{3,30}$/;
var agecheck = /[^0][0-9]{1,3}/
var mobilecheck = /^[6789][0-9]{9}$/;
span.onclick = function(e) {
  e.preventDefault();
  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var input3 = document.getElementById('input3').value;
  var error = document.getElementById('error');
  if(input1 != '' && input2 != '' && input3 != ''){
    if(usercheck.test(input1) && agecheck.test(input2) && mobilecheck.test(input3)){
      modal.style.display = "none";
    }else{
      error.innerHTML='Invalid Details';
      error.style.display = 'block';
    }
  }else{
    error.style.display = "block";
  }
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
    

// form popout when page loads
window.addEventListener('load',function(){
  setTimeout(
    function open(event){
    modal.style.display='block'
  }, 2000)
})
