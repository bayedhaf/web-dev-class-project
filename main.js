


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
function sendEmail(e) {
    e.preventDefault();

    // Get form values
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

  
    if (parms.name === '' || parms.email === '' || parms.message === '') {
        alert('Please fill out all fields.');
        return;
    }

    
    setTimeout(() => {
        document.getElementById('formMessage').style.display = 'block';
        document.getElementById('contactForm').reset(); 
    }, 1000);

   
    emailjs.send("service_0hhjrdu", "template_7qvr6hk", parms)
        .then(() => {
            alert('The message is successfully sent');
        })
        .catch((error) => {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again.');
        });
}