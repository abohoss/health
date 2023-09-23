$(document).ready(function(){
    $("#btn1").click(function(){
        var w=$("#w").val;
        var h=$("#h").val;
        var res=(w/(h*h))*10000;
        console.log(res)
        if(res>25){
            $("#result").html="over weight"
        }
        else if(res<18.5){
            $("#result").html="under weight"
        }
        else{
            $("#result").html="normal weight"
        }
    
    });
    $("#j").fadeIn(3000);
    $(window).scroll(function(){
        $("#products").fadeIn(3000);
    });
  });
