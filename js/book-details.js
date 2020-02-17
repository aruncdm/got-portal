$( document ).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

$.getJSON( 'https://anapioficeandfire.com/api/books/'+urlParams.get('id'), function( data ) {
    var items = [];
    $("title").html(data['name']);
    $(".book-title").html(data['name']);
    $(".pageno").html(data['numberOfPages']);
    $(".publisher").html(data['publisher']);
    $(".country").html(data['country']);
    $(".media").html(data['mediaType']);
    $(".released").html(data['released']);
    $(".total-char").html(data['characters'].length);
    $('#book-review').attr('data-isbn', data['isbn']);
    });
});



