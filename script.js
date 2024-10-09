// Initialize EmailJS with your User ID
(function() {
    emailjs.init("OaOakucM_YHYVre8l");  // Replace 'your_user_id' with your actual User ID from EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the default form submit behavior

  // Get form values
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Prepare the parameters for EmailJS
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  // Send email using EmailJS
  emailjs.send("service_5xim1my", "template_hgrot1k", templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Message sent successfully!');
    }, function(error) {
       console.log('FAILED...', error);
       alert('Failed to send message. Please try again.');
    });
});