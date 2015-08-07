$(document).ready(function(){
    $(function(){
        $("h2").hide()
        $("p").hide();
        $("ul").hide();
    });
    $(".btn1").click(function(){
        $("h2").show()
        $("p").show();
        $("ul").show();

    });
});