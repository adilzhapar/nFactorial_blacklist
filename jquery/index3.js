$(document).ready(function() {
    // let creatures = $('#animals').find('.creature');
    // console.log(creatures[0]);


    // [0, 1, 2, 3,4, 5].filter( i => {
    //     console.log(creatures[i]);
    // });

    // creatures.each(function( index ){
    //     $(this).hasClass('category');
    // })

    // let creaturesCategories = $('.creature .category').children();
    // console.log(creaturesCategories);

    // let cats = $('.creature.category').children().children().first().next();
    // console.log(cats);

    let mammal = $(':contains(Cats)').last().parent();
    console.log(mammal);
});