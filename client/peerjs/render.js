if (Meteor.isClient) {
    Template.telemed.onCreated(function () {
        // Create a Peer instance
        window.peer = new Peer({
            key: '6h2wjmj1r4sa714i',  // get a free key at http://peerjs.com/peerserver
            debug: 3,
            config: {'iceServers': [
                { url: 'stun:stun.l.google.com:19302' },
                { url: 'stun:stun1.l.google.com:19302' },
                {url:'stun:stun01.sipphone.com'},
                {url:'stun:stun.ekiga.net'},
                {url:'stun:stun.fwdnet.net'},
                {url:'stun:stun.ideasip.com'},
                {url:'stun:stun.iptel.org'},
                {url:'stun:stun.rixtelecom.se'},
                {url:'stun:stun.schlund.de'},
                {url:'stun:stun2.l.google.com:19302'},
                {url:'stun:stun3.l.google.com:19302'},
                {url:'stun:stun4.l.google.com:19302'},
                {url:'stun:stunserver.org'},
                {url:'stun:stun.softjoys.com'},
                {url:'stun:stun.voiparound.com'},
                {url:'stun:stun.voipbuster.com'},
                {url:'stun:stun.voipstunt.com'},
                {url:'stun:stun.voxgratia.org'},
                {url:'stun:stun.xten.com'},
                {
                    url: 'turn:numb.viagenie.ca',
                    credential: 'muazkh',
                    username: 'webrtc@live.com'
                },
                {
                    url: 'turn:192.158.29.39:3478?transport=udp',
                    credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
                    username: '28224511:1379330808'
                },
                {
                    url: 'turn:192.158.29.39:3478?transport=tcp',
                    credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
                    username: '28224511:1379330808'
                }
            ]}
        });

        // Handle event: upon opening our connection to the PeerJS server
        peer.on('open', function () {
            $('#myPeerId').text(peer.id);
        });

        // Handle event: remote peer receives a call
        peer.on('call', function (incomingCall) {
            window.currentCall = incomingCall;
            incomingCall.answer(window.localStream);
            incomingCall.on('stream', function (remoteStream) {
                window.remoteStream = remoteStream;
                var video = document.getElementById("theirVideo")
                video.src = URL.createObjectURL(remoteStream);
            });
        });

        peer.on('open', function () {
            $('#myPeerId').text(peer.id);
            var id = sessionStorage.getItem('userId');
            // update the current user's profile
            Appusers.update({_id:id}, {
                $set: {
                    peer_id:peer.id,
                    last_login: new Date()
                }
            });
        });


        navigator.getUserMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia );

        // get audio/video
        navigator.getUserMedia({audio:true, video: true}, function (stream) {
                //display video
                var video = document.getElementById("myVideo");
                video.src = URL.createObjectURL(stream);
                window.localStream = stream;
            },
            function (error) { console.log(error); }
        );

    });


    Template.telemed.events({
        "click #videocallNow": function () {
            var outgoingCall = peer.call($('#remotePeerId').val(), window.localStream);
            window.currentCall = outgoingCall;
            outgoingCall.on('stream', function (remoteStream) {
                window.remoteStream = remoteStream;
                var video = document.getElementById("theirVideo")
                video.src = URL.createObjectURL(remoteStream);
            });
        },

        "click #endCall": function () {
            window.currentCall.close();
        }
    });
}