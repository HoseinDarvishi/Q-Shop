$(document).ready(function () {

   // Slider Top (Ads)
   new Splide( '#splideTop', {
      "direction": 'rtl',
      "height":"400px",
      "speed":"1000",
      "type":"loop",
      "perMove":"1",
      "gap":"10px",
      "autoplay":"true",
      "interval":"3000",
      "pauseOnHover":"true",
      "arrows":false
   } ).mount();


  //Slider BestSelling Products
   new Splide('#splideBestSelling' , {
      "perPage":4,
      "type":"loop",
      "rewind":true,
      "direction":'rtl',
      "speed":"800",
      "perMove":"2",
      "gap":"3px",
      "arrows":true,
      "pagination":false
   } ).mount();
});

