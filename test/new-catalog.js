/**
 * Created by lucasnascimento on 23/05/2016.
 */
var DSTindicator="";
var firstWeek;
var secondWeek;
var arrayDay;

function activeMenu(){
    this.week= 0;
    this.program = "";
    this.season = "";
}

function captureActiveMenu(CatalogProgram){
    var temp;
    var currentTempSeason;
    var currentTempProgram;
    var currentTempWeek;
    var menuActive =  new Array();
    var indicator=0;
    jQuery("ul.catalogueitemdump li").each(function(index){
        temp = jQuery(this).text();
        temp = temp.split("-");
        currentTempProgram = temp[0]+" "+temp[1];
        currentTempSeason = temp[2];
        currentTempWeek = temp[3];
        if(currentTempProgram==CatalogProgram){
            menuActive[indicator] = new activeMenu();
            menuActive[indicator].program= currentTempProgram;
            menuActive[indicator].season= currentTempSeason;
            currentTempWeek = parseInt(currentTempWeek.substring(4,5));
            menuActive[indicator].week= currentTempWeek;
            indicator++;
        }
    });


    if(menuActive[0].season == menuActive[1].season){
        if(menuActive[0].week > menuActive[1].week){
            firstWeek = menuActive[0];
            secondWeek = menuActive[1];
        }
        else
        {
            firstWeek = menuActive[1];
            secondWeek = menuActive[0];
        }
    }

    else if(menuActive[0].season != menuActive[1].season){
        if(menuActive[0].week < menuActive[1].week){
            firstWeek = menuActive[1];
            secondWeek = menuActive[0];
        }
        else
        {
            firstWeek = menuActive[0];
            secondWeek = menuActive[1];
        }
    }

}





function manageHtml()
{
    var htmlType = jQuery("div#description").attr("class");
    if(htmlType=="Weight-Loss-Holder")
    {
        jQuery("div#description .Cleanse").html("");
        jQuery("div#description .Healthy-Eating").html("");
        jQuery("div#description .Detox").html("");
        jQuery("div#description .Xcelerator").html("");
        jQuery("div#description .FiveMeal-HealthyEating").html("");
        jQuery("div#description .TenMeal-HealthyEating").html("");
        jQuery("div#description .Christmas-Pack").html("");
    }
    else if(htmlType=="Healthy-Eating-Holder")
    {
        jQuery("div#description .Cleanse").html("");
        jQuery("div#description .Weight-Loss").html("");
        jQuery("div#description .Detox").html("");
        jQuery("div#description .Xcelerator").html("");
        jQuery("div#description .FiveMeal-HealthyEating").html("");
        jQuery("div#description .TenMeal-HealthyEating").html("");
        jQuery("div#description .Christmas-Pack").html("");
    }
    else if(htmlType=="Cleanse-Holder")
    {
        jQuery("div#description .Weight-Loss").html("");
        jQuery("div#description .Healthy-Eating").html("");
        jQuery("div#description .Detox").html("");
        jQuery("div#description .Xcelerator").html("");
        jQuery("div#description .FiveMeal-HealthyEating").html("");
        jQuery("div#description .TenMeal-HealthyEating").html("");
        jQuery("div#description .Christmas-Pack").html("");
    }
    else if(htmlType=="Detox-Holder")
    {
        jQuery("div#description .Cleanse").html("");
        jQuery("div#description .Healthy-Eating").html("");
        jQuery("div#description .Weight-Loss").html("");
        jQuery("div#description .Xcelerator").html("");
        jQuery("div#description .FiveMeal-HealthyEating").html("");
        jQuery("div#description .TenMeal-HealthyEating").html("");
        jQuery("div#description .Christmas-Pack").html("");
    }
    else if(htmlType=="Xcelerator-Holder")
    {
        jQuery("div#description .Cleanse").html("");
        jQuery("div#description .Healthy-Eating").html("");
        jQuery("div#description .Weight-Loss").html("");
        jQuery("div#description .Detox").html("");
        jQuery("div#description .FiveMeal-HealthyEating").html("");
        jQuery("div#description .TenMeal-HealthyEating").html("");
        jQuery("div#description .Christmas-Pack").html("");
    }
    else if(htmlType=="FiveMeal-HealthyEating-Holder")
    {
        jQuery("div#description .Cleanse").html("");
        jQuery("div#description .Healthy-Eating").html("");
        jQuery("div#description .Weight-Loss").html("");
        jQuery("div#description .Detox").html("");
        jQuery("div#description .Xcelerator").html("");
        jQuery("div#description .TenMeal-HealthyEating").html("");
        jQuery("div#description .Christmas-Pack").html("");
    }
    else if(htmlType=="TenMeal-HealthyEating-Holder")
    {
        jQuery("div#description .Cleanse").html("");
        jQuery("div#description .Healthy-Eating").html("");
        jQuery("div#description .Weight-Loss").html("");
        jQuery("div#description .Detox").html("");
        jQuery("div#description .Xcelerator").html("");
        jQuery("div#description .FiveMeal-HealthyEating").html("");
        jQuery("div#description .Christmas-Pack").html("");
    }
    else if(htmlType=="Christmas-Pack-Holder")
    {
        jQuery("div#description .Cleanse").html("");
        jQuery("div#description .Healthy-Eating").html("");
        jQuery("div#description .Weight-Loss").html("");
        jQuery("div#description .Detox").html("");
        jQuery("div#description .Xcelerator").html("");
        jQuery("div#description .FiveMeal-HealthyEating").html("");
        jQuery("div#description .TenMeal-HealthyEating").html("");

        // CSS Change to show Catalog
        // CSS Change to show Catalog
        // CSS Change to show Catalog
        // jQuery("#hidden-catalog").css({"display":"inherit"}); // inherit = testing (show data), none = LIVE to hide data
        jQuery("table.catalogueTable").css({"display":"none"});
        jQuery("span.date").css({"display":"none"});
        jQuery("div.breadcrumbs span#info-tag")
            .append("<p>Please make your meal selections by adding meals to your cart. You can adjust your order by viewing your cart before checking out.</p>")
            .css({"display":"inherit"});
        jQuery("div.shop-main .header").css({"padding-bottom":"0"});

        var meal1 = jQuery("tr:contains(xmas-meal1)").html();
        var meal2 = jQuery("tr:contains(xmas-meal2)").html();
        var meal3 = jQuery("tr:contains(xmas-meal3)").html();
        var salad1 = jQuery("tr:contains(xmas-salad1)").html();
        var salad2 = jQuery("tr:contains(xmas-salad2)").html();
        var salad3 = jQuery("tr:contains(xmas-salad3)").html();
        var salad4 = jQuery("tr:contains(xmas-salad4)").html();
        var salad5 = jQuery("tr:contains(xmas-salad5)").html();
        var salad6 = jQuery("tr:contains(xmas-salad6)").html();
        var dessert1 = jQuery("tr:contains(xmas-dessert1)").html();



        // Update details from "hideCatalog" to Christmas-Pack-Holder after all css has been updated in previous step!
        jQuery("div.Christmas-Pack-Holder").html("<img src='/img/christmas-pack/Xmas-DinnerPack.jpg' style='margin-bottom: 30px;'><table class='productTable productSmall'><tr><th colspan='2'><h1>Meat + Seafood</h1><span>Available Until Tuesday 16 December 2014 at 23:59 pm.  Delivered on 24 December 2014.</span></th></tr><tr>" + meal1 + meal2 + "</tr>" + "<tr>" + meal3 + "</tr><tr><th colspan='2'><h1>Sides + Salads</h1><span>Available Until Tuesday 16 December 2014 at 23:59 pm.  Delivered on 24 December 2014.</span></th></tr><tr>"+ salad1 + salad2 +"</tr><tr>" + salad3 + salad4 + "</tr><tr>" + salad5 + salad6 + "</tr><tr><th colspan='2'><h1>Dessert</h1><span>Available Until Tuesday 16 December 2014 at 23:59 pm.  Delivered on 24 December 2014.</span></th></tr><tr>" + dessert1 + "</tr>" );

        sessionStorage.currentProgram1 = "Christmas Pack";



    }
}


function changeValue(){
    jQuery("input.productSubmitInput").each(function(){
        jQuery("input.productTextInput").addClass('form-control span1');
        jQuery("input.productSubmitInput").val("ADD");
        jQuery("input.productSubmitInput").addClass('eff_button');
    });
}

function getSelectedMenu(CatalogProgram){
    var selectedDate = jQuery("input#actualdate").val();

    var selectedDay;
    var selectedMonth;
    var selectedyear;
    var startDate;
    var endDate;
    if(selectedDate){

        selectedDate =  selectedDate.split("/");
        selectedDay = parseFloat(selectedDate[0]);
        selectedMonth = parseFloat(selectedDate[1]);
        selectedyear = parseFloat(selectedDate[2]);

        startDate = new Date(selectedyear,selectedMonth-1,selectedDay);


        //endDate =  new Date(selectedyear,selectedMonth-1,selectedDay+4);




        if(CatalogProgram=="5Day Cleanse")
        {


            if(startDate.getDay()==1)
            {

                jQuery("div.table-menu").hide();
                jQuery("div.table-menu2").hide();
                jQuery("div#monday-menu").show();
                jQuery("div#tuesday-menu").show();
                jQuery("div#wednesday-menu").show();
                jQuery("div#thursday-menu").show();
                jQuery("div#friday-menu").show();

            }

            if(startDate.getDay()==3)
            {

                jQuery("div.table-menu").hide();
                jQuery("div.table-menu2").hide();
                jQuery("div#wednesday-menu").show();
                jQuery("div#thursday-menu").show();
                jQuery("div#friday-menu").show();
                jQuery("div#saturday-menu").show();
                jQuery("div#sunday-menu").show();

            }

            if(startDate.getDay()==5)
            {
                jQuery("div.table-menu").hide();
                jQuery("div.table-menu2").hide();
                jQuery("div#friday-menu").show();
                jQuery("div#saturday-menu").show();
                jQuery("div#sunday-menu").show();
                jQuery("div#monday-w2-menu").show();
                jQuery("div#tuesday-w2-menu").show();

            }
        }
        else if(CatalogProgram=="10Day Detox")
        {

            if(startDate.getDay()==1)
            {
                jQuery("div.table-menu").hide();
                jQuery("div.table-menu2").hide();
                jQuery("div#monday-menu").show();
                jQuery("div#tuesday-menu").show();
                jQuery("div#wednesday-menu").show();
                jQuery("div#thursday-menu").show();
                jQuery("div#friday-menu").show();
                jQuery("div#saturday-menu").show();
                jQuery("div#sunday-menu").show();
                jQuery("div#monday-w2-menu").show();
                jQuery("div#tuesday-w2-menu").show();
                jQuery("div#wednesday-w2-menu").show();

            }

            if(startDate.getDay()==3)
            {
                jQuery("div.table-menu").hide();
                jQuery("div.table-menu2").hide();
                jQuery("div#wednesday-menu").show();
                jQuery("div#thursday-menu").show();
                jQuery("div#friday-menu").show();
                jQuery("div#saturday-menu").show();
                jQuery("div#sunday-menu").show();
                jQuery("div#monday-w2-menu").show();
                jQuery("div#tuesday-w2-menu").show();
                jQuery("div#wednesday-w2-menu").show();
                jQuery("div#thursday-w2-menu").show();
                jQuery("div#friday-w2-menu").show();

            }

            if(startDate.getDay()==5)
            {
                jQuery("div.table-menu").hide();
                jQuery("div.table-menu2").hide();
                jQuery("div#friday-menu").show();
                jQuery("div#saturday-menu").show();
                jQuery("div#sunday-menu").show();
                jQuery("div#monday-w2-menu").show();
                jQuery("div#tuesday-w2-menu").show();
                jQuery("div#wednesday-w2-menu").show();
                jQuery("div#thursday-w2-menu").show();
                jQuery("div#friday-w2-menu").show();
                jQuery("div#saturday-w2-menu").show();
                jQuery("div#sunday-w2-menu").show();
            }
        }

    }
    else
    {

        jQuery("#warning-date").dialog();
    }

}

function WeekleMenuInfo(string){

    var info = string;
    info=info.split("-");
    this.program=info[0]+" "+info[1];
    this.season=info[2];
    this.week=info[3];
    this.link="/"+info[0]+"-"+info[1]+"-"+info[2]+"-"+info[3];
    this.period;
}

function addDateEachDayMenu(upsell){
    var currentMenu = jQuery("div.header div.breadcrumbs span#info-tag a").text();
    currentMenu= currentMenu.split("-");

    var currentMenuProgram = currentMenu[0]+" "+currentMenu[1];
    var currentMenuSeason = currentMenu[2];
    var currentMenuWeek = currentMenu[3];

    var currentMenuPeriod = currentMenu[4];

    var activeMenu =  getActiveMenu();

    var thisWeekMenu = activeMenu[0];
    var nextWeekMenu = activeMenu[1];


    //nextweek button

    jQuery(".nextweekbut_catalog a").attr("href",nextWeekMenu.link);
    jQuery("span.nextbut_catalog a").attr("href",nextWeekMenu.link);



    var month=new Array(12);
    month[0]="January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";

    var currentTime = new calcTime();


    //identify DST
    var rightNow = new Date();
    var jan1 = new Date(rightNow.getFullYear(), 0, 1, 0, 0, 0, 0);
    var temp = jan1.toGMTString();
    var jan2 = new Date(temp.substring(0, temp.lastIndexOf(" ")-1));
    var std_time_offset = (jan1 - jan2) / (1000 * 60 * 60);
    var june1 = new Date(currentTime.getFullYear(), 6, 1, 0, 0, 0, 0);
    temp = june1.toGMTString();
    var june2 = new Date(temp.substring(0, temp.lastIndexOf(" ")-1));
    var daylight_time_offset = (june1 - june2) / (1000 * 60 * 60);
    var dst;
    if (std_time_offset == daylight_time_offset) {
        dst = "0"; // daylight savings time is NOT observed
    } else {
        dst = "1"; // daylight savings time is observed
    }

    if(dst==0){
        currentTime.setHours(currentTime.getHours()+1);
    }
    //-----------------------------------------------------------


    Date.prototype.stdTimezoneOffset = function() {
        var jan = new Date(this.getFullYear(), 0, 1);
        var jul = new Date(this.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    }

    Date.prototype.dayLightSaving = function() {
        return this.getTimezoneOffset() < this.stdTimezoneOffset();
    }

    if (currentTime.dayLightSaving()) {
        currentTime.setHours(currentTime.getHours()+1);
    }



    var cutOffTimeMonday="";
    var	cutOffTimeTuesday="";
    var	cutOffTimeWednesday="";
    var	cutOffTimeThursday="";
    var	cutOffTimeFriday="";
    var	cutOffTimeSaturday="";
    var	cutOffTimeSunday="";

    var MondayTime="";
    var TuesdayTime="";
    var WednesdayTime="";
    var ThursdayTime ="";
    var FridayTime="";
    var SaturdayTime="";
    var SundayTime="";
    var mondayw2Time="";
    var tuesdayw2Time="";
    var wednesdayw2Time="";
    var thursdayw2Time ="";
    var fridayw2Time = "";
    var saturdayw2Time = "";
    var sundayw2Time = "";


    if((currentMenuProgram.toString()==thisWeekMenu.program.toString()) && (currentMenuSeason.toString()==thisWeekMenu.season.toString()) && (jQuery.trim(currentMenuWeek.toString())==jQuery.trim(thisWeekMenu.week.toString()))){

        jQuery("div.nextweekbut_catalog").show();

        if(currentTime.getDay()==0 && currentTime.getUTCDay()==6){
            MondayTime = new Date();
            MondayTime.setDate(currentTime.getDate()+ (0-currentTime.getUTCDay()));

            TuesdayTime = new Date();
            TuesdayTime.setDate(currentTime.getDate()+ (1-currentTime.getUTCDay()));

            WednesdayTime = new Date();
            WednesdayTime.setDate(currentTime.getDate()+ (2-currentTime.getUTCDay()));

            ThursdayTime = new Date();
            ThursdayTime.setDate(currentTime.getDate()+ (3-currentTime.getUTCDay()));

            FridayTime = new Date();
            FridayTime.setDate(currentTime.getDate()+ (4-currentTime.getUTCDay()));

            SaturdayTime = new Date();
            SaturdayTime.setDate(currentTime.getDate()+ (5-currentTime.getUTCDay()));

            SundayTime = new Date();
            SundayTime.setDate(currentTime.getDate()+ (6-currentTime.getUTCDay()));

            mondayw2Time = new Date();
            mondayw2Time.setDate(currentTime.getDate()+ (7-currentTime.getUTCDay()));

            tuesdayw2Time = new Date();
            tuesdayw2Time.setDate(currentTime.getDate()+ (8-currentTime.getUTCDay()));

            wednesdayw2Time = new Date();
            wednesdayw2Time.setDate(currentTime.getDate()+ (9-currentTime.getUTCDay()));

            thursdayw2Time = new Date();
            thursdayw2Time.setDate(currentTime.getDate()+ (10-currentTime.getUTCDay()));

            fridayw2Time = new Date();
            fridayw2Time.setDate(currentTime.getDate()+ (11-currentTime.getUTCDay()));

            saturdayw2Time = new Date();
            saturdayw2Time.setDate(currentTime.getDate()+ (12-currentTime.getUTCDay()));

            sundayw2Time = new Date();
            sundayw2Time.setDate(currentTime.getDate()+ (13-currentTime.getUTCDay()));
        }
        else if(currentTime.getDay()==0 && currentTime.getUTCDay()==0){
            MondayTime = new Date();
            MondayTime.setDate(currentTime.getDate()+ (1-currentTime.getUTCDay())-7);

            TuesdayTime = new Date();
            TuesdayTime.setDate(currentTime.getDate()+ (2-currentTime.getUTCDay())-7);


            WednesdayTime = new Date();
            WednesdayTime.setDate(currentTime.getDate()+ (3-currentTime.getUTCDay()-7));

            ThursdayTime = new Date();
            ThursdayTime.setDate(currentTime.getDate()+ (4-currentTime.getUTCDay())-7);

            FridayTime = new Date();
            FridayTime.setDate(currentTime.getDate()+ (5-currentTime.getUTCDay())-7);

            SaturdayTime = new Date();
            SaturdayTime.setDate(currentTime.getDate()+ (6-currentTime.getUTCDay()-7));

            SundayTime = new Date();
            SundayTime.setDate(currentTime.getDate()+ (7-currentTime.getUTCDay()-7));

            mondayw2Time = new Date();
            mondayw2Time.setDate(currentTime.getDate()+ (8-currentTime.getUTCDay()-7));

            tuesdayw2Time = new Date();
            tuesdayw2Time.setDate(currentTime.getDate()+ (9-currentTime.getUTCDay()-7));

            wednesdayw2Time = new Date();
            wednesdayw2Time.setDate(currentTime.getDate()+ (10-currentTime.getUTCDay()-7));

            thursdayw2Time = new Date();
            thursdayw2Time.setDate(currentTime.getDate()+ (11-currentTime.getUTCDay()-7));

            fridayw2Time = new Date();
            fridayw2Time.setDate(currentTime.getDate()+ (12-currentTime.getUTCDay()-7));

            saturdayw2Time = new Date();
            saturdayw2Time.setDate(currentTime.getDate()+ (13-currentTime.getUTCDay()-7));

            sundayw2Time = new Date();
            sundayw2Time.setDate(currentTime.getDate()+ (14-currentTime.getUTCDay()-7));
        }
        else{
            if(currentTime.getUTCDay()==currentTime.getDay()){
                MondayTime = new Date();
                MondayTime.setDate(currentTime.getDate()+ (1-currentTime.getUTCDay()));

                TuesdayTime = new Date();
                TuesdayTime.setDate(currentTime.getDate()+ (2-currentTime.getUTCDay()));


                WednesdayTime = new Date();
                WednesdayTime.setDate(currentTime.getDate()+ (3-currentTime.getUTCDay()));

                ThursdayTime = new Date();
                ThursdayTime.setDate(currentTime.getDate()+ (4-currentTime.getUTCDay()));

                FridayTime = new Date();
                FridayTime.setDate(currentTime.getDate()+ (5-currentTime.getUTCDay()));

                SaturdayTime = new Date();
                SaturdayTime.setDate(currentTime.getDate()+ (6-currentTime.getUTCDay()));

                SundayTime = new Date();
                SundayTime.setDate(currentTime.getDate()+ (7-currentTime.getUTCDay()));

                mondayw2Time = new Date();
                mondayw2Time.setDate(currentTime.getDate()+ (8-currentTime.getUTCDay()));

                tuesdayw2Time = new Date();
                tuesdayw2Time.setDate(currentTime.getDate()+ (9-currentTime.getUTCDay()));

                wednesdayw2Time = new Date();
                wednesdayw2Time.setDate(currentTime.getDate()+ (10-currentTime.getUTCDay()));

                thursdayw2Time = new Date();
                thursdayw2Time.setDate(currentTime.getDate()+ (11-currentTime.getUTCDay()));

                fridayw2Time = new Date();
                fridayw2Time.setDate(currentTime.getDate()+ (12-currentTime.getUTCDay()));

                saturdayw2Time = new Date();
                saturdayw2Time.setDate(currentTime.getDate()+ (13-currentTime.getUTCDay()));

                sundayw2Time = new Date();
                sundayw2Time.setDate(currentTime.getDate()+ (14-currentTime.getUTCDay()));
            }
            else{
                MondayTime = new Date();
                MondayTime.setDate(currentTime.getDate()+ (0-currentTime.getUTCDay()));


                TuesdayTime = new Date();
                TuesdayTime.setDate(currentTime.getDate()+ (1-currentTime.getUTCDay()));


                WednesdayTime = new Date();
                WednesdayTime.setDate(currentTime.getDate()+ (2-currentTime.getUTCDay()));

                ThursdayTime = new Date();
                ThursdayTime.setDate(currentTime.getDate()+ (3-currentTime.getUTCDay()));
                FridayTime = new Date();
                FridayTime.setDate(currentTime.getDate()+ (4-currentTime.getUTCDay()));
                SaturdayTime = new Date();
                SaturdayTime.setDate(currentTime.getDate()+ (5-currentTime.getUTCDay()));


                SundayTime = new Date();
                SundayTime.setDate(currentTime.getDate()+ (6-currentTime.getUTCDay()));

                mondayw2Time = new Date();
                mondayw2Time.setDate(currentTime.getDate()+ (7-currentTime.getUTCDay()));

                tuesdayw2Time = new Date();
                tuesdayw2Time.setDate(currentTime.getDate()+ (8-currentTime.getUTCDay()));

                wednesdayw2Time = new Date();
                wednesdayw2Time.setDate(currentTime.getDate()+ (9-currentTime.getUTCDay()));

                thursdayw2Time = new Date();
                thursdayw2Time.setDate(currentTime.getDate()+ (10-currentTime.getUTCDay()));

                fridayw2Time = new Date();
                fridayw2Time.setDate(currentTime.getDate()+ (11-currentTime.getUTCDay()));

                saturdayw2Time = new Date();
                saturdayw2Time.setDate(currentTime.getDate()+ (12-currentTime.getUTCDay()));

                sundayw2Time = new Date();
                sundayw2Time.setDate(currentTime.getDate()+ (13-currentTime.getUTCDay()));
            }
        }

        jQuery("div#monday-menu div.date").text(MondayTime.getDate()+" "+month[MondayTime.getMonth()]+" "+MondayTime.getFullYear());
        jQuery("div#tuesday-menu div.date").text(TuesdayTime.getDate()+" "+month[TuesdayTime.getMonth()]+" "+TuesdayTime.getFullYear());
        jQuery("div#wednesday-menu div.date").text(WednesdayTime.getDate()+" "+month[WednesdayTime.getMonth()]+" "+WednesdayTime.getFullYear());
        jQuery("div#thursday-menu div.date").text(ThursdayTime.getDate()+" "+month[ThursdayTime.getMonth()]+" "+ThursdayTime.getFullYear());
        jQuery("div#friday-menu div.date").text(FridayTime.getDate()+" "+month[FridayTime.getMonth()]+" "+FridayTime.getFullYear());
        jQuery("div#saturday-menu div.date").text(SaturdayTime.getDate()+" "+month[SaturdayTime.getMonth()]+" "+SaturdayTime.getFullYear());
        jQuery("div#sunday-menu div.date").text(SundayTime.getDate()+" "+month[SundayTime.getMonth()]+" "+SundayTime.getFullYear());

        if(jQuery("div#monday-w2-menu div.date"))
        {
            jQuery("div#monday-w2-menu div.date").text(mondayw2Time.getDate()+" "+month[mondayw2Time.getMonth()]+" "+mondayw2Time.getFullYear());
        }

        if(jQuery("div#tuesday-w2-menu div.date"))
        {
            jQuery("div#tuesday-w2-menu div.date").text(tuesdayw2Time.getDate()+" "+month[tuesdayw2Time.getMonth()]+" "+tuesdayw2Time.getFullYear());
        }

        if(jQuery("div#wednesday-w2-menu div.date"))
        {
            jQuery("div#wednesday-w2-menu div.date").text(wednesdayw2Time.getDate()+" "+month[wednesdayw2Time.getMonth()]+" "+wednesdayw2Time.getFullYear());
        }

        if(jQuery("div#thursday-w2-menu div.date"))
        {
            jQuery("div#thursday-w2-menu div.date").text(thursdayw2Time.getDate()+" "+month[thursdayw2Time.getMonth()]+" "+thursdayw2Time.getFullYear());
        }
        if(jQuery("div#friday-w2-menu div.date"))
        {
            jQuery("div#friday-w2-menu div.date").text(fridayw2Time.getDate()+" "+month[fridayw2Time.getMonth()]+" "+fridayw2Time.getFullYear());
        }

        if(jQuery("div#saturday-w2-menu div.date"))
        {
            jQuery("div#saturday-w2-menu div.date").text(saturdayw2Time.getDate()+" "+month[saturdayw2Time.getMonth()]+" "+saturdayw2Time.getFullYear());
        }

        if(jQuery("div#sunday-w2-menu div.date"))
        {
            jQuery("div#sunday-w2-menu div.date").text(sundayw2Time.getDate()+" "+month[sundayw2Time.getMonth()]+" "+sundayw2Time.getFullYear());
        }

        var stringAvailable = "Available Until";
        if(currentMenuProgram=="Healthy Eating" || currentMenuProgram=="Weight Loss" || currentMenuProgram=="FiveMeal HealthyEating" || currentMenuProgram=="TenMeal HealthyEating")
        {

            cutOffTimeMonday = MondayTime;
            cutOffTimeMonday.setDate(cutOffTimeMonday.getDate()-1);
            cutOffTimeMonday.setHours(6,0,0);



            if(currentTime>cutOffTimeMonday){
                jQuery("div#monday-menu").html("");

            }

            //------------------------------------------------------------------------------------------------------------------------
            //cutOffTimeTuesday = TuesdayTime;
            //cutOffTimeTuesday.setDate(cutOffTimeTuesday.getDate()-1);
            //cutOffTimeTuesday.setHours(6,0,0);
            cutOffTimeTuesday = cutOffTimeMonday;
            //------------------------------------------------------------------------------------------------------------------------



            if(currentTime>cutOffTimeTuesday)
            {
                jQuery("div#tuesday-menu").html("");
            }


            cutOffTimeWednesday = WednesdayTime;

            cutOffTimeWednesday.setDate(cutOffTimeWednesday.getDate()-1);
            cutOffTimeWednesday.setHours(6,0,0);

            if(currentTime>cutOffTimeWednesday)
            {
                jQuery("div#wednesday-menu").html("");
            }

            cutOffTimeThursday = cutOffTimeWednesday;



            if(currentTime>cutOffTimeThursday)
            {
                jQuery("div#thursday-menu").html("");
            }

            cutOffTimeFriday = FridayTime;
            cutOffTimeFriday.setDate(cutOffTimeFriday.getDate()-1);
            cutOffTimeFriday.setHours(6,0,0);
            //cutOffTimeFriday.setMinutes(59);



            if(currentTime>cutOffTimeFriday)
            {
                jQuery("div#friday-menu").html("");
                //jQuery("div#friday-menu").hide();
            }

            cutOffTimeSaturday = SaturdayTime;
            cutOffTimeSaturday.setDate(cutOffTimeSaturday.getDate()-2);
            cutOffTimeSaturday.setHours(6,0,0);
            //cutOffTimeSaturday.setMinutes(59);




            if(currentTime>cutOffTimeSaturday)
            {
                jQuery("div#saturday-menu").html("");
                //jQuery("div#saturday-menu").hide();
            }

            cutOffTimeSunday = SundayTime;
            cutOffTimeSunday.setDate(cutOffTimeSunday.getDate()-3);
            cutOffTimeSunday.setHours(6,0,0);
            //cutOffTimeSunday.setMinutes(59);



            if(currentTime>cutOffTimeSunday)
            {
                jQuery("div#sunday-menu").html("");
                //jQuery("div#sunday-menu").hide();
            }

            jQuery("div#monday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeMonday.getDate()+" "+month[cutOffTimeMonday.getMonth()]+" "+cutOffTimeMonday.getFullYear()+" at "+cutOffTimeMonday.getHours()+":00 am)");
            jQuery("div#tuesday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeTuesday.getDate()+" "+month[cutOffTimeTuesday.getMonth()]+" "+cutOffTimeTuesday.getFullYear()+" at "+cutOffTimeTuesday.getHours()+":00 am)");
            jQuery("div#wednesday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeWednesday.getDate()+" "+month[cutOffTimeWednesday.getMonth()]+" "+cutOffTimeWednesday.getFullYear()+" at "+cutOffTimeWednesday.getHours()+":00 am)");
            jQuery("div#thursday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeThursday.getDate()+" "+month[cutOffTimeThursday.getMonth()]+" "+cutOffTimeThursday.getFullYear()+" at "+cutOffTimeThursday.getHours()+":00 am)");
            jQuery("div#friday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeFriday.getDate()+" "+month[cutOffTimeFriday.getMonth()]+" "+cutOffTimeFriday.getFullYear()+" at "+cutOffTimeFriday.getHours()+":00 am)");
            jQuery("div#saturday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeSaturday.getDate()+" "+month[cutOffTimeSaturday.getMonth()]+" "+cutOffTimeSaturday.getFullYear()+" at "+cutOffTimeSaturday.getHours()+":00 am)");
            jQuery("div#sunday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeSunday.getDate()+" "+month[cutOffTimeSunday.getMonth()]+" "+cutOffTimeSunday.getFullYear()+" at "+cutOffTimeSunday.getHours()+":00 am)");
        }

        else if(currentMenuProgram=="10Day Detox" || currentMenuProgram=="5Day Cleanse" ||  currentMenuProgram=="20Day Xcelerator" ||  currentMenuProgram=="5Day Xcelerator" ||  currentMenuProgram=="10Day Xcelerator")
        {

            cutOffTimeMonday = MondayTime;
            cutOffTimeMonday.setDate(cutOffTimeMonday.getDate()-1);
            cutOffTimeMonday.setHours(6,0,0);



            if(currentTime>cutOffTimeMonday)
            {
                jQuery("div#monday-menu").html("");
            }

            //-----------------------------------------------------------------------------------------------------------
            //cutOffTimeTuesday = TuesdayTime;
            //cutOffTimeTuesday.setDate(cutOffTimeTuesday.getDate()-1);
            //cutOffTimeTuesday.setHours(6,0,0);
            cutOffTimeTuesday = cutOffTimeMonday;
            //-----------------------------------------------------------------------------------------------------------


            if(currentTime>cutOffTimeTuesday)
            {
                jQuery("div#tuesday-menu").html("");
            }


            cutOffTimeWednesday = WednesdayTime;
            cutOffTimeWednesday.setDate(cutOffTimeWednesday.getDate()-1);
            cutOffTimeWednesday.setHours(6,0,0);
            //cutOffTimeWednesday.setMinutes(59);



            if(currentTime>cutOffTimeWednesday)
            {
                jQuery("div#wednesday-menu").html("");
            }

            //-------------------------------------------------------------------------------------------------------------------------------
            //cutOffTimeThursday = ThursdayTime;
            //cutOffTimeThursday.setDate(cutOffTimeThursday.getDate()-2);
            /*
             // remove by Alfred 6 Jan 2015
             cutOffTimeThursday.setDate(cutOffTimeThursday.getDate()-3);
             if(currentMenuProgram=="20Day Xcelerator" || currentMenuProgram=="5Day Xcelerator" || currentMenuProgram=="10Day Xcelerator"){
             cutOffTimeThursday.setDate(cutOffTimeThursday.getDate()-2);
             }
             */
            //cutOffTimeThursday.setHours(6,0,0);
            //cutOffTimeThursday.setMinutes(59);
            cutOffTimeThursday = cutOffTimeWednesday;
            //-------------------------------------------------------------------------------------------------------------------------------





            if(currentTime>cutOffTimeThursday)
            {
                jQuery("div#thursday-menu").html("");
            }

            cutOffTimeFriday = FridayTime;
            cutOffTimeFriday.setDate(cutOffTimeFriday.getDate()-1);
            cutOffTimeFriday.setHours(6,0,0);
            //cutOffTimeFriday.setMinutes(59);




            if(currentTime>cutOffTimeFriday)
            {
                jQuery("div#friday-menu").html("");
            }

            cutOffTimeSaturday = SaturdayTime;
            cutOffTimeSaturday.setDate(cutOffTimeSaturday.getDate()-2);
            cutOffTimeSaturday.setHours(6,0,0);
            //cutOffTimeSaturday.setMinutes(59);



            if(currentTime>cutOffTimeSaturday)
            {
                jQuery("div#saturday-menu").html("");
            }

            cutOffTimeSunday = SundayTime;
            cutOffTimeSunday.setDate(cutOffTimeSunday.getDate()-3);
            cutOffTimeSunday.setHours(6,0,0);
            //cutOffTimeSunday.setMinutes(59);



            if(currentTime>cutOffTimeSunday)
            {
                jQuery("div#sunday-menu").html("");
            }
            jQuery("div#monday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeMonday.getDate()+" "+month[cutOffTimeMonday.getMonth()]+" "+cutOffTimeMonday.getFullYear()+" at "+cutOffTimeMonday.getHours()+":00 am)");
            jQuery("div#tuesday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeTuesday.getDate()+" "+month[cutOffTimeTuesday.getMonth()]+" "+cutOffTimeTuesday.getFullYear()+" at "+cutOffTimeTuesday.getHours()+":00 am)");
            jQuery("div#wednesday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeWednesday.getDate()+" "+month[cutOffTimeWednesday.getMonth()]+" "+cutOffTimeWednesday.getFullYear()+" at "+cutOffTimeWednesday.getHours()+":00 am)");
            jQuery("div#thursday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeThursday.getDate()+" "+month[cutOffTimeThursday.getMonth()]+" "+cutOffTimeThursday.getFullYear()+" at "+cutOffTimeThursday.getHours()+":00 am)");
            jQuery("div#friday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeFriday.getDate()+" "+month[cutOffTimeFriday.getMonth()]+" "+cutOffTimeFriday.getFullYear()+" at "+cutOffTimeFriday.getHours()+":00 am)");
            jQuery("div#saturday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeSaturday.getDate()+" "+month[cutOffTimeSaturday.getMonth()]+" "+cutOffTimeSaturday.getFullYear()+" at "+cutOffTimeSaturday.getHours()+":00 am)");
            jQuery("div#sunday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeSunday.getDate()+" "+month[cutOffTimeSunday.getMonth()]+" "+cutOffTimeSunday.getFullYear()+" at "+cutOffTimeSunday.getHours()+":00 am)");


        }


    }
    else
    {



        //----------------------------------------------------------------------------------------------------------
        //jQuery("div#monday-menu").html("");
        //jQuery("div#tuesday-menu").html("");
        //----------------------------------------------------------------------------------------------------------
        if(currentTime.getDay()==0 && currentTime.getUTCDay()==6)
        {
            MondayTime = new Date();
            MondayTime.setDate(currentTime.getDate()+ (7-currentTime.getUTCDay()));

            TuesdayTime = new Date();
            TuesdayTime.setDate(currentTime.getDate()+ (8-currentTime.getUTCDay()));


            WednesdayTime = new Date();
            WednesdayTime.setDate(currentTime.getDate()+ (9-currentTime.getUTCDay()));

            ThursdayTime = new Date();
            ThursdayTime.setDate(currentTime.getDate()+ (10-currentTime.getUTCDay()));

            FridayTime = new Date();
            FridayTime.setDate(currentTime.getDate()+ (11-currentTime.getUTCDay()));

            SaturdayTime = new Date();
            SaturdayTime.setDate(currentTime.getDate()+ (12-currentTime.getUTCDay()));

            SundayTime = new Date();
            SundayTime.setDate(currentTime.getDate()+ (13-currentTime.getUTCDay()));

            mondayw2Time = new Date();
            mondayw2Time.setDate(currentTime.getDate()+ (14-currentTime.getUTCDay()));

            tuesdayw2Time = new Date();
            tuesdayw2Time.setDate(currentTime.getDate()+ (15-currentTime.getUTCDay()));

            wednesdayw2Time = new Date();
            wednesdayw2Time.setDate(currentTime.getDate()+ (16-currentTime.getUTCDay()));

            thursdayw2Time = new Date();
            thursdayw2Time.setDate(currentTime.getDate()+ (17-currentTime.getUTCDay()));

            fridayw2Time = new Date();
            fridayw2Time.setDate(currentTime.getDate()+ (18-currentTime.getUTCDay()));

            saturdayw2Time = new Date();
            saturdayw2Time.setDate(currentTime.getDate()+ (19-currentTime.getUTCDay()));

            sundayw2Time = new Date();
            sundayw2Time.setDate(currentTime.getDate()+ (20-currentTime.getUTCDay()));
        }
        else if(currentTime.getDay()==0 && currentTime.getUTCDay()==0)
        {
            MondayTime = new Date();
            MondayTime.setDate(currentTime.getDate()+ (8-currentTime.getUTCDay())-7);

            TuesdayTime = new Date();
            TuesdayTime.setDate(currentTime.getDate()+ (9-currentTime.getUTCDay())-7);

            WednesdayTime = new Date();
            WednesdayTime.setDate(currentTime.getDate()+ (10-currentTime.getUTCDay()-7));

            ThursdayTime = new Date();
            ThursdayTime.setDate(currentTime.getDate()+ (11-currentTime.getUTCDay())-7);

            FridayTime = new Date();
            FridayTime.setDate(currentTime.getDate()+ (12-currentTime.getUTCDay())-7);

            SaturdayTime = new Date();
            SaturdayTime.setDate(currentTime.getDate()+ (13-currentTime.getUTCDay()-7));

            SundayTime = new Date();
            SundayTime.setDate(currentTime.getDate()+ (14-currentTime.getUTCDay()-7));

            mondayw2Time = new Date();
            mondayw2Time.setDate(currentTime.getDate()+ (15-currentTime.getUTCDay()-7));

            tuesdayw2Time = new Date();
            tuesdayw2Time.setDate(currentTime.getDate()+ (16-currentTime.getUTCDay()-7));

            wednesdayw2Time = new Date();
            wednesdayw2Time.setDate(currentTime.getDate()+ (17-currentTime.getUTCDay()-7));

            thursdayw2Time = new Date();
            thursdayw2Time.setDate(currentTime.getDate()+ (18-currentTime.getUTCDay()-7));

            fridayw2Time = new Date();
            fridayw2Time.setDate(currentTime.getDate()+ (19-currentTime.getUTCDay()-7));

            saturdayw2Time = new Date();
            saturdayw2Time.setDate(currentTime.getDate()+ (20-currentTime.getUTCDay()-7));

            sundayw2Time = new Date();
            sundayw2Time.setDate(currentTime.getDate()+ (21-currentTime.getUTCDay()-7));
        }
        else
        {
            if(currentTime.getUTCDay()==currentTime.getDay())
            {

                MondayTime = new Date();
                MondayTime.setDate(currentTime.getDate()+ (8-currentTime.getUTCDay()));

                TuesdayTime = new Date();
                TuesdayTime.setDate(currentTime.getDate()+ (9-currentTime.getUTCDay()));

                WednesdayTime = new Date();
                WednesdayTime.setDate(currentTime.getDate()+ (10-currentTime.getUTCDay()));

                ThursdayTime = new Date();
                ThursdayTime.setDate(currentTime.getDate()+ (11-currentTime.getUTCDay()));

                FridayTime = new Date();
                FridayTime.setDate(currentTime.getDate()+ (12-currentTime.getUTCDay()));

                SaturdayTime = new Date();
                SaturdayTime.setDate(currentTime.getDate()+ (13-currentTime.getUTCDay()));

                SundayTime = new Date();
                SundayTime.setDate(currentTime.getDate()+ (14-currentTime.getUTCDay()));

                mondayw2Time = new Date();
                mondayw2Time.setDate(currentTime.getDate()+ (15-currentTime.getUTCDay()));

                tuesdayw2Time = new Date();
                tuesdayw2Time.setDate(currentTime.getDate()+ (16-currentTime.getUTCDay()));

                wednesdayw2Time = new Date();
                wednesdayw2Time.setDate(currentTime.getDate()+ (17-currentTime.getUTCDay()));

                thursdayw2Time = new Date();
                thursdayw2Time.setDate(currentTime.getDate()+ (18-currentTime.getUTCDay()));

                fridayw2Time = new Date();
                fridayw2Time.setDate(currentTime.getDate()+ (19-currentTime.getUTCDay()));

                saturdayw2Time = new Date();
                saturdayw2Time.setDate(currentTime.getDate()+ (20-currentTime.getUTCDay()));

                sundayw2Time = new Date();
                sundayw2Time.setDate(currentTime.getDate()+ (21-currentTime.getUTCDay()));
            }
            else
            {
                MondayTime = new Date();
                MondayTime.setDate(currentTime.getDate()+ (7-currentTime.getUTCDay()));

                TuesdayTime = new Date();
                TuesdayTime.setDate(currentTime.getDate()+ (8-currentTime.getUTCDay()));

                WednesdayTime = new Date();
                WednesdayTime.setDate(currentTime.getDate()+ (9-currentTime.getUTCDay()));

                ThursdayTime = new Date();
                ThursdayTime.setDate(currentTime.getDate()+ (10-currentTime.getUTCDay()));

                FridayTime = new Date();
                FridayTime.setDate(currentTime.getDate()+ (11-currentTime.getUTCDay()));

                SaturdayTime = new Date();
                SaturdayTime.setDate(currentTime.getDate()+ (12-currentTime.getUTCDay()));

                SundayTime = new Date();
                SundayTime.setDate(currentTime.getDate()+ (13-currentTime.getUTCDay()));

                mondayw2Time = new Date();
                mondayw2Time.setDate(currentTime.getDate()+ (14-currentTime.getUTCDay()));

                tuesdayw2Time = new Date();
                tuesdayw2Time.setDate(currentTime.getDate()+ (15-currentTime.getUTCDay()));

                wednesdayw2Time = new Date();
                wednesdayw2Time.setDate(currentTime.getDate()+ (16-currentTime.getUTCDay()));

                thursdayw2Time = new Date();
                thursdayw2Time.setDate(currentTime.getDate()+ (17-currentTime.getUTCDay()));

                fridayw2Time = new Date();
                fridayw2Time.setDate(currentTime.getDate()+ (18-currentTime.getUTCDay()));

                saturdayw2Time = new Date();
                saturdayw2Time.setDate(currentTime.getDate()+ (19-currentTime.getUTCDay()));

                sundayw2Time = new Date();
                sundayw2Time.setDate(currentTime.getDate()+ (20-currentTime.getUTCDay()));
            }
        }


        jQuery("div#monday-menu div.date").text(MondayTime.getDate()+" "+month[MondayTime.getMonth()]+" "+MondayTime.getFullYear());
        jQuery("div#tuesday-menu div.date").text(TuesdayTime.getDate()+" "+month[TuesdayTime.getMonth()]+" "+TuesdayTime.getFullYear());
        jQuery("div#wednesday-menu div.date").text(WednesdayTime.getDate()+" "+month[WednesdayTime.getMonth()]+" "+WednesdayTime.getFullYear());
        jQuery("div#thursday-menu div.date").text(ThursdayTime.getDate()+" "+month[ThursdayTime.getMonth()]+" "+ThursdayTime.getFullYear());
        jQuery("div#friday-menu div.date").text(FridayTime.getDate()+" "+month[FridayTime.getMonth()]+" "+FridayTime.getFullYear());
        jQuery("div#saturday-menu div.date").text(SaturdayTime.getDate()+" "+month[SaturdayTime.getMonth()]+" "+SaturdayTime.getFullYear());
        jQuery("div#sunday-menu div.date").text(SundayTime.getDate()+" "+month[SundayTime.getMonth()]+" "+SundayTime.getFullYear());
        if(jQuery("div#monday-w2-menu div.date"))
        {
            jQuery("div#monday-w2-menu div.date").text(mondayw2Time.getDate()+" "+month[mondayw2Time.getMonth()]+" "+mondayw2Time.getFullYear());
        }
        if(jQuery("div#tuesday-w2-menu div.date"))
        {
            jQuery("div#tuesday-w2-menu div.date").text(tuesdayw2Time.getDate()+" "+month[tuesdayw2Time.getMonth()]+" "+tuesdayw2Time.getFullYear());
        }
        if(jQuery("div#wednesday-w2-menu div.date"))
        {
            jQuery("div#wednesday-w2-menu div.date").text(wednesdayw2Time.getDate()+" "+month[wednesdayw2Time.getMonth()]+" "+wednesdayw2Time.getFullYear());
        }

        if(jQuery("div#thursday-w2-menu div.date"))
        {
            jQuery("div#thursday-w2-menu div.date").text(thursdayw2Time.getDate()+" "+month[thursdayw2Time.getMonth()]+" "+thursdayw2Time.getFullYear());
        }
        if(jQuery("div#friday-w2-menu div.date"))
        {
            jQuery("div#friday-w2-menu div.date").text(fridayw2Time.getDate()+" "+month[fridayw2Time.getMonth()]+" "+fridayw2Time.getFullYear());
        }

        if(jQuery("div#saturday-w2-menu div.date"))
        {
            jQuery("div#saturday-w2-menu div.date").text(saturdayw2Time.getDate()+" "+month[saturdayw2Time.getMonth()]+" "+saturdayw2Time.getFullYear());
        }

        if(jQuery("div#sunday-w2-menu div.date"))
        {
            jQuery("div#sunday-w2-menu div.date").text(sundayw2Time.getDate()+" "+month[sundayw2Time.getMonth()]+" "+sundayw2Time.getFullYear());
        }

        var stringAvailable = "Available Until";
        if(currentMenuProgram=="Healthy Eating" || currentMenuProgram=="Weight Loss" || currentMenuProgram=="FiveMeal HealthyEating" || currentMenuProgram=="TenMeal HealthyEating")
        {

            cutOffTimeMonday = MondayTime;
            cutOffTimeMonday.setDate(cutOffTimeMonday.getDate()-1);
            cutOffTimeMonday.setHours(6,0,0);





            if(currentTime>cutOffTimeMonday)
            {
                jQuery("div#monday-menu").html("");
            }


            //-----------------------------------------------------------------------------------------
            //cutOffTimeTuesday = TuesdayTime
            //cutOffTimeTuesday.setDate(cutOffTimeTuesday.getDate()-1);
            //cutOffTimeTuesday.setHours(6,0,0);
            cutOffTimeTuesday = cutOffTimeMonday;



            if(currentTime>cutOffTimeTuesday)
            {
                jQuery("div#tuesday-menu").html("");
            }
            jQuery("div#monday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeMonday.getDate()+" "+month[cutOffTimeMonday.getMonth()]+" "+cutOffTimeMonday.getFullYear()+" at "+cutOffTimeMonday.getHours()+":00 am)");
            jQuery("div#tuesday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeTuesday.getDate()+" "+month[cutOffTimeTuesday.getMonth()]+" "+cutOffTimeTuesday.getFullYear()+" at "+cutOffTimeTuesday.getHours()+":00 am)");



            //--------------------------------------------------------------------------------------------

        }
        else
        {
            cutOffTimeMonday = MondayTime;
            cutOffTimeMonday.setDate(cutOffTimeMonday.getDate()-1);
            cutOffTimeMonday.setHours(6,0,0);





            if(currentTime>cutOffTimeMonday)
            {
                jQuery("div#monday-menu").html("");
            }

            //-----------------------------------------------------------------------------------------
            cutOffTimeTuesday = TuesdayTime;
            cutOffTimeTuesday.setDate(cutOffTimeTuesday.getDate()-1);
            cutOffTimeTuesday.setHours(6,0,0);



            if(currentTime>cutOffTimeTuesday)
            {
                jQuery("div#tuesday-menu").html("");
            }
            jQuery("div#monday-menu div.available-date").text("( "+stringAvailable+" "+cutOffTimeMonday.getDate()+" "+month[cutOffTimeMonday.getMonth()]+" "+cutOffTimeMonday.getFullYear()+" at "+cutOffTimeMonday.getHours()+":00 am)");

            //-----------------------------------------------------------------------------------------

        }
    }
    /*--------------------------------------------------*/



    if(currentMenuProgram=="Healthy Eating" || currentMenuProgram=="FiveMeal HealthyEating" || currentMenuProgram=="Weight Loss" || currentMenuProgram=="TenMeal HealthyEating"){
        jQuery("span.date").hide();
        jQuery("div.heading-login-panel a").html("Please make your meal selections by adding meals to your cart. You can adjust your order by viewing your cart before checking out.");
        if(currentMenuProgram=="Healthy Eating"){
            jQuery("div.backbut_catalog a").attr("href","/healthy-eating-program.htm");
        }
        else if(currentMenuProgram=="FiveMeal HealthyEating"){
            jQuery("div.backbut_catalog a").attr("href","/FiveMeal-healthyeating-program.htm");
        }
        else if(currentMenuProgram=="TenMeal HealthyEating"){
            jQuery("div.backbut_catalog a").attr("href","/TenMeal-healthyeating-program.htm");
        }
        else{
            jQuery("div.backbut_catalog a").attr("href","/weight-loss-program.htm");
        }

        var menuAvailable =  new Array();
        var index=0;

        if(currentMenuProgram=="Healthy Eating"){
            jQuery("div.Healthy-Eating div.table-menu").each(function check(){
                if(jQuery(this).text() != ""){
                    menuAvailable[index]= jQuery("div.date",this).text();
                    index++;
                }
            });
        }
        else if(currentMenuProgram=="FiveMeal HealthyEating"){
            jQuery("div.FiveMeal-HealthyEating div.table-menu").each(function check(){
                if(jQuery(this).text() != ""){
                    menuAvailable[index]= jQuery("div.date",this).text();
                    index++;
                }
            });
        }

        else if(currentMenuProgram=="TenMeal HealthyEating"){
            jQuery("div.TenMeal-HealthyEating div.table-menu").each(function check(){
                if(jQuery(this).text() != ""){
                    menuAvailable[index]= jQuery("div.date",this).text();
                    index++;
                }
            });
        }

        else{
            jQuery("div.Weight-Loss div.table-menu").each(function check(){
                if(jQuery(this).text() != ""){
                    menuAvailable[index]= jQuery("div.date",this).text();
                    index++;
                }
            });
        }

        if(index==0){
            jQuery("#warning1").dialog();
        }

        //---------
        // Xmas Dates - point 1
        if(currentTime.getHours()>=6 && currentTime.getDate()>=1 && currentTime.getMonth()>=5 && currentTime.getFullYear()>=2015){

            // jQuery("#warning1").html(currentTime.getHours() + ' - ' + currentTime.getDate() + ' - ' + currentTime.getMonth() + ' - ' + currentTime.getFullYear());
            if(currentMenuProgram=="Healthy Eating"){
                jQuery("#description .Healthy-Eating .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="8 June 2015"){
                        // jQuery(this).html("");
                        jQuery(this).find(".lunch2, .dinner2, .cleanse-1, .cleanse-2, .fruit-salad, .cleanse-breakfast, .cleanse-juice, .desert, .soup, .vegetarian-dinner").html("").css({"display":"none"});
                        jQuery(this).find(".available-date").html("( Available Until 4 June 2015 at 6:00 am)");
                    }

                    // if(jQuery(this).find(".available-date").text()=="( Available Until 7 June 2015 at 6:00 am)"){
                    // jQuery(this).text("( Available Until 4 June 2015 at 6:00 am)");
                    // }
                });
            }
            else if(currentMenuProgram=="FiveMeal HealthyEating"){
                jQuery("#description .FiveMeal-HealthyEating .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="8 June 2015"){
                        // jQuery(this).html("");
                        jQuery(this).find(".lunch2, .dinner2, .cleanse-1, .cleanse-2, .fruit-salad, .cleanse-breakfast, .cleanse-juice, .desert .soup").html("").css({"display":"none"});
                        jQuery(this).find(".available-date").html("( Available Until 4 June 2015 at 6:00 am)");
                    }
                });
            }

            else if(currentMenuProgram=="TenMeal HealthyEating"){
                jQuery("#description .TenMeal-HealthyEating .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="8 June 2015"){
                        // jQuery(this).html("");
                        jQuery(this).find(".lunch2, .dinner2, .cleanse-1, .cleanse-2, .fruit-salad, .cleanse-breakfast, .cleanse-juice, .desert .soup").html("").css({"display":"none"});
                        jQuery(this).find(".available-date").html("( Available Until 4 June 2015 at 6:00 am)");
                    }
                });
            }

            else if(currentMenuProgram=="Weight Loss"){
                jQuery("#description .Weight-Loss .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="6 April 2015" || jQuery(this).find(".date").text()=="27 January 2015"){
                        jQuery(this).html("");
                        // jQuery(this).find(".breakfast1, .breakfast2, .lunch2, .dinner2, .cleanse-1, .cleanse-2, .fruit-salad").html("").css({"display":"none"});
                    }
                });
            }


        }

        // Xmas Dates - point 2
        if(currentTime.getHours()>=1 && currentTime.getDate()>=1 && currentTime.getMonth()>=9 && currentTime.getFullYear()>=2015){
            if(currentMenuProgram=="Healthy Eating"){
                jQuery("#description .Healthy-Eating .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="5 October 2015" || jQuery(this).find(".date").text()=="7 June 2015" || jQuery(this).find(".date").text()=="6 June 2015" || jQuery(this).find(".date").text()=="5 June 2015"){
                        //jQuery(this).find(".breakfast1, .breakfast2, .lunch2, .dinner2, .cleanse-1, .cleanse-2, .fruit-salad, .cleanse-breakfast").html("").css({"display":"none"});
                        jQuery(this).html("");
                    }
                });
            }
            else if(currentMenuProgram=="FiveMeal HealthyEating"){
                jQuery("#description .FiveMeal-HealthyEating .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="5 October 2015" || jQuery(this).find(".date").text()=="7 June 2015" || jQuery(this).find(".date").text()=="6 June 2015" || jQuery(this).find(".date").text()=="5 June 2015"){
                        //jQuery(this).find(".breakfast1, .breakfast2, .lunch2, .dinner2, .cleanse-1, .cleanse-2, .fruit-salad, .cleanse-breakfast").html("").css({"display":"none"});
                        jQuery(this).html("");
                    }
                });
            }

            else if(currentMenuProgram=="TenMeal HealthyEating"){
                jQuery("#description .TenMeal-HealthyEating .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="5 October 2015" || jQuery(this).find(".date").text()=="7 June 2015" || jQuery(this).find(".date").text()=="6 June 2015" || jQuery(this).find(".date").text()=="5 June 2015"){
                        //jQuery(this).find(".breakfast1, .breakfast2, .lunch2, .dinner2, .cleanse-1, .cleanse-2, .fruit-salad, .cleanse-breakfast").html("").css({"display":"none"});
                        jQuery(this).html("");
                    }
                });
            }

            else if(currentMenuProgram=="Weight Loss"){
                jQuery("#description .Weight-Loss .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="6 April 2015" || jQuery(this).find(".date").text()=="23 December 2014"){
                        jQuery(this).find(".breakfast1, .breakfast2, .lunch2, .dinner2, .cleanse-1, .cleanse-2, .fruit-salad, .cleanse-breakfast").html("").css({"display":"none"});
                    }
                });
            }
        }

        // Xmas Dates - point 3
        if(currentTime.getHours()>=7 && currentTime.getDate()>=30 && currentTime.getMonth()>=11 && currentTime.getFullYear()>=2014){
            if(currentMenuProgram=="Healthy Eating"){
                jQuery("#description .Healthy-Eating .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="31 December 2014" || jQuery(this).find(".date").text()=="1 January 2015"){
                        jQuery(this).html("");
                    }
                });
            }
            else if(currentMenuProgram=="FiveMeal HealthyEating"){
                jQuery("#description .FiveMeal-HealthyEating .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="31 December 2014" || jQuery(this).find(".date").text()=="1 January 2015"){
                        jQuery(this).html("");
                    }
                });
            }

            else if(currentMenuProgram=="TenMeal HealthyEating"){
                jQuery("#description .TenMeal-HealthyEating .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="31 December 2014" || jQuery(this).find(".date").text()=="1 January 2015"){
                        jQuery(this).html("");
                    }
                });
            }

            else if(currentMenuProgram=="Weight Loss"){
                jQuery("#description .Weight-Loss .table-menu").each(function(){
                    if(jQuery(this).find(".date").text()=="31 December 2014" || jQuery(this).find(".date").text()=="1 January 2015"){
                        jQuery(this).html("");
                    }
                });
            }
        }
        //---------------

        setShoppingCartLink();

    }
    else if (currentMenuProgram=="10Day Detox" || currentMenuProgram=="5Day Cleanse" || currentMenuProgram=="20Day Xcelerator" || currentMenuProgram=="5Day Xcelerator" || currentMenuProgram=="10Day Xcelerator"){

        // // EASTER DATE REMOVE
        if(currentTime.getHours()>=6 && currentTime.getDate()>=4 && currentTime.getMonth()>=5 && currentTime.getFullYear()>=2015){
            jQuery("#description .Xcelerator .table-menu, #description .Cleanse .table-menu").each(function(){
                if(jQuery(this).find(".date").text()=="8 June 2015"){
                    //jQuery(this).html("");
                    jQuery(this).find(".lunch2").html("").css({"display":"none"});
                }
            });
        }



        //notification to insert start date
        jQuery("div.heading-login-panel a").html("Please select the start date for your program");
        if(currentMenuProgram=="20Day Xcelerator" || currentMenuProgram=="5Day Xcelerator" || currentMenuProgram=="10Day Xcelerator"){
            jQuery("div.heading-login-panel a").html("Please select your preferred start date for your program. Please note this is a set menu which includes Breakfast, Lunch, Dinner and 2 snacks daily. Any food preferences will be catered for at Step 6 of the ordering process.");
        }
        //activate the layout
        jQuery("div.heading-login-panel").show();
        jQuery("div.heading-login-panel a").show();

        //set the url of the back button as well
        //check the program if 10day  and 20day from cookies, then set the price for 20days detox
        if(currentMenuProgram=="10Day Detox"){
            jQuery("div.backbut_catalog a").attr("href","/10day-detox-program.htm");
            if(sessionStorage.detoxdays=="20 Days"){
                jQuery("div.backbut_catalog a").attr("href","/20day-overhaul-program.htm");
                jQuery("div#packprice").html("$1460.00");
                jQuery("div#packattr option:nth-child(2)").html("Large + $160");
            }
        }else if(currentMenuProgram=="20Day Xcelerator"){
            jQuery("div.backbut_catalog a").attr("href","/20day-xcelerator-program");
        }//------------
        else if(currentMenuProgram=="5Day Xcelerator"){
            jQuery("div.backbut_catalog a").attr("href","/5day-xcelerator-program");
        }//------------
        else if(currentMenuProgram=="10Day Xcelerator"){
            jQuery("div.backbut_catalog a").attr("href","/10day-xcelerator-program");
        }//------------
        else{
            //set for cleanse
            jQuery("div.backbut_catalog a").attr("href","/5day-cleanse-program.htm");
        }

        //initiate the currendate, cutofftime, pickeddate
        var currentDate =  new calcTime();
        var currentCutOffTime = new Date();
        var pickedDate = new Date();

        //inidicate which menu needs to be activated
        var menuAvailable =  new Array();
        var index=0;
        if(currentMenuProgram=="5Day Cleanse"){
            jQuery("div.Cleanse div.table-menu").each(function check(){
                if(jQuery(this).text()!=""){
                    menuAvailable[index]= jQuery("div.date",this).text();
                    index++;
                }
            });

        }else if(currentMenuProgram=="20Day Xcelerator" || currentMenuProgram=="5Day Xcelerator" || currentMenuProgram=="10Day Xcelerator"){
            jQuery("div.Xcelerator div.table-menu").each(function check(){
                if(jQuery(this).text()!=""){
                    menuAvailable[index]= jQuery("div.date",this).text();
                    index++;
                }

            });

        }else{
            jQuery("div.Detox div.table-menu").each(function check(){
                if(jQuery(this).text()!=""){
                    menuAvailable[index]= jQuery("div.date",this).text();
                    index++;
                }
            });
        }

        //check if menu is incorrect show warning
        if(index==0){
            jQuery("#warning1").dialog();
        }

        //calculate the range of the menu
        var stringEarliestRange = menuAvailable[0];
        var stringLatestRange = menuAvailable[menuAvailable.length-1];
        if(stringEarliestRange && stringLatestRange){
            stringEarliestRange = stringEarliestRange.split(" ")
            var stringEarliestDate = parseFloat(stringEarliestRange[0]);
            var stringEarliestMonth= stringEarliestRange[1];
            if(stringEarliestMonth=="January"){
                stringEarliestMonth=1;
            }
            else if(stringEarliestMonth=="February"){
                stringEarliestMonth=2;
            }
            else if(stringEarliestMonth=="March"){
                stringEarliestMonth=3;
            }
            else if(stringEarliestMonth=="April"){
                stringEarliestMonth=4;
            }
            else if(stringEarliestMonth=="May"){
                stringEarliestMonth=5;
            }
            else if(stringEarliestMonth=="June"){
                stringEarliestMonth=6;
            }
            else if(stringEarliestMonth=="July"){
                stringEarliestMonth=7;
            }
            else if(stringEarliestMonth=="September"){
                stringEarliestMonth=9;
            }
            else if(stringEarliestMonth=="October"){
                stringEarliestMonth=10;
            }
            else if(stringEarliestMonth=="November"){
                stringEarliestMonth=11;
            }
            else if(stringEarliestMonth=="August"){
                stringEarliestMonth=8	;
            }
            else if(stringEarliestMonth=="December"){
                stringEarliestMonth=12;
            }
            var stringEarliestYear = parseFloat(stringEarliestRange[2]);
            stringLatestRange = stringLatestRange.split(" ");
            var stringLatestDate = parseFloat(stringLatestRange[0]);
            var stringLatestMonth = stringLatestRange[1];
            if(stringLatestMonth=="January"){
                stringLatestMonth=1;
            }
            else if(stringLatestMonth=="February"){
                stringLatestMonth=2;
            }
            else if(stringLatestMonth=="March"){
                stringLatestMonth=3;
            }
            else if(stringLatestMonth=="April"){
                stringLatestMonth=4;
            }
            else if(stringLatestMonth=="May"){
                stringLatestMonth=5;
            }
            else if(stringLatestMonth=="June"){
                stringLatestMonth=6;
            }
            else if(stringLatestMonth=="July"){
                stringLatestMonth=7;
            }
            else if(stringLatestMonth=="September"){
                stringLatestMonth=9;
            }
            else if(stringLatestMonth=="October"){
                stringLatestMonth=10;
            }
            else if(stringLatestMonth=="November"){
                stringLatestMonth=11;
            }
            else if(stringLatestMonth=="August"){
                stringLatestMonth=8	;
            }
            else if(stringLatestMonth=="December"){
                stringLatestMonth=12;
            }
            var stringLatestYear = parseFloat(stringLatestRange[2]);

            //  date on calendar (monday,wednesday,friday)

            //---------


            /*UPDATED TO REMOVE 6 APRIL FROM ORDERS DATES - Original*/

            var daysToDisable = [0, 2, 4, 6]; //commented out for Easter, remove Monday order 6 April
            if(currentMenuProgram=="20Day Xcelerator" || currentMenuProgram=="5Day Xcelerator" || currentMenuProgram=="10Day Xcelerator"){
                // daysToDisable.length = 0; // alfred removed on 20150107 as requested by Sam, Xcelerator = no Sat, Sun
                var daysToDisable = [0, 2, 4, 6];
            }


            // Comment out below after public holiday 1539 - 1544
            if(currentTime.getHours()>=1 && currentTime.getDate()>=1 && currentTime.getMonth()>=9 && currentTime.getFullYear()>=2015){
                var daysToDisable = [ 0, 2, 4, 6]; //cleanse
                if(currentMenuProgram=="20Day Xcelerator" || currentMenuProgram=="5Day Xcelerator" || currentMenuProgram=="10Day Xcelerator"){
                    var daysToDisable = [0, 6];
                }
            }

            function disableSpecificWeekDays(date) {
                var day = date.getDay();
                for (i = 0; i < daysToDisable.length; i++) {
                    if ($.inArray(day, daysToDisable) != -1) {
                        return [false];
                    }
                }
                return [true];
            }
            //enable date picker
            jQuery( "#actualdate" ).datepicker({
                dateFormat: 'dd/mm/yy',
                beforeShowDay: disableSpecificWeekDays
            });
            jQuery( "#actualdate" ).datepicker( "option", "minDate", new Date(stringEarliestYear, stringEarliestMonth-1, stringEarliestDate) );
            jQuery( "#actualdate" ).datepicker( "option", "maxDate", new Date(stringLatestYear, stringLatestMonth-1, stringLatestDate) );

        }
        else
        {
            //if there is no date, then disable to add meals
            jQuery("span#Date-Warning a").show();
            jQuery("a.cartSummaryLink").attr("href","#");
            jQuery("input.productSubmitInput").hide();
            jQuery("input.productTextInput").hide();
            return false;
        }
        //make sure the date is inserted when addTocart button has been pressed
        var viewCartLink = jQuery("a.cartSummaryLink").attr("href");
        var lastCatalogURL  = window.location.href;

        sessionStorage.lastCatalogURL=lastCatalogURL;

        jQuery('input#actualdate').datepicker()
            .on("change", function (e) {
                if(jQuery(this).val()==null){
                    jQuery("#warning-date").dialog();
                    jQuery("a.cartSummaryLink").attr("href","#");
                    jQuery("input.productSubmitInput").hide();
                    jQuery("input.productTextInput").hide();
                    return false;
                }
                if(jQuery(this).val()==""){
                    jQuery("span#Date-Warning a").show();
                    jQuery("#warning-date").dialog();
                    jQuery("a.cartSummaryLink").attr("href","#");
                    jQuery("input.productSubmitInput").hide();
                    jQuery("input.productTextInput").hide();
                    return false;
                }
                var selectedDate = jQuery("input#actualdate").val();
                if(selectedDate){
                    getArrayofDate(selectedDate,currentMenuProgram,upsell);
                }

                if(sessionStorage.dates == null){
                    jQuery(this).val(null);
                    jQuery("span#Date-Warning a").show();
                    jQuery("#warning-date").dialog("close");
                    jQuery("a.cartSummaryLink").attr("href","#");
                    jQuery("input.productSubmitInput").hide();
                    jQuery("input.productTextInput").hide();
                    return false;
                }
                if(sessionStorage.dates == ""){
                    jQuery(this).val(null);
                    jQuery("span#Date-Warning a").show();
                    jQuery("#warning-date").dialog("close");
                    jQuery("a.cartSummaryLink").attr("href","#");
                    jQuery("input.productSubmitInput").hide();
                    jQuery("input.productTextInput").hide();
                    return false;
                }
                jQuery("a.cartSummaryLink").attr("href","#");
                jQuery("#warning-date").dialog("close");
                jQuery("span#Date-Warning a").hide();
                jQuery("input.productSubmitInput").show();
                jQuery("input.productTextInput").show();
                jQuery("a.cartSummaryLink").click(function(){
                    if(sessionStorage.dates == null || sessionStorage.dates == ""){
                        jQuery(this).val(null);
                        jQuery("span#Date-Warning a").show();
                        jQuery("#warning-date").dialog();
                        jQuery("a.cartSummaryLink").attr("href","#");
                        jQuery("input.productSubmitInput").hide();
                        jQuery("input.productTextInput").hide();
                        return false;
                    }
                    window.location.href=viewCartLink;
                    setShoppingCartLink();

                    sessionStorage.packDate = jQuery(this).val();
                    var selectedDate = jQuery("input#actualdate").val();
                    if(selectedDate){
                        getArrayofDate(selectedDate,currentMenuProgram,upsell);
                    }
                });

            });

        // =============================================================================================================
        if(jQuery("#actualdate").val()==null){
            jQuery("#warning-date").dialog();
            jQuery("a.cartSummaryLink").attr("href","#");
            jQuery("input.productSubmitInput").hide();
            jQuery("input.productTextInput").hide();
            return false;
        }
        else if(jQuery("#actualdate").val()==""){
            jQuery("#warning-date").dialog();
            jQuery("a.cartSummaryLink").attr("href","#");
            jQuery("input.productSubmitInput").hide();
            jQuery("input.productTextInput").hide();
            return false;
        }
        else{
            jQuery("input.productSubmitInput").show();
            jQuery("input.productTextInput").show();
            jQuery("span#Date-Warning a").hide();
            jQuery("a.cartSummaryLink").attr("href",viewCartLink);
            setShoppingCartLink();

            sessionStorage.packDate = jQuery("input#actualdate").val();
            var selectedDate = jQuery("input#actualdate").val();
            if(selectedDate){
                getArrayofDate(selectedDate,currentMenuProgram,upsell);
            }
        }
    }
}

function calcTime() {
    // create Date object for current location
    d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset

    var offsetString =  d.toLocaleString();
    var timezone = jzTimezoneDetector.determine_timezone().timezone;

    std_time_offset = parseFloat(timezone.utc_offset);

    if (timezone.uses_dst) {
        DSTindicator="1";
    } else {
        DSTindicator="0";
    }

    nd = new Date(utc + (3600000*std_time_offset));

    return nd;
}






function selectIntial()
{
    jQuery("div.catProdAttributeTitle").addClass('pull-left');
    jQuery("div.catProdAttributeItem").addClass('pull-left');
    jQuery("div.catProdAttributeItem select").addClass('form-control');
    jQuery("div.catProdAttributeItem select option[value='']").remove();
}


function checkAddcoolerbag()
{
    var orderStatus = jQuery("div#hidden-order").text();
    var productDetails;

    if(sessionStorage.CorporateName ==null || sessionStorage.CorporateName=="")
    {
        if(orderStatus=="No orders found.")
        {
            var cartStatus = jQuery("div.cart-summary td.cartSummaryItem").text();
            if(cartStatus == "Shopping cart is empty.")
            {
                jQuery("table.productTable tr").each(function(){
                    if(jQuery(this).find("td.productItem ul li.namee").text().trim()=="Cooler Bag"){
                        productDetails=jQuery(this).find("input.productSubmitInput").attr("onclick");
                    }
                });
                productDetails= productDetails.toString();
                var str = productDetails.split("(");
                var str2 = str[2].split(",");

                var productID= str2[1];
                var catalogID= str2[0];
                var number = str2[3];


                AddToCart(catalogID, productID, "", number,false);
            }
        }
    }
}

function meal()
{
    this.mealType="";
    this.mealDescription="";
    this.mealPrice="";
    this.mealProgramName="";
    this.mealSeasonName="";
    this.mealWeekName="";
    this.mealDayName="";
    this.mealLable="";
    this.mealattribute="";
    this.addToCart="";
    this.mealLabelDF="";
    this.mealLabelGF="";
}

function weeklyMenu(){
    this.healthbar12=new meal();
    this.healthbar24=new meal();
    this.breakfast1= new meal();
    this.breakfast2=new meal();
    this.lunch1=new meal();
    this.lunch2=new meal();
    this.dinner1=new meal();
    this.dinner2=new meal();
    this.vegetarianLunch=new meal();
    this.vegetarianDinner=new meal();
    this.fruitSalad=new meal();
    this.snack=new meal();
    this.desert=new meal();
    this.familyPack=new meal();
}

function weeklyMenu2(){
    this.cleanseJuice= new meal();
    this.breakfast=new meal();
    this.snack1=new meal();
    this.lunch=new meal();
    this.snack2=new meal();
    this.dinner1=new meal();
    this.dinner2=new meal();

}

function weeklyMenu3(){
    this.breakfast= new meal();
    this.lunch1=new meal();
    this.lunch2=new meal();
    this.dinner1=new meal();
    this.dinner2=new meal();
    this.snack=new meal();
    this.fruitSalad=new meal();
}

function createMenuXC(){
    var mondayMenu= new weeklyMenu3();
    var tuesdayMenu= new weeklyMenu3();
    var wednesdayMenu= new weeklyMenu3();
    var thursdayMenu= new weeklyMenu3();
    var fridayMenu= new weeklyMenu3();
    var saturdayMenu= new weeklyMenu3();
    var sundayMenu= new weeklyMenu3();

    var menu = new Array();

    menu[0]=mondayMenu;
    menu[1]=tuesdayMenu;
    menu[2]=wednesdayMenu;
    menu[3]=thursdayMenu;
    menu[4]=fridayMenu;
    menu[5]=saturdayMenu;
    menu[6]=sundayMenu;

    return menu;
}

function rwViewcartLink()
{
    var rwViewCart = jQuery("div.cart-summary").html();

    jQuery("div#cart2 div.cart-summary").html(rwViewCart);

    jQuery("#cart2 .backbut_catalog img").hover(function(){

        jQuery(this).attr("src","/img/back-button-hover.jpg");
    },function(){
        jQuery(this).attr("src","/img/back-button.jpg");
    });
    setShoppingCartLink();
}


function highLight()
{

    jQuery("div.meal-addtocart input.productSubmitInput").each(function (){

        jQuery(this).click(function() {
            //jQuery(this).attr("class","productSubmitInput2");
        });
    });
}


function writeData(CatalogProgram,tempMeal,currentWeek,nextWeek,currentSeason,nextSeason,selectedWeek,extendedWeek,weekStatus)
{
    var mapperMealType = {b1:'breakfast1',b2:'breakfast2',cb:'cleanse-breakfast',l1:'lunch1',l2:'lunch2',d1:'dinner1',d2:'dinner2',vd:'vegetarian-dinner',vl:'vegetarian-lunch',cl1:'cleanse-1',cl2:'cleanse-2',hb12: 'healthbar12',hb24: 'healthbar24',fs: 'fruit-salad',sn:'snack',cj3:'cleanse-juice',ds:'desert',sp:'soup',fp:'family-pack'};
    var mapperMealDayname ={mon:'monday',tue:'tuesday',wed:'wednesday',thu:'thursday',fri:'friday',sat:'saturday',sun:'sunday'};
    var mapperMealType2= {cj:'cleanse-juice',b1:'breakfast',l1:'lunch',d1:'dinner1',d2:'dinner2',s1:'snack1',s2:'snack2'};

    //-----------------xcelerator-----------------------------------------------
    var mapperMealType3= {b1:'breakfast',s1:'snack1',l1:'lunch1',l2:'lunch2',d1:'dinner1',d2:'dinner2',s2:'snack2',fs:'fruit-salad'};
    //-----------------xcelerator-----------------------------------------------

    if(CatalogProgram=="Healthy Eating"){

        jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
        jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label-df").html(tempMeal.mealLabelDF);
        jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label-gf").html(tempMeal.mealLabelGF);
        jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-attribute").html(tempMeal.mealattribute);
        jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-price").html(tempMeal.mealPrice);
        jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart").html(tempMeal.addToCart);

        var checkoutString = jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart input.productSubmitInput").attr("onclick");
        if(checkoutString)
        {
            checkoutString = checkoutString.toString();
            checkoutString = checkoutString.split("{");
            checkoutString = checkoutString[1].split(";");
            checkoutString = checkoutString[0];
        }
        highLight();
        var js = checkoutString+";"+"rwViewcartLink();";
        var newclick = new Function(js);
        jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart input.productSubmitInput").removeAttr('onclick');
        jQuery("div#menu-wrapper div.Healthy-Eating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart input.productSubmitInput").click(newclick);

    }
    else if (CatalogProgram == "FiveMeal HealthyEating"){
        jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
        jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label-df").html(tempMeal.mealLabelDF);
        jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label-gf").html(tempMeal.mealLabelGF);
        jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-attribute").html(tempMeal.mealattribute);
        jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-price").html(tempMeal.mealPrice);
        jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart").html(tempMeal.addToCart);

        var checkoutString = jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart input.productSubmitInput").attr("onclick");
        if(checkoutString)
        {
            checkoutString = checkoutString.toString();
            checkoutString = checkoutString.split("{");
            checkoutString = checkoutString[1].split(";");
            checkoutString = checkoutString[0];
        }
        highLight();
        var js = checkoutString+";"+"rwViewcartLink();";
        var newclick = new Function(js);
        jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart input.productSubmitInput").removeAttr('onclick');
        jQuery("div#menu-wrapper div.FiveMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart input.productSubmitInput").click(newclick);
    }

    else if (CatalogProgram == "TenMeal HealthyEating"){
        jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
        jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label-df").html(tempMeal.mealLabelDF);
        jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label-gf").html(tempMeal.mealLabelGF);
        jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-attribute").html(tempMeal.mealattribute);
        jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-price").html(tempMeal.mealPrice);
        jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart").html(tempMeal.addToCart);

        var checkoutString = jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart input.productSubmitInput").attr("onclick");
        if(checkoutString)
        {
            checkoutString = checkoutString.toString();
            checkoutString = checkoutString.split("{");
            checkoutString = checkoutString[1].split(";");
            checkoutString = checkoutString[0];
        }
        highLight();
        var js = checkoutString+";"+"rwViewcartLink();";
        var newclick = new Function(js);
        jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart input.productSubmitInput").removeAttr('onclick');
        jQuery("div#menu-wrapper div.TenMeal-HealthyEating div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart input.productSubmitInput").click(newclick);
    }


    else if (CatalogProgram =="Weight Loss"){
        jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
        jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label-df").html(tempMeal.mealLabelDF);
        jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-label-gf").html(tempMeal.mealLabelGF);
        jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-attribute").html(tempMeal.mealattribute);
        jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-price").html(tempMeal.mealPrice);
        jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart").html(tempMeal.addToCart);
        var checkoutString = jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart").attr("onclick");
        if(checkoutString){
            checkoutString = checkoutString.toString();
            checkoutString = checkoutString.split("{");
            checkoutString = checkoutString[1].split(";");
            checkoutString = checkoutString[0];
        }
        highLight();
        var js = checkoutString+";"+"rwViewcartLink();";
        var newclick = new Function(js);
        jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart").removeAttr('onclick');
        jQuery("div#menu-wrapper div.Weight-Loss div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType[tempMeal.mealType]+" div.meal-addtocart").click(newclick);
    }
    else if(CatalogProgram=="10Day Detox"){

        var selectedSeason="";
        if(weekStatus=="Current Week"){
            selectedSeason = currentSeason;
        }else{
            selectedSeason = nextSeason;
        }

        if(tempMeal.mealWeekName==selectedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Detox div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Detox div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='mon' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Detox div#monday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Detox div#monday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='tue' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Detox div#tuesday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Detox div#tuesday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='wed' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Detox div#wednesday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Detox div#wednesday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='thu' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Detox div#thursday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Detox div#thursday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='fri' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Detox div#friday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Detox div#friday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='sat' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Detox div#saturday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Detox div#saturday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='sun' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Detox div#sunday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Detox div#sunday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
    }else if(CatalogProgram =="20Day Xcelerator" || CatalogProgram =="5Day Xcelerator" || CatalogProgram =="10Day Xcelerator"){
        var selectedSeason="";
        if(weekStatus=="Current Week"){
            selectedSeason = currentSeason;
        }else{
            selectedSeason = nextSeason;
        }
        if(tempMeal.mealWeekName==selectedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Xcelerator div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Xcelerator div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='mon' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Xcelerator div#monday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Xcelerator div#monday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='tue' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Xcelerator div#tuesday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Xcelerator div#tuesday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='wed' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Xcelerator div#wednesday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Xcelerator div#wednesday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='thu' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Xcelerator div#thursday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Xcelerator div#thursday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='fri' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Xcelerator div#friday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Xcelerator div#friday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='sat' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Xcelerator div#saturday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Xcelerator div#saturday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='sun' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Xcelerator div#sunday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Xcelerator div#sunday-w2-menu div."+mapperMealType3[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
    }else if(CatalogProgram =="5Day Cleanse"){
        var selectedSeason="";
        if(weekStatus=="Current Week"){
            selectedSeason = currentSeason;
        }else{
            selectedSeason = nextSeason;
        }
        if(tempMeal.mealWeekName==selectedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Cleanse div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Cleanse div#"+mapperMealDayname[tempMeal.mealDayName]+"-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='mon' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Cleanse div#monday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Cleanse div#monday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        if(tempMeal.mealDayName=='tue' && tempMeal.mealWeekName==extendedWeek && tempMeal.mealSeasonName==selectedSeason){
            jQuery("div#menu-wrapper div.Cleanse div#tuesday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-label").html(tempMeal.mealLabel);
            jQuery("div#menu-wrapper div.Cleanse div#tuesday-w2-menu div."+mapperMealType2[tempMeal.mealType]+" div.meal-description").html(tempMeal.mealDescription);
        }
        //--
    }
}
var t;
function readData(heArray,deArray)
{
    /*--Indicate Program-----*/
    var CatalogProgram = jQuery("#info-tag a").text();
    CatalogProgram=CatalogProgram.split("-");
    var selectedWeek = CatalogProgram[3];
    var selectedSeason = CatalogProgram[2];



    CatalogProgram= CatalogProgram[0]+" "+CatalogProgram[1];
    //disable alert functionality
    window.alert = function() {};




    var activeMenu = getActiveMenu();
    var currentWeek = activeMenu[0].week;
    var nextWeek = activeMenu[1].week;
    var currentSeason = activeMenu[0].season;
    var nextSeason = activeMenu[1].season;

    if(currentWeek=="Week1"){
        currentWeek="w1";
    }else if(currentWeek=="Week2"){
        currentWeek="w2";
    }else if(currentWeek=="Week3"){
        currentWeek="w3";
    }else if(currentWeek=="Week4"){
        currentWeek="w4";
    }

    var extendedWeek="";


    if(selectedWeek=="Week1"){
        selectedWeek="w1";
        extendedWeek="w2";
    }else if(selectedWeek=="Week2"){
        selectedWeek="w2";
        extendedWeek="w3";
    }else if(selectedWeek=="Week3"){
        selectedWeek="w3";
        extendedWeek="w4";
    }else if(selectedWeek=="Week4"){
        selectedWeek="w4";
        extendedWeek="w1";
    }

    if(selectedSeason=="Winter"){
        selectedSeason="wi";
    }else if(selectedSeason=="Summer"){
        selectedSeason="su";
    }



    if(nextWeek=="Week1"){
        nextWeek="w1";
    }else if(nextWeek=="Week2"){
        nextWeek="w2";
    }else if(nextWeek=="Week3"){
        nextWeek="w3";
    }else if(nextWeek=="Week4"){
        nextWeek="w4";
    }

    if(nextSeason=="Summer"){
        nextSeason="su";
    }
    if(nextSeason=="Winter"){
        nextSeason="wi";
    }

    if(currentSeason=="Summer"){
        currentSeason="su";
    }
    if(currentSeason=="Winter"){
        currentSeason="wi";
    }

    var weekStatus ="Current Week";
    if(selectedWeek==currentWeek && selectedSeason==currentSeason){
        weekStatus ="Current Week";
    }else{
        weekStatus ="Next Week";
    }


    jQuery("table.productTable td.productItem").each(function(index) {
        var tempSpecialTag =jQuery("div.custom-tag",this).text();
        tempSpecialTag= tempSpecialTag.split("-");
        var tempMeal = new meal()
        tempMeal.mealType=tempSpecialTag[0];
        tempMeal.mealProgramName=tempSpecialTag[1];
        tempMeal.mealSeasonName=tempSpecialTag[2];
        tempMeal.mealWeekName=tempSpecialTag[3];
        tempMeal.mealDayName=tempSpecialTag[4];
        tempMeal.mealDescription = jQuery("ul li.description",this).text();
        tempMeal.mealPrice = jQuery("ul li.price",this).text();
        tempMeal.mealLabel= jQuery("ul li.label",this).text();
        tempMeal.mealLabelDF = jQuery("ul li.label-df",this).text();
        tempMeal.mealLabelGF = jQuery("ul li.label-gf",this).text();

        if(jQuery("ul li.attribute select option:nth-child(2)",this).html()=="Large + $3.78"){
            jQuery("ul li.attribute select option:nth-child(2)",this).html("Large + $4.00");
        }else if(jQuery("ul li.attribute select option:nth-child(2)",this).html()=="Large + $2.83"){
            jQuery("ul li.attribute select option:nth-child(2)",this).html("Large + $3.00");
        }

        if(jQuery("ul li.attribute select option:nth-child(3)",this).html()=="Family + $35.38"){
            // jQuery("ul li.attribute select option:nth-child(3)",this).html("Family + $37.50").css({"display":"none"});
            jQuery("ul li.attribute select option:nth-child(3)",this).html("Family + $37.50");

            // MAKE FAMILY PACK 1ST OPTION
            var familyOptionHTML = jQuery("ul li.attribute select option:nth-child(3)",this).html();
            var familyOptionValue = jQuery("ul li.attribute select option:nth-child(3)",this).val();
            // jQuery("ul li.attribute select",this).prepend("<option value='"+familyOptionValue+"' selected='selected'>"+familyOptionHTML+"</option>");
            jQuery("ul li.label",this).prepend("FP");
            tempMeal.mealLabel= jQuery("ul li.label",this).text();



        }
        tempMeal.mealattribute = jQuery("ul li.attribute",this).html();
        tempMeal.addToCart= jQuery("ul li.quantity",this).html();
        t=setTimeout(function (){
            writeData(CatalogProgram,tempMeal,currentWeek,nextWeek,currentSeason,nextSeason,selectedWeek,extendedWeek,weekStatus);
        },2);
    });


}






function createMenuHE()
{
    var mondayMenu= new weeklyMenu();
    var tuesdayMenu= new weeklyMenu();
    var wednesdayMenu= new weeklyMenu();
    var thursdayMenu= new weeklyMenu();
    var fridayMenu= new weeklyMenu();
    var saturdayMenu= new weeklyMenu();
    var sundayMenu= new weeklyMenu();

    var menu = new Array();

    menu[0]=mondayMenu;
    menu[1]=tuesdayMenu;
    menu[2]=wednesdayMenu;
    menu[3]=thursdayMenu;
    menu[4]=fridayMenu;
    menu[5]=saturdayMenu;
    menu[6]=sundayMenu;

    return menu;
}

function createMenuDE()
{
    var mondayMenu= new weeklyMenu2();
    var tuesdayMenu= new weeklyMenu2();
    var wednesdayMenu= new weeklyMenu2();
    var thursdayMenu= new weeklyMenu2();
    var fridayMenu= new weeklyMenu2();
    var saturdayMenu= new weeklyMenu2();
    var sundayMenu= new weeklyMenu2();

    var menu = new Array();

    menu[0]=mondayMenu;
    menu[1]=tuesdayMenu;
    menu[2]=wednesdayMenu;
    menu[3]=thursdayMenu;
    menu[4]=fridayMenu;
    menu[5]=saturdayMenu;
    menu[6]=sundayMenu;

    return menu;
}

function addingItemTo20DayXceleratorProgram(){
    for (var i=0;i<20;i++){
        AddToCart(arrayDay[i].catalogID.trim(),arrayDay[i].productID.trim(),'_blank',3,false);
    }
}

function addingItemTo5DayXceleratorProgram(){
    for (var i=0;i<5;i++){
        AddToCart(arrayDay[i].catalogID.trim(),arrayDay[i].productID.trim(),'_blank',3,false);
    }
}

function addingItemTo10DayXceleratorProgram(){
    for (var i=0;i<10;i++){
        AddToCart(arrayDay[i].catalogID.trim(),arrayDay[i].productID.trim(),'_blank',3,false);
    }
}

function addingItemTo10DayDetoxProgram(){
    for (var i=0;i<10;i++){
        AddToCart(arrayDay[i].catalogID.trim(),arrayDay[i].productID.trim(),'_blank',3,false);
    }
}
function addingItemTo20DayOverhaulProgram(){
    for (var i=0;i<20;i++){
        AddToCart(arrayDay[i].catalogID.trim(),arrayDay[i].productID.trim(),'_blank',3,false);
    }
}


/*function customOrderButton()
 {
 //jQuery("div.table-menu div.meal-addtocart input.productSubmitInput").hide();
 jQuery("table.productTable li.quantity input.productSubmitInput").each(function (){

 var checkoutString = jQuery(this).attr("onclick");
 checkoutString = checkoutString.toString();

 checkoutString = checkoutString.split("{");
 checkoutString = checkoutString[1].split(";");
 checkoutString = checkoutString[0];



 var js = checkoutString+";"+"location.reload(true);";



 var newclick = new Function(js);

 jQuery(this).removeAttr('onclick');
 //jQuery(this).attr('onclick',js);
 //jQuery(this).click(newclick);




 });
 }

 */



function getArrayofDate(stringdate,CatalogProgram,upsell)
{


    //stringdate = stringdate.split("-");
    stringdate = stringdate.split("/");
    var day = stringdate[0];
    if(day.charAt(0)=="0")
    {
        day= day.substring(1);

    }
    day=parseInt(day);
    var month = stringdate[1];
    if(month.charAt(0)=="0"){
        month= month.substring(1);

    }
    month=parseInt(month);
    month=month-1;
    var year = stringdate[2];
    if(year.charAt(0)=="0"){
        year= year.substring(1);

    }
    year= parseInt(year);
    var selectedDate =  new calcTime();


    selectedDate.setDate(day);
    selectedDate.setMonth(month);
    selectedDate.setYear(year);


    var dates;
    if(CatalogProgram=="10Day Detox" || CatalogProgram=="20Day Xcelerator" || CatalogProgram=="5Day Xcelerator" || CatalogProgram=="10Day Xcelerator"){

        if(sessionStorage.detoxdays=="10 Days"){

            dates = new Array();
            dates[0]= selectedDate;
            dates[0].setDate(selectedDate.getDate()+0);
            dates[0]=dates[0].getDate()+"-"+(dates[0].getMonth()+1)+"-"+dates[0].getFullYear();


            dates[1]= selectedDate;
            dates[1].setDate(selectedDate.getDate()+1);
            dates[1]=dates[1].getDate()+"-"+(dates[1].getMonth()+1)+"-"+dates[1].getFullYear();

            dates[2]= selectedDate;
            dates[2].setDate(selectedDate.getDate()+1);
            dates[2]=dates[2].getDate()+"-"+(dates[2].getMonth()+1)+"-"+dates[2].getFullYear();

            dates[3]= selectedDate;
            dates[3].setDate(selectedDate.getDate()+1);
            dates[3]=dates[3].getDate()+"-"+(dates[3].getMonth()+1)+"-"+dates[3].getFullYear();

            dates[4]= selectedDate;
            dates[4].setDate(selectedDate.getDate()+1);
            dates[4]=dates[4].getDate()+"-"+(dates[4].getMonth()+1)+"-"+dates[4].getFullYear();

            dates[5]= selectedDate;
            dates[5].setDate(selectedDate.getDate()+1);
            dates[5]=dates[5].getDate()+"-"+(dates[5].getMonth()+1)+"-"+dates[5].getFullYear();

            dates[6]= selectedDate;
            dates[6].setDate(selectedDate.getDate()+1);
            dates[6]=dates[6].getDate()+"-"+(dates[6].getMonth()+1)+"-"+dates[6].getFullYear();

            dates[7]= selectedDate;
            dates[7].setDate(selectedDate.getDate()+1);
            dates[7]=dates[7].getDate()+"-"+(dates[7].getMonth()+1)+"-"+dates[7].getFullYear();

            dates[8]= selectedDate;
            dates[8].setDate(selectedDate.getDate()+1);
            dates[8]=dates[8].getDate()+"-"+(dates[8].getMonth()+1)+"-"+dates[8].getFullYear();

            dates[9]= selectedDate;
            dates[9].setDate(selectedDate.getDate()+1);
            dates[9]=dates[9].getDate()+"-"+(dates[9].getMonth()+1)+"-"+dates[9].getFullYear();
        }
        else if (sessionStorage.currentProgram =="10Day Xcelerator")
        {
            dates = new Array();
            dates[0]= selectedDate;
            dates[0].setDate(selectedDate.getDate()+0);
            dates[0]=dates[0].getDate()+"-"+(dates[0].getMonth()+1)+"-"+dates[0].getFullYear();


            dates[1]= selectedDate;
            dates[1].setDate(selectedDate.getDate()+1);
            dates[1]=dates[1].getDate()+"-"+(dates[1].getMonth()+1)+"-"+dates[1].getFullYear();

            dates[2]= selectedDate;
            dates[2].setDate(selectedDate.getDate()+1);
            dates[2]=dates[2].getDate()+"-"+(dates[2].getMonth()+1)+"-"+dates[2].getFullYear();

            dates[3]= selectedDate;
            dates[3].setDate(selectedDate.getDate()+1);
            dates[3]=dates[3].getDate()+"-"+(dates[3].getMonth()+1)+"-"+dates[3].getFullYear();

            dates[4]= selectedDate;
            dates[4].setDate(selectedDate.getDate()+1);
            dates[4]=dates[4].getDate()+"-"+(dates[4].getMonth()+1)+"-"+dates[4].getFullYear();

            dates[5]= selectedDate;
            dates[5].setDate(selectedDate.getDate()+1);
            dates[5]=dates[5].getDate()+"-"+(dates[5].getMonth()+1)+"-"+dates[5].getFullYear();

            dates[6]= selectedDate;
            dates[6].setDate(selectedDate.getDate()+1);
            dates[6]=dates[6].getDate()+"-"+(dates[6].getMonth()+1)+"-"+dates[6].getFullYear();

            dates[7]= selectedDate;
            dates[7].setDate(selectedDate.getDate()+1);
            dates[7]=dates[7].getDate()+"-"+(dates[7].getMonth()+1)+"-"+dates[7].getFullYear();

            dates[8]= selectedDate;
            dates[8].setDate(selectedDate.getDate()+1);
            dates[8]=dates[8].getDate()+"-"+(dates[8].getMonth()+1)+"-"+dates[8].getFullYear();

            dates[9]= selectedDate;
            dates[9].setDate(selectedDate.getDate()+1);
            dates[9]=dates[9].getDate()+"-"+(dates[9].getMonth()+1)+"-"+dates[9].getFullYear();
        }
        else if (sessionStorage.currentProgram =="5Day Xcelerator")
        {
            dates = new Array();
            dates[0]= selectedDate;
            dates[0].setDate(selectedDate.getDate()+0);
            dates[0]=dates[0].getDate()+"-"+(dates[0].getMonth()+1)+"-"+dates[0].getFullYear();


            dates[1]= selectedDate;
            dates[1].setDate(selectedDate.getDate()+1);
            dates[1]=dates[1].getDate()+"-"+(dates[1].getMonth()+1)+"-"+dates[1].getFullYear();

            dates[2]= selectedDate;
            dates[2].setDate(selectedDate.getDate()+1);
            dates[2]=dates[2].getDate()+"-"+(dates[2].getMonth()+1)+"-"+dates[2].getFullYear();

            dates[3]= selectedDate;
            dates[3].setDate(selectedDate.getDate()+1);
            dates[3]=dates[3].getDate()+"-"+(dates[3].getMonth()+1)+"-"+dates[3].getFullYear();

            dates[4]= selectedDate;
            dates[4].setDate(selectedDate.getDate()+1);
            dates[4]=dates[4].getDate()+"-"+(dates[4].getMonth()+1)+"-"+dates[4].getFullYear();

        }
        else{

            dates = new Array();
            dates[0]= selectedDate;
            dates[0].setDate(selectedDate.getDate()+0);
            dates[0]=dates[0].getDate()+"-"+(dates[0].getMonth()+1)+"-"+dates[0].getFullYear();


            dates[1]= selectedDate;
            dates[1].setDate(selectedDate.getDate()+1);
            dates[1]=dates[1].getDate()+"-"+(dates[1].getMonth()+1)+"-"+dates[1].getFullYear();

            dates[2]= selectedDate;
            dates[2].setDate(selectedDate.getDate()+1);
            dates[2]=dates[2].getDate()+"-"+(dates[2].getMonth()+1)+"-"+dates[2].getFullYear();

            dates[3]= selectedDate;
            dates[3].setDate(selectedDate.getDate()+1);
            dates[3]=dates[3].getDate()+"-"+(dates[3].getMonth()+1)+"-"+dates[3].getFullYear();

            dates[4]= selectedDate;
            dates[4].setDate(selectedDate.getDate()+1);
            dates[4]=dates[4].getDate()+"-"+(dates[4].getMonth()+1)+"-"+dates[4].getFullYear();

            dates[5]= selectedDate;
            dates[5].setDate(selectedDate.getDate()+1);
            dates[5]=dates[5].getDate()+"-"+(dates[5].getMonth()+1)+"-"+dates[5].getFullYear();

            dates[6]= selectedDate;
            dates[6].setDate(selectedDate.getDate()+1);
            dates[6]=dates[6].getDate()+"-"+(dates[6].getMonth()+1)+"-"+dates[6].getFullYear();

            dates[7]= selectedDate;
            dates[7].setDate(selectedDate.getDate()+1);
            dates[7]=dates[7].getDate()+"-"+(dates[7].getMonth()+1)+"-"+dates[7].getFullYear();

            dates[8]= selectedDate;
            dates[8].setDate(selectedDate.getDate()+1);
            dates[8]=dates[8].getDate()+"-"+(dates[8].getMonth()+1)+"-"+dates[8].getFullYear();

            dates[9]= selectedDate;
            dates[9].setDate(selectedDate.getDate()+1);
            dates[9]=dates[9].getDate()+"-"+(dates[9].getMonth()+1)+"-"+dates[9].getFullYear();

            dates[10]= selectedDate;
            dates[10].setDate(selectedDate.getDate()+1);
            dates[10]=dates[10].getDate()+"-"+(dates[10].getMonth()+1)+"-"+dates[10].getFullYear();

            dates[11]= selectedDate;
            dates[11].setDate(selectedDate.getDate()+1);
            dates[11]=dates[11].getDate()+"-"+(dates[11].getMonth()+1)+"-"+dates[11].getFullYear();

            dates[12]= selectedDate;
            dates[12].setDate(selectedDate.getDate()+1);
            dates[12]=dates[12].getDate()+"-"+(dates[12].getMonth()+1)+"-"+dates[12].getFullYear();

            dates[13]= selectedDate;
            dates[13].setDate(selectedDate.getDate()+1);
            dates[13]=dates[13].getDate()+"-"+(dates[13].getMonth()+1)+"-"+dates[13].getFullYear();

            dates[14]= selectedDate;
            dates[14].setDate(selectedDate.getDate()+1);
            dates[14]=dates[14].getDate()+"-"+(dates[14].getMonth()+1)+"-"+dates[14].getFullYear();

            dates[15]= selectedDate;
            dates[15].setDate(selectedDate.getDate()+1);
            dates[15]=dates[15].getDate()+"-"+(dates[15].getMonth()+1)+"-"+dates[15].getFullYear();

            dates[16]= selectedDate;
            dates[16].setDate(selectedDate.getDate()+1);
            dates[16]=dates[16].getDate()+"-"+(dates[16].getMonth()+1)+"-"+dates[16].getFullYear();

            dates[17]= selectedDate;
            dates[17].setDate(selectedDate.getDate()+1);
            dates[17]=dates[17].getDate()+"-"+(dates[17].getMonth()+1)+"-"+dates[17].getFullYear();

            dates[18]= selectedDate;
            dates[18].setDate(selectedDate.getDate()+1);
            dates[18]=dates[18].getDate()+"-"+(dates[18].getMonth()+1)+"-"+dates[18].getFullYear();

            dates[19]= selectedDate;
            dates[19].setDate(selectedDate.getDate()+1);
            dates[19]=dates[19].getDate()+"-"+(dates[19].getMonth()+1)+"-"+dates[19].getFullYear();
        }
    }
    else{


        if(upsell==true){
            dates = new Array();
            dates[0]= selectedDate;
            dates[0].setDate(selectedDate.getDate()+0);
            dates[0]=dates[0].getDate()+"-"+(dates[0].getMonth()+1)+"-"+dates[0].getFullYear();

            dates[1]= selectedDate;
            dates[1].setDate(selectedDate.getDate()+1);
            dates[1]=dates[1].getDate()+"-"+(dates[1].getMonth()+1)+"-"+dates[1].getFullYear();

            dates[2]= selectedDate;
            dates[2].setDate(selectedDate.getDate()+1);
            dates[2]=dates[2].getDate()+"-"+(dates[2].getMonth()+1)+"-"+dates[2].getFullYear();

            dates[3]= selectedDate;
            dates[3].setDate(selectedDate.getDate()+1);
            dates[3]=dates[3].getDate()+"-"+(dates[3].getMonth()+1)+"-"+dates[3].getFullYear();

            dates[4]= selectedDate;
            dates[4].setDate(selectedDate.getDate()+1);
            dates[4]=dates[4].getDate()+"-"+(dates[4].getMonth()+1)+"-"+dates[4].getFullYear();

            dates[5]= selectedDate;
            dates[5].setDate(selectedDate.getDate()+3);
            dates[5]=dates[5].getDate()+"-"+(dates[5].getMonth()+1)+"-"+dates[5].getFullYear();

            dates[6]= selectedDate;
            dates[6].setDate(selectedDate.getDate()+1);
            dates[6]=dates[6].getDate()+"-"+(dates[6].getMonth()+1)+"-"+dates[6].getFullYear();

            dates[7]= selectedDate;
            dates[7].setDate(selectedDate.getDate()+1);
            dates[7]=dates[7].getDate()+"-"+(dates[7].getMonth()+1)+"-"+dates[7].getFullYear();

            dates[8]= selectedDate;
            dates[8].setDate(selectedDate.getDate()+1);
            dates[8]=dates[8].getDate()+"-"+(dates[8].getMonth()+1)+"-"+dates[8].getFullYear();

            dates[9]= selectedDate;
            dates[9].setDate(selectedDate.getDate()+1);
            dates[9]=dates[9].getDate()+"-"+(dates[9].getMonth()+1)+"-"+dates[9].getFullYear();
        }
        else
        {
            dates = new Array();
            dates[0]= selectedDate;
            dates[0].setDate(selectedDate.getDate()+0);
            dates[0]=dates[0].getDate()+"-"+(dates[0].getMonth()+1)+"-"+dates[0].getFullYear();


            dates[1]= selectedDate;
            dates[1].setDate(selectedDate.getDate()+1);
            dates[1]=dates[1].getDate()+"-"+(dates[1].getMonth()+1)+"-"+dates[1].getFullYear();

            dates[2]= selectedDate;
            dates[2].setDate(selectedDate.getDate()+1);
            dates[2]=dates[2].getDate()+"-"+(dates[2].getMonth()+1)+"-"+dates[2].getFullYear();

            dates[3]= selectedDate;
            dates[3].setDate(selectedDate.getDate()+1);
            dates[3]=dates[3].getDate()+"-"+(dates[3].getMonth()+1)+"-"+dates[3].getFullYear();

            dates[4]= selectedDate;
            dates[4].setDate(selectedDate.getDate()+1);
            dates[4]=dates[4].getDate()+"-"+(dates[4].getMonth()+1)+"-"+dates[4].getFullYear();
        }
    }
    sessionStorage.dates = dates;
}

function setMailDescription(CatalogProgram,upsell){
    jQuery("div.catProdAttributeItem select option[value='']").remove();
    var selectedIndex;
    var selectedQuantity = jQuery("div#packaddtocart input.productTextInput").val();
    jQuery("div#packattr select option").each(function(){
        if(jQuery(this).val()== jQuery("div#packattr select").val()){
            selectedIndex= jQuery(this).index();
        }
    });
    jQuery("table.productTable tr").each(function(){
        jQuery(this).find("input.productTextInput").val(selectedQuantity);
    });

    if(selectedIndex==0){
        jQuery("table.productTable tr").each(function(){
            if(jQuery(this).find("li.attribute select option:nth-child(1)").val()){
                jQuery(this).find("li.attribute select").val(jQuery(this).find("li.attribute select option:nth-child(1)").val());
            }
        });
    }else{
        jQuery("table.productTable tr").each(function(){
            if(jQuery(this).find("li.attribute option:nth-child(2)").val()){
                jQuery(this).find("li.attribute select").val(jQuery(this).find("li.attribute select option:nth-child(2)").val());
            }
        });
    }
    var selectedDate = jQuery("input#actualdate").val();
    if(selectedDate){
        getArrayofDate(selectedDate,CatalogProgram,upsell);
    }
}

function dayProductDetails(){

    this.stringInfo=""
    this.catalogID="";
    this.productID="";

}

function initDayProductDetails(CatalogProgram){
    arrayDay = new Array();
    var arrayDetoxName = new Array("Day 1 Detox","Day 2 Detox","Day 3 Detox","Day 4 Detox","Day 5 Detox","Day 6 Detox","Day 7 Detox","Day 8 Detox","Day 9 Detox","Day 10 Detox","Day 11 Detox","Day 12 Detox","Day 13 Detox","Day 14 Detox","Day 15 Detox","Day 16 Detox","Day 17 Detox","Day 18 Detox","Day 19 Detox","Day 20 Detox");
    var arrayCleanseName = new Array("Day 1 Cleanse","Day 2 Cleanse","Day 3 Cleanse","Day 4 Cleanse","Day 5 Cleanse","Day 1 Week 2 Cleanse","Day 2 Week 2 Cleanse","Day 3 Week 2 Cleanse","Day 4 Week 2 Cleanse","Day 5 Week 2 Cleanse");
    //-----------------xcelerator-----------------------------------------------
    var arrayXceleratorName =  new Array("Day 1 Xcelerator","Day 2 Xcelerator","Day 3 Xcelerator","Day 4 Xcelerator","Day 5 Xcelerator","Day 6 Xcelerator","Day 7 Xcelerator","Day 8 Xcelerator","Day 9 Xcelerator","Day 10 Xcelerator","Day 11 Xcelerator","Day 12 Xcelerator","Day 13 Xcelerator","Day 14 Xcelerator","Day 15 Xcelerator","Day 16 Xcelerator","Day 17 Xcelerator","Day 18 Xcelerator","Day 19 Xcelerator","Day 20 Xcelerator");
    //-----------------xcelerator-----------------------------------------------
    var productCounter =0;

    if(CatalogProgram=="5Day Cleanse"){
        jQuery.each(arrayCleanseName,function(){
            jQuery("table.productTable tr").each(function(){
                if(jQuery(this).find("li.namee").text().trim()==arrayCleanseName[productCounter]){
                    arrayDay[productCounter] = new dayProductDetails();
                    arrayDay[productCounter].stringInfo = jQuery(this).find("li.quantity input.productSubmitInput").attr("onclick").toString();
                    arrayDay[productCounter].stringInfo = (arrayDay[productCounter]).stringInfo.split(",");
                    arrayDay[productCounter].productID = arrayDay[productCounter].stringInfo[1];
                    arrayDay[productCounter].catalogID = (arrayDay[productCounter].stringInfo[0]).split("(");
                    arrayDay[productCounter].catalogID = arrayDay[productCounter].catalogID[1];
                    // arrayDay[productCounter].catalogID = arrayDay[productCounter].catalogID[2];
                    productCounter++;
                }
            });
        });

    }
    else if(CatalogProgram=="10Day Detox"){
        jQuery.each(arrayDetoxName,function(){
            jQuery("table.productTable tr").each(function(){
                if(jQuery(this).find("li.namee").text().trim()==arrayDetoxName[productCounter]){
                    arrayDay[productCounter] = new dayProductDetails();
                    arrayDay[productCounter].stringInfo = jQuery(this).find("li.quantity input.productSubmitInput").attr("onclick").toString();
                    arrayDay[productCounter].stringInfo = (arrayDay[productCounter]).stringInfo.split(",");
                    arrayDay[productCounter].productID = arrayDay[productCounter].stringInfo[1];
                    arrayDay[productCounter].catalogID = (arrayDay[productCounter].stringInfo[0]).split("(");
                    arrayDay[productCounter].catalogID = arrayDay[productCounter].catalogID[1];
                    // arrayDay[productCounter].catalogID = arrayDay[productCounter].catalogID[2];
                    productCounter++;
                }
            });
        });
    }
    else if(CatalogProgram=="20Day Xcelerator" || CatalogProgram=="5Day Xcelerator" || CatalogProgram=="10Day Xcelerator"){
        jQuery.each(arrayXceleratorName,function(){
            jQuery("table.productTable tr").each(function(){
                if(jQuery(this).find("li.namee").text().trim()==arrayXceleratorName[productCounter]){

                    arrayDay[productCounter] = new dayProductDetails();
                    arrayDay[productCounter].stringInfo = jQuery(this).find("li.quantity input.productSubmitInput").attr("onclick").toString();
                    arrayDay[productCounter].stringInfo = (arrayDay[productCounter]).stringInfo.split(",");
                    arrayDay[productCounter].productID = arrayDay[productCounter].stringInfo[1];
                    arrayDay[productCounter].catalogID = (arrayDay[productCounter].stringInfo[0]).split("(");

                    //BEFORE
                    // arrayDay[productCounter].catalogID = arrayDay[productCounter].catalogID[2];
                    arrayDay[productCounter].catalogID = arrayDay[productCounter].catalogID[1];

                    productCounter++;

                }
            });
        });
    }


}



function Upsell5DayCleanse(CatalogProgram,catalogID,arrayDay,upsell){
    var stringdate = jQuery("input#actualdate").val();
    if(CatalogProgram=="5Day Cleanse"){
        stringdate = stringdate.split("/");
        var day = stringdate[0];
        if(day[0]=="0"){
            day= day.substring(1);
        }
        day=parseInt(day);
        var month = stringdate[1];
        if(month[0]=="0"){
            month= month.substring(1);
        }
        month=parseInt(month);
        month=month-1;
        var year = stringdate[2];
        if(year[0]=="0"){
            year= year.suebstring(1);
        }
        year= parseInt(year);
        var selectedDate =  new calcTime();
        selectedDate.setDate(day);
        selectedDate.setMonth(month);
        selectedDate.setYear(year);

        setMailDescription(CatalogProgram,upsell);
        AddToCart(arrayDay[0].catalogID.trim(),arrayDay[0].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[1].catalogID.trim(),arrayDay[1].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[2].catalogID.trim(),arrayDay[2].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[3].catalogID.trim(),arrayDay[3].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[4].catalogID.trim(),arrayDay[4].productID.trim(),'_blank',3,false);
        var selectedDate = jQuery("input#actualdate").val();
        if(selectedDate){
            getArrayofDate(selectedDate,CatalogProgram,upsell);
        }
        return false;

    }
}




function getActiveMenu(){
    var cmpActiveMenu = sessionStorage.activeMenu;
    var activeMenu = jQuery.secureEvalJSON(cmpActiveMenu);
    return activeMenu;
}

function checkProgramCookies(){
    if(!sessionStorage.activeMenu){
        alert("Your session is expired");
        window.location.href = "/home.htm#unautorized-access";
        return false;
    }
}

function getDetoxDays(){
    var detoxdays =  sessionStorage.detoxdays;
    return detoxdays;
}

function setProgramBasedOnSelectedCatalog(){
    var CatalogProgram = jQuery("div.breadcrumbs #info-tag a").text();
    CatalogProgram=CatalogProgram.split("-");
    var currentWeek = CatalogProgram[3];
    var sub1= CatalogProgram[0];
    var sub2= CatalogProgram[1];
    CatalogProgram= CatalogProgram[0]+" "+CatalogProgram[1];

    var currentProgram = sessionStorage.currentProgram;
    if(currentProgram != CatalogProgram){
        if(currentProgram!="20Day Overhaul" && CatalogProgram!="10Day Detox" && CatalogProgram!="20Day Xcelerator" && CatalogProgram!="5Day Xcelerator" && CatalogProgram!="10Day Xcelerator"){
            //delete_cookie("CartID");
        }
    }
    var detoxdays = getDetoxDays();

    /*
     if(CatalogProgram=="10Day Detox"){
     if(detoxdays=="10 Days"){
     CatalogProgram="10Day Detox";
     }else{
     CatalogProgram="20Day Overhaul";
     }
     }
     */

    sessionStorage.currentProgram = CatalogProgram;

}

function setBackButonLink(){
    jQuery("div.back").click(function nextCustomerStatus(){
        jQuery("div#customer-status").show();
        jQuery("div.login-form").hide();
    });
}

function getCatalogProgram(){
    var catalogProgram = sessionStorage.currentProgram;
    return catalogProgram;
}

function hideDetoxMenu(){
    jQuery("div#create-selection").hide();
}

function resetShoppingCart(){
    if(get_cookie("CartID")){
        delete_cookie("CartID");
        location.reload(true);
    }
}

function setDetoxPackagePrice(CatalogProgram){
    var selectedItem;
    var addToCartTextBox;
    var attribute;
    var price;
    if(CatalogProgram=="10Day Detox"){
        jQuery("table.productTable tr").each(function(){
            if(jQuery(this).find("li.namee").text().trim()=="10 Day Detox Program Package"){
                //selectedItem = jQuery(this).find("li.description").html();
                selectedItem = "10 DAY CLEANSE PROGRAM Package";
                addToCartTextBox = jQuery(this).find("li.quantity").html();
                attribute = jQuery(this).find("li.attribute").html();
                price = jQuery(this).find("li.price").html();
            }
        });
    }else if(CatalogProgram=="20Day Xcelerator"){
        jQuery("table.productTable tr").each(function(){
            if(jQuery(this).find("li.namee").text().trim()=="20 Day Xcelerator Program Package"){
                //selectedItem = jQuery(this).find("li.description").html();
                selectedItem = "20 DAY CLEAN+LEAN PROGRAM PACKAGE";
                addToCartTextBox = jQuery(this).find("li.quantity").html();
                attribute = jQuery(this).find("li.attribute").html();
                price = jQuery(this).find("li.price").html();
            }
        });
    }else if(CatalogProgram=="5Day Xcelerator"){
        jQuery("table.productTable tr").each(function(){
            if(jQuery(this).find("li.namee").text().trim()=="5 Day Xcelerator Program Package"){
                //selectedItem = jQuery(this).find("li.description").html();
                selectedItem = "5 DAY CLEAN+LEAN PROGRAM PACKAGE";
                addToCartTextBox = jQuery(this).find("li.quantity").html();
                attribute = jQuery(this).find("li.attribute").html();
                price = jQuery(this).find("li.price").html();
            }
        });
    }
    else if(CatalogProgram=="10Day Xcelerator"){
        jQuery("table.productTable tr").each(function(){
            if(jQuery(this).find("li.namee").text().trim()=="10 Day Xcelerator Program Package"){
                //selectedItem = jQuery(this).find("li.description").html();
                selectedItem = "10 DAY CLEAN+LEAN PROGRAM PACKAGE";
                addToCartTextBox = jQuery(this).find("li.quantity").html();
                attribute = jQuery(this).find("li.attribute").html();
                price = jQuery(this).find("li.price").html();
            }
        });
    }

    else{
        jQuery("table.productTable tr").each(function(){
            if(jQuery(this).find("li.namee").text().trim()=="5 Day Cleanse Program Package"){
                //selectedItem = jQuery(this).find("li.description").html();
                selectedItem = "5 DAY CLEANSE PROGRAM Package";
                addToCartTextBox = jQuery(this).find("li.quantity").html();
                attribute = jQuery(this).find("li.attribute").html();
                price = jQuery(this).find("li.price").html();
            }
        });
    }

    if(CatalogProgram=="10Day Detox"){
        if(sessionStorage.detoxdays){
            if(sessionStorage.detoxdays=="20 Days"){
                selectedItem = "20 DAY CLEANSE PROGRAM Package";
            }
        }
    }

    selectedItem = selectedItem.split(" ",4);

    jQuery("span#packdesc a").html(selectedItem[0] + " " + selectedItem[1] + " " + selectedItem[2] + " " + selectedItem[3]);
    jQuery("div#packprice").html(price);
    jQuery("div#packattr").html(attribute);
    jQuery("div#packaddtocart").html(addToCartTextBox);
}

function bindAddingMealFunctionDetoxProgram(CatalogProgram,upsell){

    var functions;
    if(CatalogProgram=="10Day Detox"){
        functions = "setMailDescription('"+CatalogProgram+"',"+upsell+");addingItemTo10DayDetoxProgram();";
        if(sessionStorage.detoxdays){
            if(sessionStorage.detoxdays=="20 Days"){
                functions = "setMailDescription('"+CatalogProgram+"',"+upsell+");addingItemTo20DayOverhaulProgram();";
            }
        }
    }else if (CatalogProgram=="5Day Cleanse"){
        functions = "setMailDescription('"+CatalogProgram+"',"+upsell+"); Upsell5DayCleanse('"+CatalogProgram+"',"+arrayDay[0].catalogID+",arrayDay,"+upsell+");";
    }else if(CatalogProgram=="20Day Xcelerator"){
        functions = "setMailDescription('"+CatalogProgram+"',"+upsell+"); addingItemTo20DayXceleratorProgram();";
    }else if(CatalogProgram=="5Day Xcelerator"){
        functions = "setMailDescription('"+CatalogProgram+"',"+upsell+"); addingItemTo5DayXceleratorProgram();";
    }else if(CatalogProgram=="10Day Xcelerator"){
        functions = "setMailDescription('"+CatalogProgram+"',"+upsell+"); addingItemTo10DayXceleratorProgram();";
    }

    jQuery("#packaddtocart input.productSubmitInput").removeAttr("onclick");
    var js = functions+"rwViewcartLink();";
    var newclick = new Function(js);
    jQuery("div#packaddtocart .productSubmitInput").click(newclick);
}

function bindUpSellFunction(CatalogProgram,upsell){
    jQuery("#5day-upsell a#upsellyes").click(function(){
        setMailDescription(CatalogProgram,upsell);
        upsell=true;
        var selectedDate = jQuery("input#actualdate").val();
        AddToCart(arrayDay[0].catalogID.trim(),arrayDay[0].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[1].catalogID.trim(),arrayDay[1].productID.trim(),'_blank',3,false);AddToCart(arrayDay[2].catalogID.trim(),arrayDay[2].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[3].catalogID.trim(),arrayDay[3].productID.trim(),'_blank',3,false);AddToCart(arrayDay[4].catalogID.trim(),arrayDay[4].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[5].catalogID.trim(),arrayDay[5].productID.trim(),'_blank',3,false);AddToCart(arrayDay[6].catalogID.trim(),arrayDay[6].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[7].catalogID.trim(),arrayDay[7].productID.trim(),'_blank',3,false);AddToCart(arrayDay[8].catalogID.trim(),arrayDay[8].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[9].catalogID.trim(),arrayDay[9].productID.trim(),'_blank',3,false);
        jQuery("#5day-upsell").dialog("close");
        if(selectedDate){
            getArrayofDate(selectedDate,CatalogProgram,upsell);
        }
    });

    jQuery("#5day-upsell a#upsellno").click(function(){
        jQuery("#5day-upsell").dialog("close");
        upsell=false;
        var selectedDate = jQuery("input#actualdate").val();

        setMailDescription(CatalogProgram,upsell);
        AddToCart(arrayDay[0].catalogID.trim(),arrayDay[0].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[1].catalogID.trim(),arrayDay[1].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[2].catalogID.trim(),arrayDay[2].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[3].catalogID.trim(),arrayDay[3].productID.trim(),'_blank',3,false);
        AddToCart(arrayDay[4].catalogID.trim(),arrayDay[4].productID.trim(),'_blank',3,false);
        if(selectedDate){
            getArrayofDate(selectedDate,CatalogProgram,upsell);
        }
    });
    jQuery("span.date").show();
    addDateEachDayMenu(upsell);
}

function removeTextAddToCartButton(){
    $(window).load(function() {
        changeValue();
    });
}

function bindMenuSelection(CatalogProgram,upsell){
    jQuery("#create-selection").click(function(){
        getSelectedMenu(CatalogProgram);
        var selectedDate = jQuery("input#actualdate").val();
        getArrayofDate(selectedDate,CatalogProgram,upsell);
    });
}

function bindPopUpDate(CatalogProgram,upsell){

    jQuery('input#actualdate').datepicker()
        .on("change", function (e) {
            getSelectedMenu(CatalogProgram);
            var selectedDate = jQuery("input#actualdate").val();
            if (selectedDate) {
                getArrayofDate(selectedDate, CatalogProgram, upsell);
            }
        });



    /*
     jQuery("input#actualdate").datepicker({
     onSelect: function(){

     console.log('entrou');

     getSelectedMenu(CatalogProgram);
     var selectedDate = jQuery("input#actualdate").val();
     if (selectedDate) {
     getArrayofDate(selectedDate, CatalogProgram, upsell);
     }
     }
     });
     */
}

function bindHoverFunctionBackButton(){
    jQuery("#cart2 .backbut_catalog img").hover(function(){
        jQuery(this).attr("src","/img/back-button-hover.jpg");
    },function(){
        jQuery(this).attr("src","/img/back-button.jpg");
    });
}


function disableDinner2Detox(){
    jQuery("#menu-wrapper div.table-menu div.dinner1 div.meal-type").append("*")
    if(jQuery("#menu-wrapper div.table-menu div.dinner2").html()){
        jQuery("#menu-wrapper div.table-menu div.dinner2 div.meal-type").html(" ");
        jQuery("#menu-wrapper div.table-menu div.dinner2").html("<div style='margin-left:20px'>* Some dietary requirements can be catered for please contact the office  1300 30 29 30</div> ");
    }
}

function bindSelectDate(CatalogProgram,upsell){
    jQuery("#packattr select").change(function(){
        setMailDescription(CatalogProgram,upsell);
        var selectedDate = jQuery("input#actualdate").val();
        if(selectedDate){
            getArrayofDate(selectedDate,CatalogProgram,upsell);
        }
    });
}

function bindDetoxButton(CatalogProgram,upsell){
    if(jQuery("div#packattr").find("select option:nth-child(2)").html()=="Large + $56.61"){
        jQuery("div#packattr").find("select option:nth-child(2)").html("Large + $60");
        var selectedDate = jQuery("input#actualdate").val();
        if(selectedDate){
            getArrayofDate(selectedDate,CatalogProgram,upsell);
        }
    }
    if(jQuery("div#packattr").find("select option:nth-child(2)").html()=="Large + $37.74"){
        jQuery("div#packattr").find("select option:nth-child(2)").html("Large + $40");
        var selectedDate = jQuery("input#actualdate").val();
        if(selectedDate){
            getArrayofDate(selectedDate,CatalogProgram,upsell);
        }
    }

    if(jQuery("div#packattr").find("select option:nth-child(2)").html()=="Large + $150.94"){
        jQuery("div#packattr").find("select option:nth-child(2)").html("Large + $160.00");
        var selectedDate = jQuery("input#actualdate").val();
        if(selectedDate){
            getArrayofDate(selectedDate,CatalogProgram,upsell);
        }
    }
}

function redirect(address){
    window.location.href=address;
}
function setShoppingCartLink(){
    var shoppingCartLink = jQuery("a.cartSummaryLink").attr("href");
    jQuery("a.cartSummaryLink").addClass("eff_button");
    sessionStorage.shopingcart = shoppingCartLink;
}


function timeZoneDetector(){
    var timezone = jstz.determine();
    var tz = timezone.name();
    tz = tz.trim();
    if(tz!="Australia/Sydney"){
        jQuery("#login-healthy-eating").html("Sorry please change your timezone to Melbourne or Sydney in order to continue...");
    }
}


function updateDateWarning(){
    jQuery("#warning-date").html("Please select your start date. This program can only be started on a Monday, Wednesday or Friday");
}

function trimNumber(s) {
    while (s.substr(0,1) == '0' && s.length>1) {
        s = s.substr(1,9999);
    }
    return s;
}
function getDateConversion(dateString){
    var string = dateString.split("-");
    var date = new Date(trimNumber(string[2]),trimNumber(string[1])-1,trimNumber(string[0]));
    return date;
}


function checkMenuAgain(){
    $(window).load(function(){
        var finalMenu = getActiveMenu();
        if(finalMenu.length!=2){
            $("#login-healthy-eating").html("System Error.. Please come again next time");
            return false;
        }


        var finalfirstDate = getDateConversion(finalMenu[0].releaseDate);
        finalfirstDate = finalfirstDate.getTime();
        var finalsecondDate = getDateConversion(finalMenu[1].releaseDate);
        finalsecondDate = finalsecondDate.getTime();

        if(finalfirstDate >= finalsecondDate){
            $("#login-healthy-eating").html("System Error.. Please come again next time");
            return false;
        }

        if(!finalfirstDate){
            $("#login-healthy-eating").html("System Error.. Please come again next time");
            return false;
        }

        if(!finalsecondDate){
            $("#login-healthy-eating").html("System Error.. Please come again next time");
            return false;
        }
    });
}




jQuery(document).ready(function(){
    manageHtml();

    setProgramBasedOnSelectedCatalog();

    //remove the first option on each meal
    selectIntial();
    setBackButonLink();

    var heMenu = createMenuHE();
    var deMenu = createMenuDE();
    var xcMenu = createMenuXC();

    //readdata from module and write to them to the page
    readData(heMenu,deMenu);

    var CatalogProgram = getCatalogProgram();
    if(!CatalogProgram){
        alert('q');
        redirect("/home.htm");
    }

    var upsell=false;

    if(CatalogProgram=="Healthy Eating" || CatalogProgram=="Weight Loss" || CatalogProgram=="FiveMeal HealthyEating" || CatalogProgram=="TenMeal HealthyEating"){
        addDateEachDayMenu(upsell);
        hideDetoxMenu();
        jQuery("div.heading-login-panel a").show();

    }
    else if(CatalogProgram=="10Day Detox" || CatalogProgram=="5Day Cleanse"){
        //reset

        updateDateWarning();
        setDetoxPackagePrice(CatalogProgram);
        initDayProductDetails(CatalogProgram);
        bindAddingMealFunctionDetoxProgram(CatalogProgram,upsell);
        bindUpSellFunction(CatalogProgram,upsell);
        bindMenuSelection(CatalogProgram,upsell);
        bindPopUpDate(CatalogProgram,upsell);
        disableDinner2Detox();
        bindSelectDate(CatalogProgram,upsell);
        bindDetoxButton(CatalogProgram,upsell);

    }else if(CatalogProgram=="20Day Xcelerator" || CatalogProgram=="5Day Xcelerator" || CatalogProgram=="10Day Xcelerator"){

        setDetoxPackagePrice(CatalogProgram);
        initDayProductDetails(CatalogProgram);
        bindAddingMealFunctionDetoxProgram(CatalogProgram,upsell);
        bindUpSellFunction(CatalogProgram,upsell);
        bindMenuSelection(CatalogProgram,upsell);
        bindPopUpDate(CatalogProgram,upsell);
        bindSelectDate(CatalogProgram,upsell);
        bindDetoxButton(CatalogProgram,upsell);
        //disableDinner2Detox();
    }
    rwViewcartLink();
    removeTextAddToCartButton();
    bindHoverFunctionBackButton();
    timeZoneDetector();
    checkMenuAgain();



    /* XMAS DATE */
    var cDate = new Date().getDate();
    var cYear = new Date().getFullYear();
    var cMonth = new Date().getMonth();
    // jQuery('input#datepicker, a').click(function(){

    jQuery('input#actualdate').click(function(){



        if(cYear == 2015 && cMonth == 0 && cDate >= 25){
            // jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(24)').closest('td').removeClass();
            // jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(24)').closest('td').addClass(' ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined');
            // jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(24)').closest('td').html('<span class="ui-state-default">24</span>');

            // jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(25)').closest('td').removeClass();
            // jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(25)').closest('td').addClass(' ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined');
            // jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(25)').closest('td').html('<span class="ui-state-default">25</span>');


            jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(26)').closest('td').removeClass();
            jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(26)').closest('td').addClass(' ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined');
            jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(26)').closest('td').html('<span class="ui-state-default">26</span>');

            jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(27)').closest('td').removeClass();
            jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(27)').closest('td').addClass(' ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined');
            jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(27)').closest('td').html('<span class="ui-state-default">27</span>');

            // jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(28)').closest('td').removeClass();
            // jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(28)').closest('td').addClass(' ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined');
            // jQuery('#ui-datepicker-div .ui-datepicker-calendar td a:contains(28)').closest('td').html('<span class="ui-state-default">28</span>');

        }



    }); //click


    /* END XMAS DATE */


});


