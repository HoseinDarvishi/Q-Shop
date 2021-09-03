$(document).ready(function () {

   // ! Product Images Slider ...
   var secondarySlider = new Splide( '.splide-Sec', {
	   rewind : true,
	   fixedWidth  : 100,
	   fixedHeight : 64,
	   isNavigation: true,
	   gap : 4,
	   focus : "center",
      trimSpace : false,
	   pagination : false,
      arrows : false,
	   cover  : true,
	   breakpoints : {
	   	'600': {
	   		fixedWidth  : 66,
	   		fixedHeight : 40,
	   	}
	   }
   } ).mount();

   var primarySlider = new Splide( '.splide-Main', {
   	type       : 'fade',
   	heightRatio: .7,
   	pagination : false,
   	arrows     : false,
   	cover      : true,
   } );

   primarySlider.sync( secondarySlider ).mount();

   //! Tabs 
   let tabLinks = document.getElementsByClassName("tab-item");
   let tabContents = document.getElementsByClassName("tab-content");

   for(let i = 0 ; i < tabLinks.length ; i++){
      tabLinks[i].addEventListener("click" , function(event){

         for(let i = 0 ; i < tabLinks.length ; i++){
            $(tabLinks[i]).removeClass("active");
         }

         $(tabLinks[i]).addClass("active");

         for(let i = 0 ; i < tabContents.length ; i++){
            $(tabContents[i]).hide(0);
            if (tabContents[i].id === event.target.id) {
               $(tabContents[i]).fadeIn(100);
            }
         }
      })
   }


   // ! Alike Products Slider

   new Splide('#SplideAlikeProducts' , {
      "perPage":5,
      "type":"sider",
      "rewind":true,
      "direction":'rtl',
      "speed":"800",
      "perMove":"2",
      trimSpace : false,
      "gap":"3px",
      "arrows":true,
      "pagination":false
   } ).mount();
});