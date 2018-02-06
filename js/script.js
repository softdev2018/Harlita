$('.page-scroll').on('click', function(e){
	//ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen yg dipilih
	var elemenTujuan = $(tujuan);
	// console.log($('body').scrollTop());
	// pindahkan scroll
	$('html,body').animate({
  	scrollTop: elemenTujuan.offset().top - 50
 }, 1250, 'easeInOutBack');

	e.preventDefault();
});

function initMap() {
        var loc = {lat: -7.558377, lng: 110.8569998};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: loc
        });
        var marker = new google.maps.Marker({
          position: loc,
          map: map,
          icon: {
    url: 'images/logo.png',
    scaledSize: new google.maps.Size(30, 30)
  }
        });
      };

 $(window).scroll(function() {
 	
 	var wScroll = $(this).scrollTop();

 	$('.about img').css({
 		'transform' : 'translate(0px, '+ wScroll/50 +'%)'

 	});

  $('.about p').css({
    'transform' : 'translate('+ wScroll/-30 +'% ,0px)'

  });




 //animasi tulisan profil
  if( wScroll > $('.video').offset().top -100 ) {
  
  $('.pkanan').addClass('pmuncul');
  $('.pvideo').addClass('pvideogeser');

 };


 //yoy
 if( wScroll > $('.ask').offset().top -100 ) {
  
  $('.ask .yoy').each(function(i){
    setTimeout(function(){
      $('.ask .yoy').eq(i).addClass('muncul');
    }, 200 * i);
  })

 };

  if( wScroll > $('.pow').offset().top -200 ) {
  
  $('.pow .wop').each(function(i){
    setTimeout(function(){
      $('.pow .wop').eq(i).addClass('muncull');
    }, 200 * i);
  })

 };


});
 
swal({
      title: "Thanks!",
      text: "You clicked submit",
      icon: "success"
});
// $('.yoy').addClass('muncul');