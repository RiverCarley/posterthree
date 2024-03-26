$(document).ready(function(){
    $(".speaker").click(function(){
        // Check if the clicked speaker has the ID "speaker0"
        if ($(this).attr("id") === "speaker0") {
            return; // If so, do nothing and return
        }
        
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
