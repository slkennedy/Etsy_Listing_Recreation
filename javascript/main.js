items.results.forEach(function(details){

// JAKE - I couldn't get this to work.. can you take a look?
// var sym = symbols.filter(function(dolla){
// return dolla.code == items.currency_code;
// }.forEach(function(bills){symbol = bills.short;});

  $(".main-wrapper").append("<div class='item-wrapper'><a href='"+details.url+"'><img class='image' src='"+details.Images[0].url_170x135+"'/></a><div class='words'><p class='title'><a href='"+details.url+"'>"+details.title+"</a></p><p class='shop'><a href='"+details.Shop.url+"'>"+details.Shop.shop_name+"</a><p class='price'>"+details.price+details.currency_code+"</p></div></div>");

});
