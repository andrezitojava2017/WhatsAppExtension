
function message_out (){
    let message = document.querySelectorAll('div.messge-out span[dir=ltr]');

    if(message){
        message.forEach(el => {
            el.style.color='CadetBlue';
            el.style.fontStyle='italic';
        });
    } else {
        console.log('message-out não encontrado')
    }
}