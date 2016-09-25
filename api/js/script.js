
$('#selectedCurrency').find('option').ready(function(){
  $(".selected").removeClass("activeCurrency");
  $(this).addClass("activeCurrency");
});
$('.activeCurrency').ready(function(){

  var currency = $(this).attr("currency"); 
  // $('th[data-currency]').hide(); 
  $('th[data-currency='+ currency + ']').fadeToggle('2000ms', 'linear'); 

});

//slider
// $('.main-slider').slick({
//   rtl: true
// });

// for google map
function initMap() {
  var uluru = {lat: 50.483036, lng: 30.377481};
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
