let arr=[];
$(document).ready(function () {
    ajaxFunction();

});


function ajaxFunction() {
    for (let i = 0; i <= 5; i++){
        $.ajax({
            type: 'GET',
            url: 'https://api.kanye.rest',
            dataType: "json",
            success: function (data) {

                let jsStr = JSON.stringify(data);
                let jsObj = JSON.parse(jsStr);
                let p = $(".display")[i];
                let r =  $(".repeat")[i];
                p.append("" + jsObj.quote + "");
              //  console.log(jsStr);
                if(!arr.includes("jsStr"))
                    arr.push(jsStr);

               if(   arr.length > 2)
               {

                   var count = {};
                   arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
                   console.log(count[jsStr]);
                  r.append("repeat" + " " + count[jsStr] + "");
               }

            }
        });

    }


}