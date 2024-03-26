$(document).ready(function(){

    $(".speaker").click(function(){
        if ($(this).hasClass("active")) {
            $(".image-container img").click(function(event){
                // Prevent the click event from bubbling up to the parent elements
                event.stopPropagation();
            });
        
            $(this).removeClass("active");
            $(".container").removeClass("active");
        } else {
            $(".speaker").removeClass("active");
            $(this).addClass("active");
            $(".container").addClass("active");
        }
    });

    $(".close").click(function(){
        $("#imageModal").css("display", "none");
    });

    $(window).click(function(event) {
        if (event.target == $("#imageModal")[0]) {
            $("#imageModal").css("display", "none");
        }
    });
});
