
	$(document).ready(function(){
		$('.carousel').carousel(
			{
				"pause":"false",
				"interval":10000
			}
		);
		
		$('.carousel').on('slide.bs.carousel', function (event) {
			var tag = $(event.relatedTarget).attr("tag");
			var progress = $(event.relatedTarget).attr("progress");
			
			$("#progress").animate({width: progress, left: (progress/150)+150}, 500);
			playAnimation(tag);
		});
		
		$("body,html").animate({
		   scrollTop:($("#page_home .splash-container").offset().top)
		},10);
		
		playAnimation("home");
		
	}); 
	
	function switchPage(pageIndex){
		$('.carousel').carousel(pageIndex);
	}
	
	function playAnimation(tag){
		var ani1 = $("#page_" + tag + " .ani_step_1");
		var ani2 = $("#page_" + tag + " .ani_step_2");
		var ani3 = $("#page_" + tag + " .ani_step_3");
		var pre_start = ((tag == "home") ? 0 : 300);
		if(ani1 != null){
			ani1.css("opacity", 0);
			setTimeout(function(){
				ani1.animate({opacity: 1}, 1000);
			}, 10 + pre_start);
		}
		if(ani2 != null){
			ani2.css("opacity", 0);
			setTimeout(function(){
				ani2.animate({opacity: 1}, 1000);
			}, 1500 + pre_start);
		}
		if(ani3 != null){
			ani3.css("opacity", 0);
			setTimeout(function(){
				$("#page_" + tag + " .ani_step_3").animate({opacity: 1}, 1000);
			}, 3000 + pre_start);
		}
	}
