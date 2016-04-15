
$



$(window).load(function(){


    /****** UTILS ******/

    function form_input_is_numeric(input){
        return !isNaN(input);
    }









    $("#catwebformform99019 div[name='submitForm']").click(function() {


        if(!form_input_is_numeric($("#HomeZip").val())){
            alert('isNAN');
            return false;
        }
        if($("#HomeZip").val()==null){
            alert('isNULL');
            return false;
        }
        if($("#HomeZip").val()==""){
            alert('isEMPTY');
            return false;
        }

        if($("#HomeZip").val().length>4){
            alert('is>4');
            return false;
        }


        var get_delivery_info_action = 'http://www.eatfitfood.com.au/Default.aspx?CCID=7120&FID=57930&ExcludeBoolFalse=True&PageID=7466588&json=true';
        var data = { CAT_Custom_158781_Max: $("#HomeZip").val(),
                     CAT_Custom_158781_Min: $("#HomeZip").val() };



        /* $.post( get_delivery_info_action,
            {
                CAT_Custom_158781_Max: $("#HomeZip").val(),
                CAT_Custom_158781_Min: $("#HomeZip").val()
            },
            function( data ) {
                var poscodeResults = data.webappsresults_20.items;
                console.log( poscodeResults.length );
            }); */






        $.ajax({
            type: "POST",
            //dataType : "json",
            url: get_delivery_info_action,
            contentType: 'application/json',
            crossDomain: true,
            data : JSON.stringify(data),
            success : function(result) {
                var poscodeResults = result.webappsresults_20.items;
                console.log( poscodeResults.length ); // result is an object which is created from the returned JSON
            },
        });





        /*

        $.post(get_delivery_info_action, {
            CAT_Custom_158781_Max: $("#HomeZip").val(),
            CAT_Custom_158781_Min: $("#HomeZip").val()
        }, function (data) {

            console.log(data);

            var poscodeResults = data.webappsresults_20.items;

            console.log('ok');


            if(poscodeResults){
                console.log('ok1');
                if(poscodeResults.length>0){
                    console.log('ok2');
                    var result = poscodeResults[0];
                    var run = result.Run;

                    if(run){
                        run = run.trim();
                        if(run=='DO NOT DELIVER'){
                            console.log('DO NOT DELIVER');
                            return false;
                        }else{
                            var suburb_string = result.description;
                            var suburbs = suburb_string.split(',');
                            var element_div_to_be_overwritten = $("#CAT_Custom_159597").parent();
                            if (suburbs.length > 1) {
                                var suburbSlect = "<select class=\"cat_dropdown\" id=\"CAT_Custom_159597\" name=\"CAT_Custom_159597\">";
                                for (i in suburbs)
                                    suburbSlect += "<option value=\"" + suburbs[i] + "\">" + suburbs[i] + "</option>";
                                suburbSlect += "</select>";
                                element_div_to_be_overwritten.html(suburbSlect);
                            }else{
                                var suburbInput =  "<input type=\"text\" id=\"CAT_Custom_159597\" "
                                suburbInput += "class=\"cat_textbox\" name=\"CAT_Custom_159597\" value=\"" + suburb_string + "\" readonly=\"true\"/>";
                                element_div_to_be_overwritten.html(suburbInput);
                            }

                            var city = result.City;
                            $("#HomeCity").val(city);

                            if(city=="Melbourne"){
                                $("#HomeState").val("VIC");
                            }else{
                                $("#HomeState").val("NSW");
                            }
                        }
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }); */



        //$("form#catwebformform99019").submit();

    });

});