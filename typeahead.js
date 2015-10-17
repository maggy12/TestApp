$(function() {
    var availableTags = [
      "How to make a responsive application?",
      "How to implement a servlet?",
      "What is an MVC pattern ?",
      "What does data binding mean ?",
      "How to use bootstrap ? ",
      "How to use JQuery ?",
      "How to use Backbone.js ?"
      
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });