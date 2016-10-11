navigator.FCMNotification.fcmTokenID(function(tokenID){
        // retrun token id for notification service
        console.log("Token ID = " + tokenID);
        //Token ID use for call notification form FCM server.
     }, function(error){
        console.log(error);
     });
