/* Author:

*/


//FitText
$("h1").fitText(1, { minFontSize: '30px', maxFontSize: '60px' });
$("h3").fitText(2.5, { minFontSize: '12px', maxFontSize: '23px' });

//FitVids
$(document).ready(function(){
    $("#fitvid, #fitvid2").fitVids();
  });


//Flexslider
$(window).load(function() {
		$('.flexslider').flexslider();
	});

