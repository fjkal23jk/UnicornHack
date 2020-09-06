document.getElementById('pushChat').addEventListener('click', function(){
    let chat = document.getElementById('chat').value;
    if(chat === ''){
        $('#myDialog').modal('show');
    } else {
        let currentChat = document.getElementById('chatroom').value;
        let newChat;
        if(currentChat === '') newChat = chat;
        else newChat = currentChat + '\n' + chat;
        document.getElementById('chatroom').value = newChat;
        document.getElementById('chat').value = '';
    }
});