var $pins = $('#pins').masonry({
    itemSelector: '.pin',
    columnWidth: 214,
    gutterWidth: 20
});

$pins.imagesLoaded().progress( function() {
    $pins.masonry();
});
