(function(){
    'use strict';

    angular.module('employeeDirectory').controller('ChatController', ChatController);

    var inject = ['$scope', '$log', '$interval', 'BackendGateway', 'ChatService'];
    function ChatController($scope, $log, $interval, BackendGateway, ChatService) {
        var vm = this;
        var lastMessageId = null;

        vm.messages = [];
        vm.newMessage = '';

        vm.getMessages = getMessages;
        vm.postMessage = postMessage;
        vm.onNewMessageKeyPress = onNewMessageKeyPress;

        $scope.$on("$destroy", destroyHandler);

        vm.getMessages();
        var getMessagesInterval = $interval( getMessages, 5000, 0, true);
        
        //--------------------------------------------------------------------------

        function getMessages(){
            ChatService.getMessagesList(vm.messages, lastMessageId).then(function(messages){
                vm.messages = messages;
                lastMessageId = ChatService.getLastMessageId(vm.messages);
            });
        }

        function postMessage() {
            ChatService.postMessage(vm.newMessage, vm.messages).then(function(){
                lastMessageId = ChatService.getLastMessageId(vm.messages);
                vm.newMessage = "";
            });
        }

        function onNewMessageKeyPress(keyEvent) {
            if (keyEvent.which === 13){
                vm.postMessage();
            }
        }

        function destroyHandler() {
            if (angular.isDefined(getMessagesInterval)) {
                $interval.cancel(getMessagesInterval);
                getMessagesInterval = undefined;
            }
        }
    }
    ChatController.$inject = inject;

})();