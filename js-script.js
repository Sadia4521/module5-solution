(function (window) {
  var dc = {};

  // URLs
  var homeHtmlUrl = "home-snippet.html";
  var allCategoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";

  // Utility functions (already in starter code)
  var insertHtml = function (selector, html) {
    document.querySelector(selector).innerHTML = html;
  };

  var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    return string.replace(propToReplace, propValue);
  };

  // Load home page with dynamic Specials tile
  dc.loadHomePage = function () {
    $ajaxUtils.sendGetRequest(
      allCategoriesUrl,
      function (categories) {
        var randomCategory = chooseRandomCategory(categories);
        $ajaxUtils.sendGetRequest(
          homeHtmlUrl,
          function (homeHtml) {
            var finalHtml = insertProperty(
              homeHtml,
              "randomCategoryShortName",
              "'" + randomCategory.short_name + "'"
            );
            insertHtml("#main-content", finalHtml);
          },
          false
        );
      },
      true
    );
  };

  // Random category chooser
  function chooseRandomCategory(categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  // Load full menu categories (existing function)
  dc.loadMenuCategories = function () {
    // existing code in starter...
  };

  // Load menu items of selected category
  dc.loadMenuItems = function (categoryShort) {
    // existing code in starter...
  };

  window.$dc = dc;
})(window);

// On page load, show home
document.addEventListener("DOMContentLoaded", function (event) {
  $dc.loadHomePage();
});
