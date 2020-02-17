$( document ).ready(function() {
$.getJSON( "https://anapioficeandfire.com/api/books", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
            tr = $('<tr/>');
    tr.append("<td id='" + key + "'>" + val.url.substr(-1) + "</td>");
            tr.append("<td id='" + key + "'><a href='./got-book-details.html?url="+val.url+"'>" + val.name + "</a></td>");
            tr.append("<td id='" + key + "'>" + val.characters.length + "</td>");
            tr.append("<td id='" + key + "'>" + val.numberOfPages + "</td>");
            $('tbody').append(tr);
  }); 
 
  }); 



});


