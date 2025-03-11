
function sendEmail() {
 


    const parms = { 
        name: document.getElementById('name').value, 
        email: document.getElementById('email').value,   
        message: document.getElementById('message').value
    };

setTimeout(() => {
        const formMessage = document.getElementById('formMessage');  
        formMessage.style.display = 'block';
        document.getElementById('contactForm').reset();
    }, 1000);

  
    emailjs.send("service_7cjes39", "template_s4nyfbh", parms)
        .then(() => {
            alert('The message is successfully sent');
        })
        .catch((error) => {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again.');
        });
}