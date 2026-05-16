// Scroll suave futuro
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
  });
});

function abrirWhatsApp() {
  window.open("https://api.whatsapp.com/send/?phone=5577981147949&text=Olá%2C+Marcos%21+Vi+seu+portfólio+e+tenho+interesse+no+seu+trabalho+de+edição+de+vídeo.+Gostaria+de+conversar+melhor+sobre+um+projeto.&type=phone_number&app_absent=0", "_blank"); 
}