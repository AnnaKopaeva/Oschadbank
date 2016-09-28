//slider
$('.main-slider').slick({
  dots: false,
  nextArrow: false,
  prevArrow: false,
});

// for google map
function initMap() {
  var uluru = {lat: 50.503603, lng: 30.435749};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// validation form
$('.userPhone').mask('+38(999) 999-9999');
$('#form').submit(function (){
  $(this).validate({
    validClass: 'success',
    errorClass: 'error',
    errorElement: "em",
    rules: {
        UserSurname: {
        required: true,
        minlength: 3
      },
      userEmail: {
        email: true,
        required: true
      },
      userPhone: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      UserSurname: {
        required: "Не введено ім'я",
        minlength: "Мінімальна кількість символів 3"
      },
      userEmail: {
        email: "Не вірно введено пошту",
        required: "Не введено пошту",
      },
      userPhone: {
        required: "Не введено номер телефону",
        minlength: "Мінімальна кількість символів 10"
      },
    },
  });
  return false;
});

var mq = window.matchMedia("(max-width: 1000px)");

function changeAccess(mq) {
  if (mq.matches) {
    $('#input-access-type').val("Особистий");

    $('.access-type').hide();

$('#input-access-type').focus(function(){
    $('.access-type').show();
});

$('#content span').click(function(){
    $('#input-access-type').val($(this).html())
    $('.access-type').hide();
});

$(window).click(function(){
    if ($("#input-access-type").is(":focus")) {
    }
    else {
        $('.access-type').hide();
    }            
});
  } 
}

//change size of font
var fontSize = $.cookie('fontSize');

if (fontSize != undefined) {
  $('html').css('fontSize', fontSize + 'px');
};

var minSize = 14,
    maxSize = 20,
    fontStep = 2,
    $html = $('html');

$('.font-minus').click(function() {
  var fontSize = $.cookie('fontSize');

  if (fontSize != undefined) {
    if (fontSize != minSize) {
      fontSize = parseFloat(fontSize) - fontStep;
    };
    $.cookie('fontSize', fontSize, { path: '/' });
    $html.css('fontSize', fontSize + 'px');
  }
});

$('.font-plus').click(function() {
  var fontSize = $.cookie('fontSize');

  if (fontSize != undefined) {
    if (fontSize != maxSize) {
      fontSize = parseFloat(fontSize) + fontStep;
    };
    
  } else {
    fontSize = minSize + fontStep;
  }
  $.cookie('fontSize', fontSize, { path: '/' });
  $html.css('fontSize', fontSize + 'px');
});

// search
$('.search #search').keyup(function () {
  $('.grid').css('minHeight', 'auto');
  $('.search li').each(function (index) {
    var nameTag = $(this).text().toLowerCase(),
        searchStr = $('.search #search').val().toLowerCase();
    if (nameTag.indexOf(searchStr) == -1) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
  changeGrid(); 
});

// grid
function changeGrid() {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
  });
  var $selector = $('.search div');
  $selector.animate({height: $selector.parent().height() - 42 +'px'}, 250, "linear")
}
changeGrid()

// usd
$('a.usd').click(function() {
  $this = $(this).parent();
  $('#selectedCurrency ul').prepend($this)
  // $this.remove()
  $('table.usd').show();
  $('table.uah').hide();
});

$('a.uah').click(function() {
  $this = $(this).parent();
  $('#selectedCurrency ul').prepend($this)
  $('table.uah').show();
  $('table.usd').hide();
});
$('.search-img-two').click(function () {
  $('.search input').val('');
  $('.grid li').show();
  changeGrid();
})



