toggleElement = function toggleelement(id){
    var finalId = '#'+id;
    $(finalId).toggle("fast","linear");
}


toggleElement1 = function toggleelement1(id){
    var finalId = '#'+id;
    $(finalId).toggle();
}


TestAlert = function(message){
    alert(message);
}

updateBMI =  function updatebmi(id){



    var data = Appusers.findOne({_id:id});
    var height = data.height;
    height = height.replace('"','');
    var heightdata = height.split("'");

    var bmi = "";

    if(isNaN(Math.round((heightdata[1]/12)*10))){
        bmi = "n/a";
    }
    else if(isNaN(data.weight)){
        bmi =  "n/a";
    }
    else{
        var computedHeight = parseFloat(heightdata[0]+'.'+(Math.round((heightdata[1]/12)*10)));
        computedHeight = computedHeight*0.3048;
        var finalweight = data.weight;

        bmi =  finalweight / (computedHeight*computedHeight);

        bmi = Math.round(bmi);

        if(bmi<18.5){bmi+=" (Underweight)";}
        else if(bmi>=18.5&&bmi<=24.9){bmi+=" (Normal)";}
        else if(bmi>=25&&bmi<30){bmi+=" (Overweight)";}
        else if(bmi>=30){bmi+=" (Obese)";}
        else if(bmi==0){bmi="n/a";}

        Appusers.update({_id:id},{
            $set:{
                bmi: bmi
            }
        },function(error,result){
            Validate2(error,Appusers,template);
        });
    }




}
