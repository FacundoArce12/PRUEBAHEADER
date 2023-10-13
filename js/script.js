  // Seleccionar el botón WhatsApp por su ID
  var whatsappButton = document.getElementById("whatsappButton");
    
  // URL de WhatsApp
  var whatsappURL = "https://wa.link/5e5nbc.";

  // Agregar un evento de clic al botón para redirigir a WhatsApp
  whatsappButton.addEventListener("click", function() {
      window.location.href = whatsappURL;
  });