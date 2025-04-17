
const loading = () => {
  let v = document.querySelectorAll("[role=listitem]");
  let photo = document.querySelector("._ak8h");
  let contUser = document.querySelector("._ak8l");
  if (v) {
    v.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        el.style.borderLeft = "2px solid #25D366";
        let lst = el.querySelector("._ak8l");
        lst.style.background = "rgba(37,211,102,0.3)";
      });

      el.addEventListener("mouseout", (e) => {
        el.style.borderLeft = "none";
        let lst = el.querySelector("._ak8l");
        lst.style.background = "none";
      });
      message_out()
    });

  } else {
    console.log("elemento nao carregado");
  }
};


function message_out (){
  let messageText = document.querySelectorAll('div.message-out span[dir=ltr]');
  let containerMessageOut = document.querySelectorAll('div.message-out ._amk6');
  let responseMessage = document.querySelectorAll('div.message-out ._aju3');

  if(messageText){
      messageText.forEach(el => {
          el.style.color='#182229';
          el.style.fontStyle='italic';
      });

      containerMessageOut.forEach(el=>{
        el.style.background='#91eed4'
      })

      responseMessage.forEach(el=>{
        el.style.background='#fff9'
      })

  } else {
      console.log('message-out não encontrado')
  }
}

const multable = new MutationObserver(loading);
multable.observe(document.body, {
  childList: true,
  subtree: true,
});
