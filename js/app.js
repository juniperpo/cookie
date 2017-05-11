// 1. It should link the checkbox to our script.
// 2. It should test if checkbox is toggled on or off.
// 3. If checked, it should test each article
  // 4. It should only show the article that is non-dairy...
  // 5. ...and hide the rest

// var dairyCheckbox = document.querySelector('.dairyCheckbox');
//jquery

// var dairyCheckbox = $('.dairy-checkbox');
// // var articles = document.querySelectorAll('article');
// var articles = $('article');
// // console.log(articles);
//
//
// dairyCheckbox.change('change', function(){
//   if (this.checked) {
//     // console.log('yes it is checked!');
//     articles.each(function(){
//       // console.log($(this));
//
//   //  classList.contains()
//     if (!$(this).hasClass('non-dairy')){
//       $(this).fadeOut();
//     }
//     })
//     } else {
//       articles.each(function(){
//       $(this).fadeIn();
//     })
//   }
// });

var ingredientsCheckbox = $('.ingredients-checkbox');
var ingredients = $('.ingredients');
var steps = $('.stepsCheckbox');
var info = $('.infoCheckbox');


ingredients.change('change', function
  (){
    if (this.checked) {
    ingredients.fadeOut ();
  } else {
      ingredients.fadeIn();
      }
});

stepscheckbox.change('change', function
  (){
    if (this.checked) {
    ingredients.fadeOut ();
  } else {
      ingredients.fadeIn();
      }
});

info.change('change', function
  (){
    if (this.checked) {
    ingredients.fadeOut ();
  } else {
      ingredients.fadeIn();
      }
});


// dairyCheckbox.change('change', function(){
//   if (this.checked) {
//     // console.log('yes it is checked!');
//     articles.each(function(){
//       // console.log($(this));
//
//   //  classList.contains()
//     if (!$(this).hasClass('non-dairy')){
//       $(this).fadeOut();
//     }
//     })
//     } else {
//       articles.each(function(){
//       $(this).fadeIn();
//     })
//   }
// });
