let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }    
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000); // Ubah gambar setiap 3 detik
    }
    function plusSlides(n) {
        slideIndex += n - 1;
        showSlides();
    }

    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }

    function validateForm() {
        // Get form elements
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let errorMessage = document.getElementById("error-message");
    
        // Clear previous error message
        errorMessage.innerHTML = "";
    
        // Validate name
        if (name === "") {
            errorMessage.innerHTML = "Name is required.";
            return false;
        }
    
        // Validate email
        if (email === "") {
            errorMessage.innerHTML = "Email is required.";
            return false;
        } else if (!validateEmail(email)) {
            errorMessage.innerHTML = "Please enter a valid email address.";
            return false;
        }
    
        // If all validations pass
        return true;
    }
    
    function validateEmail(email) {
        // Regular expression to validate email format
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }