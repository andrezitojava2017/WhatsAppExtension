function avatarUser() {
  const perfil = document.querySelector("[aria-label=Perfil]");
  if (perfil) {
    console.log("perfil carregado");
   
    let cloneBtnPerfil = perfil.cloneNode(true);
    let header = document.querySelector("header>header>div");

    header.insertBefore(cloneBtnPerfil, header[0]);

    cloneBtnPerfil.addEventListener("click", () => {
      perfil.click();
    });
    perfil.style.display='none'; // oculta btn de perfil original
  } else {
    console.log("perfil nao carregado");
  }

}

function numberOfConversation(){
  try {
    let title = document.querySelector('[title=Conversas]>h1')
    const element = document.querySelector('[aria-label="Lista de conversas"]');
    let number = element.ariaRowCount;
    title.innerText=`${number} conversas`;
  } catch (error) {
    console.warn('Nao foi possivel carregar numero de converas')
  }
}

setTimeout(() => {
  avatarUser();
  numberOfConversation()
}, 10000);

/*
function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
        callback(element);
        return;
    }

    const observer = new MutationObserver(() => {
        const foundElement = document.querySelector(selector);
        if (foundElement) {
            // Para de observar quando o elemento é encontrado
            callback(foundElement);
            observer.disconnect();
        }
    });

    // Observa mudanças no DOM
    observer.observe(document.body, {
        childList: true,  // Observa adição/remoção de filhos
        subtree: true     // Observa toda a árvore DOM
    });
}

// Exemplo: Espera o botão de perfil do WhatsApp carregar
waitForElement('[aria-label="Perfil"]', (perfil) => {
    console.log("Elemento encontrado:", perfil);
    
    // Clona o botão de perfil e adiciona ao header
    const cloneBtnPerfil = perfil.cloneNode(true);
    const header = document.querySelector('header > header > div');
    
    if (header) {
        header.insertBefore(cloneBtnPerfil, header[0]);; // Adiciona no início do header
        
        cloneBtnPerfil.addEventListener('click', () => {
            perfil.click(); // Simula clique no original
        });
    }
});
*/
