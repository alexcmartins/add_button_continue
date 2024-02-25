// Selecione o elemento pai onde a div será criada (por exemplo, o body)
// Select the parent element where the div will be created (for example, the body)
const elementoPai = document.body;

// Crie um MutationObserver
// Create a MutationObserver
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            // Verifique se a div desejada foi adicionada
            // Verify that the desired div has been added
            const divCriada = document.querySelector('.forminator-draft-link');
            if (divCriada) {
                // Seleciona a div criada e pega o valor
                // Select the created div and grab the value
                var eurl = document.querySelector(".forminator-draft-link").value
                console.log(eurl)
                // seleciona o id do link e inseri o novo href
                // Select the link ID and enter the new href
                var eulink = document.querySelector("#link-draft-continue")
                console.log(eulink)
                eulink.setAttribute("href", eurl)
                // Pare de observar após encontrar a div
                // Stop watching after finding the div
                observer.disconnect(); 
            }
        }
    });
});

// Configure o MutationObserver para observar alterações nos filhos do elemento pai
// Configure the MutationObserver to observe changes in the children of the parent element
observer.observe(elementoPai, { childList: true, subtree: true });
