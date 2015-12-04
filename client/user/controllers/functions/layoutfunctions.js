if(Meteor.isClient){
    Meteor.startup(function(){
        $('.carousel').carousel({
            interval: false
        }),

            $('[data-toggle="tooltip"]').tooltip();

        updateLog();
        updateOnce();
    })
}
updateOnce = function updateonce(){
    var id = sessionStorage.getItem('userId');
    Appusers.update({_id:id},{$set:{last_login_string: Date.now()}});
}
updateLog = function updatelog(){

    var id = sessionStorage.getItem('userId');
    Appusers.update({_id:id},{$set:{last_login_string: Date.now()}});

    var now = parseInt(Date.now());
    now-=190000;
    var usersOnline =  Appusers.find({});
    var fetchedUsers = usersOnline.fetch();
    var num = usersOnline.count();
    console.log(fetchedUsers);
    for(var a=0;a<num; a++){
        console.log(fetchedUsers[a].last_login_string+" "+now+" updated");
    }

    setTimeout(updatelog, 180000);
}

toggleView = function toggleViewNow(id){
    var child =   document.getElementById(id);
    var s = child.style.left;

    //$("#notifications").toggle();

    if(s==""|| s=="-350px"){
        child.style.left="350px";
        unfade();
    }else if(s=="350px"){
        child.style.left="-350px";
        fade();
    }

}

fade = function fadenow () {
    document.getElementById("cover").style.display="none";
    document.getElementById('status').value = "false";

}

unfade = function unfadenow () {

    document.getElementById("cover").style.display="inline";
    document.getElementById('status').value = "true";
}

fadeActive = function fadeactive(){
    if(document.getElementById('notifications').style.left=="350px"){toggleView('notifications')}
    if(document.getElementById('healthProfile').style.left=="350px"){toggleView('healthProfile')}
    if(document.getElementById('physicianProfile').style.left=="350px"){toggleView('physicianProfile')}
    if(document.getElementById('dma').style.left=="350px"){toggleView('dma')}
    if(document.getElementById('consults').style.left=="350px"){toggleView('consults')}
    if(document.getElementById('answers').style.left=="350px"){toggleView('answers')}
    if(document.getElementById('doctorsMatches').style.left=="350px"){toggleView('doctorsMatches')}
    if(document.getElementById('files').style.left=="350px"){toggleView('files')}
    if(document.getElementById('topics').style.left=="350px"){toggleView('topics')}
    if(document.getElementById('peopleYouCareFor').style.left=="350px"){toggleView('peopleYouCareFor')}
    if(document.getElementById('inviteFriendsAndFamily').style.left=="350px"){toggleView('inviteFriendsAndFamily')}
    if(document.getElementById('helpAndSupport').style.left=="350px"){toggleView('helpAndSupport')}
    if(document.getElementById('settings').style.left=="350px"){toggleView('settings')}
    collapseSidebar();
}

expandSidebar = function expand(){
    document.getElementById('sidebar').style.width="350px";
    document.getElementById('name-section').style.visibility="visible";

}

collapseSidebar =  function collapse(){
    document.getElementById('sidebar').style.width="55px";
    document.getElementById('name-section').style.visibility="hidden";
}


childrenArray = [
    'notifications',
    'healthProfile',
    'dma',
    'consults',
    'answers',
    'doctorsMatches',
    'files',
    'topics',
    'peopleYouCareFor',
    'inviteFriendsAndFamily',
    'helpAndSupport',
    'settings'

];

collapseIfChecked = function collapseifchecked(){

    //var status = document.getElementById('status').value;
    //if(status=="false"){
     //   collapseSidebar();
   // }

}
