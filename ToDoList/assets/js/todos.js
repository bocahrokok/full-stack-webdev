
// check off specific todos

$("li").click(function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo

$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        
    })
})