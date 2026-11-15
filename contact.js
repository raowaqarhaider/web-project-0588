
// GET CONTACT FORM

let contactForm = document.getElementById("contactForm");

let formMessage = document.getElementById("formMessage");


// FORM SUBMIT EVENT

contactForm.addEventListener("submit", function(event) {

    // PREVENT PAGE RELOAD

    event.preventDefault();


    // GET INPUT VALUES

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let subject = document.getElementById("subject").value;

    let message = document.getElementById("message").value;


    // CHECK FORM FIELDS

    if (name === "" || email === "" || subject === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

    }

    else {

        formMessage.textContent = "Form submitted successfully!";

        contactForm.reset();

    }

});
