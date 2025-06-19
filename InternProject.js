function submitForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const captcha = document.getElementById('captcha').value;
    const consent = document.getElementById('consent').checked;

    if (!name || !phone || !captcha || !consent) {
        alert('Please fill all fields and accept the terms.');
        return;
    }

    if (captcha !== '1514') {
        alert('Invalid captcha!');
        return;
    }

    alert(`Thank you, ${name}. Your appointment request has been submitted.`);
}