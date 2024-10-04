document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const introText = "Hi, I'm Achal, a Web Developer";
let i = 0;

function typeWriter() {
    if (i < introText.length) {
        document.getElementById("intro-text").innerHTML += introText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.05)';
        box.style.transition = 'transform 0.3s ease';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});

const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");

document.querySelectorAll('.project-box .button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(".modal-content p").textContent ='Details for${button.parentElement.querySelector('h3').textContent}';
        modal.style.display = "block";
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', (e) => {
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            e.preventDefault();
        } else if (message.trim() === "") {
            alert('Please enter your message');
            e.preventDefault();
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}