/*global $*/

$(function($){
    
    var plusSize = 0;
    
    $("body").on("click",function(e){
        $("body").append($("<div class='box Q-Comment animated fadeInDown' ><i class='fa fa-window-close' aria-hidden='true'></i><i class='fa fa-eye-slash fa-2x element' aria-hidden='true'></i><form class='element'><span><textarea rows=1 cols=28 style='font-family:メイリオ'>Q-Comment</textarea><i class='fa fa-paper-plane-o fa-2x fa-fw' aria-hidden='true'></i></span></form><span class='element'><i class='fa fa-smile-o fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-exclamation fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-question fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-heart fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-plus-square fa-2x fa-fw' aria-hidden='true'></i></span></div>"));
        $(".box").draggable();
        $(".box:last").css({
            position:"absolute",
            top:e.pageY,
            left:e.pageX
        });
        
        var timeStamp = $.now();
        $("textarea:last").attr("id",timeStamp);
     
    });
    
    $("body").on("click",".box",function(e) {
        e.stopPropagation();
        var size = $('.box').length;
        $(this).zIndex(size + plusSize);
        plusSize = plusSize + 1;
    });
    
    $("body").on("click",".fa-plus-square",function(e){
        $(this).parent().parent().children(":last").after($("<div class='box A-Comment animated fadeInDown'><i class='fa fa-window-close' aria-hidden='true'></i><i class='fa fa-eye-slash fa-2x element' aria-hidden='true'></i><form class='element'><span><textarea rows=3 cols=28 style='font-family:メイリオ'>A-Comment</textarea><i class='fa fa-paper-plane-o fa-2x fa-fw' aria-hidden='true'></i></span></form><span class='element'><i class='fa fa-smile-o fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-exclamation fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-question fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-heart fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-plus-square-o fa-2x fa-fw' aria-hidden='true'></i></span></div>"));
        $(".box").draggable();
        
        var timeStamp = $.now();
        $("textarea:last").attr("id",timeStamp);
    });
    
    $("body").on("click",".fa-plus-square-o",function(e){
        $(this).parent().parent().children(":last").after($("<div class='box Q-Comment animated fadeInDown'><i class='fa fa-window-close' aria-hidden='true'></i><i class='fa fa-eye-slash fa-2x element' aria-hidden='true'></i><form class='element'><span><textarea rows=1 cols=28 style='font-family:メイリオ'>Q-Comment</textarea><i class='fa fa-paper-plane-o fa-2x fa-fw' aria-hidden='true'></i></span></form><span class='element'><i class='fa fa-smile-o fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-exclamation fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-question fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-heart fa-2x fa-fw' aria-hidden='true'></i><i class='fa fa-plus-square fa-2x fa-fw' aria-hidden='true'></i></span></div>"));
        $(".box").draggable();
        
        var timeStamp = $.now();
        $("textarea:last").attr("id",timeStamp);
    });
    
    $("body").on("click",".fa-paper-plane-o",function(e){
        $(this).parent().children(":first").addClass('magictime spaceOutUp').delay(1000).queue(function(){
            $(this).parent().children(":first").removeClass('magictime spaceOutUp');
        });
         var id =       $(this).parent().children(":first").attr("id");
         var textarea = $(this).parent().children(":first").val();
         $.ajax({
           url:"create",
           type:"POST",
           dataType:"json",
           data:{
               authenticity_token: $("#authenticity_token").val(),
               post_data:$(this).parent().children(":first").val()
           }
         });
    });
    
    $("body").on("click",".fa-window-close",function(e){
        $(this).parent().children(".element").remove();
        $(this).unwrap();
        $(this).remove();
    });
    
    $("body").on("click",".fa-eye-slash",function(e){
        e.stopPropagation();
        $(this).removeClass("fa-eye-slash").addClass("fa-eye");
        $(this).parent().children(".box").removeClass("fadeInDown").addClass("fadeOutUp").delay(1000).queue(function(){
            $(this).parent().children(".box").hide().dequeue();
        });
        
    });
    
    $("body").on("click",".fa-eye",function(e){
        e.stopPropagation();
        $(this).removeClass("fa-eye").addClass("fa-eye-slash");
        $(this).parent().children(".box").show().removeClass("fadeOutUp").addClass("fadeInDown");
    });
});