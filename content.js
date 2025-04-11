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
    });
    /*
    v.addEventListener("mouseover", (e) => {
      v.style.border = "2px solid green";
      contUser.style.background = "rgba(255, 99, 71, 0.4)";
      photo.style.background = "rgba(255, 99, 71, 0.4)";
    });
    

    v.addEventListener("mouseout", (e) => {
      v.style.border = 'none';
      contUser.style.background = "none";
      photo.style.background = "none";
    });
*/
  } else {
    console.log("elemento nao carregado");
  }
};

const multable = new MutationObserver(loading);
multable.observe(document.body, {
  childList: true,
  subtree: true,
});
