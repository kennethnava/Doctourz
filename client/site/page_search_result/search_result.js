if(Meteor.isClient){
    Template.search_result_list.helpers({
        doctors: function(event){

                var specialization =  sessionStorage.getItem('seacrhSpecialization');
                var location = sessionStorage.getItem('searchLocation');


                //get the total personality score of the current user
                var userId = sessionStorage.getItem('userId');
                var result0 = Ratings.find({user_id: userId});
                var count0 = result0.count();
                var patientOverallScore=0;
                var patientScores = result0.fetch();

                for(var z=0;z<count0;z++){
                    patientOverallScore+=parseInt(patientScores[z].score);
                }

                //patient overall score
                patientOverallScore = (patientOverallScore/(count0*100))*100;



                Data =  new Mongo.Collection(null);

                var result1 = Appusers.find({status: "physician"});
                var count1 = result1.count();
                var doctors = result1.fetch();

                for(var a=0;a<count1; a++){
                    var currentDoctorId = doctors[a]._id;
                    var currentSpecialization = Specializations.findOne({doctor_id:currentDoctorId});

                    var concatName ="Dr. "+doctors[a].firstname+" "+doctors[a].middlename+" "+doctors[a].lastname;

                    //get the doctor's overall score
                    var result3 = Ratings.find({user_id: currentDoctorId});
                    var count3 = result3.count();
                    var doctorOverallScore=0;
                    var doctorScores = result3.fetch();

                    for(var x=0;x<count3;x++){
                        doctorOverallScore+=parseInt(doctorScores[x].score);
                    }

                    //patient overall score
                    doctorOverallScore = (doctorOverallScore/(count0*100))*100;

                    //compute for the match
                    var currentMatch = 0;
                    if(doctorOverallScore>patientOverallScore){
                        currentMatch =  100-(doctorOverallScore - patientOverallScore);
                    }
                    else if(doctorOverallScore<patientOverallScore){
                        currentMatch =  100-(patientOverallScore - doctorOverallScore);
                    }
                    else if(doctorOverallScore==patientOverallScore){
                        currentMatch = 100;
                    }



                    Data.insert({
                        avatar: doctors[a].avatar,
                        doctor_id: currentDoctorId,
                        name:concatName,
                        specialization: "Cardiology",
                        match: currentMatch+"%"
                    })
                }

            return Data.find({});



        }
    })

}