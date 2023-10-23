
function scrollToHome(){
    $('html, body').animate({
         scrollTop: $('#home').offset().top
    }, 500);
}
const form = document.getElementById('ft-form');
const submitButton = document.getElementById('submit-button');

// Add a change event listener to the form
form.addEventListener('input', () => {
  // Check if all required fields are filled
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const cv = document.getElementById('cv').value;

  if (name && phone && email && cv) {
    submitButton.style.backgroundColor="rgb(204, 0, 0)";
    submitButton.style.color= 'aliceblue';
  } else {
    submitButton.style.backgroundColor='intial';
    
  }
});