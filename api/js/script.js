
$('#selectedCurrency').find('option').ready(function(){
	$(".selected").removeClass("activeCurrency");
	$(this).addClass("activeCurrency");
});
$('.activeCurrency').ready(function(){

	var currency = $(this).attr("currency"); 
	// $('th[data-currency]').hide(); 
	$('th[data-currency='+ currency + ']').fadeToggle('2000ms', 'linear'); 

});
