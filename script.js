var images = [
    'https://images-na.ssl-images-amazon.com/images/I/81E0xQOSooL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81E0xQOSooL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71s+XcNfNbL.jpg'
    
];


$(".add").click(function(){
    var newbook = 
        $(".newbook").val();
   
    
    var link = $(".images").val();
        images.push("link");
    
       console.log(newbook);
    
     $(".images").empty();
      
    $("body").append("<img src=" + newbook + ">");
    
    console.log (newbook);
    $(".newbook").val("");

});
    
    images.forEach(function(a,b){
    
$(".images").append("<img src" + images [b] + ">");
    
});

    
    
  




