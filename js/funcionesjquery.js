
$(document).ready(function () {
    $("#txt1").focus(function () { 
        //e.preventDefault();
        $("#txt1").attr('style','color:red');
    });

    $("#txt1").blur(function () { 
        //e.preventDefault();
        $("#txt1").attr('style','color:black');
    }); 


    $("#txt2").focus(function () { 
        //e.preventDefault();
        $("#txt2").attr('style','color:blue');
    });

    $("#txt2").blur(function () { 
        //e.preventDefault();
        $("#txt2").attr('style','color:black');
    }); 




});
