$(document).ready(function () {
      // hide and showing the search section in Shop Page
      $("#SearchHider").click(function (e) { 
         let form = document.getElementById("ShopSearchForm");
         $(form).toggleClass("hidden");
      });
});