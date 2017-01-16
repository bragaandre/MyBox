/**
 * Created by andresbraga on 02/01/2017.
 */


$(document).ready(function()
    {
        prepareMenu();

    });


function prepareMenu()
{
    $("#menu li").click(
      function(){ $("#menu li").each(function(){$(this).removeClass("active");});
    $(this).addClass("active"); HideFiles($(this).children().html());
    return false;
    });


    $("#menu li:first").click();
}


function HideFiles(selector){

    //show all files
    if(selector === "All Files")
    {
        $("#files > li").show();
        return true;
    }
    else
    {
        // show only the selected filetype
        $("#files>li").hide();
        $("#files>li." + selector).show();
        return true;
    }
}