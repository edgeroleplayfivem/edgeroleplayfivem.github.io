document.addEventListener('DOMContentLoaded', function() {
    var entraOraButton = document.getElementById('entraOraButton');
    if (entraOraButton) {
      entraOraButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Entra Ora button clicked');
        window.alert('Rimani Aggiornato! 😏');
      });
    }
  });