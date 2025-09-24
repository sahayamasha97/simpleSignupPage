document.addEventListener("DOMContentLoaded", () => {

    // RegeX Pattern

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^[A-za-z0-9!@#$%*]{6,}$/;

    const userName = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const form = document.getElementById("signupValidation");
    const agreement = document.getElementById("agreement");
    const generateBtn = document.getElementById("generateBtn");
    const otpPara = document.getElementById("otpPara");
    const sumbitBtn = document.getElementById("sumbitBtn");
    const otpInput = document.getElementById("otpInput");





    const confirmPassword = document.getElementById("confirmPassword");

    const eye = document.getElementById("eye");

    eye.addEventListener('mouseover', () => {

        confirmPassword.type = "text";
    })


    eye.addEventListener('mouseout', () => {
        confirmPassword.type = "password";
    })




    form.addEventListener("submit", (e) => {
        e.preventDefault();

        document.querySelectorAll(".error").forEach(clear => clear.textContent = "");

        let validationSuccess = true;



        if (!namePattern.test(userName.value)) {
            document.getElementById("nameError").innerText = "Please Enter Valid Name!";
            validationSuccess = false;
        }
        if (!emailPattern.test(email.value)) {
            document.getElementById("emailError").innerText = "Please Enter Valid Email Addres!";
            validationSuccess = false;
        }
        if (!passwordPattern.test(password.value)) {
            document.getElementById("passwordError").innerText = "Please Enter valid Password";
            validationSuccess = false;
        }
        if (!password.value == confirmPassword.value) {
            document.getElementById("confirmPasswordError").innerText = "Enter Correct Password";
            validationSuccess = false;
        }
        if (confirmPassword.value == "") {
            document.getElementById("confirmPasswordError").innerText = "Enter Correct Password";
            validationSuccess = false;
        }

        if (!agreement.checked) {
            document.getElementById("agreementError").innerText = "Agreement is required";
            validationSuccess = false;
        }

        if (validationSuccess) {
            form.hidden = true;
            const stepTwo = document.getElementById("otpVerification");
            stepTwo.style.display = "block";
        }



        generateBtn.addEventListener("click", () => {
            const otp = Math.floor(1000 + Math.random() * 9999);
            localStorage.setItem("generatedOtp", otp);
            otpPara.innerText = `OTP is ${otp}`
        });






    })

    sumbitBtn.addEventListener("click", () => {

        const userInput = otpInput.value;
        const storedOtp = localStorage.getItem("generatedOtp");
        let otpverification = true;

        if (userInput === storedOtp) {
            alert("Verification Completed!, Thank you for joinig with us");
            otpPara.innerText = " Successfly Registered!";
            otpInput.value = "";
        }
        else {
            otpPara.innerText = " Verification Failed";
        }


    })








})