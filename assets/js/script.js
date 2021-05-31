$(function() {
    $(".title").click(function(){
        $(".card-text").toggle();
        });
    
        $("a").click(function(event) {
            if (this.hash !== "") {
                var gato = this.hash;
                $('html, body').animate({
                    scrollTo: $(gato).offset().top
                    }, 800, function(){
                        window.location.hash = gato;
                    });
            } 
        });
        
});
