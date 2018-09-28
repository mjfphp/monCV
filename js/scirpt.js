$(document).ready( function() {

    // Logo
    $(".canvas").hide();
	var $logo = $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});	
    function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
   
 

animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 2500,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#resume'){
                    animMeter();
            }
        });

     $(".tooltip").hover(function () {
            var titleText=$(this).attr("title");
            $(this).after("<div class='tb'>" +$(this).attr("data-info")+ "</div>");
            }, function () {
            $(".tb").remove();
      })

      $("#plang").click(function(event){
        event.preventDefault();
        console.log($(this).text())
        if($(this).text()=="histogramme"){
            $(this).text("rating");
            $(".stars").hide();
            $(".canvas").show("slow");
        }
        else{
            $(this).text("histogramme");
            $(".canvas").hide();
            $(".stars").show("slow");
        }
    })
   
    });

