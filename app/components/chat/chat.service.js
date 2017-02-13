(function(){
    'use strict';

    angular.module('employeeDirectory').factory('ChatService', ChatService);

    var inject = ['BackendGateway'];
    function ChatService(BackendGateway) {

        return {
            getLastMessageId: getLastMessageId,
            getMessagesList: getMessagesList,
            postMessage: postMessage
        };

        function getMessagesList(messages, lastMessageId){
            return BackendGateway.post("ChatService", "getMessages", [lastMessageId])
                .then( function(response){
                        for(var i=0;i<response.data.chatMessages.length;i++){
                            messages.unshift(response.data.chatMessages[i]);
                        }
                        return messages;
                    });
        }

        function getLastMessageId(messages){
            if(messages.length>0){
                return messages[0].id;
            }
            return null;
        }

        function postMessage(newMessage, messages) {
            return BackendGateway.post("ChatService", "postMessage", [newMessage])
                .then( function(response){
                    if(response.data && response.data.chatMessage){
                        messages.unshift(response.data.chatMessage);
                    }
                    return messages;
                });
        }
    }
    ChatService.$inject = inject;

})();