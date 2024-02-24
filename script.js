document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var guests = document.getElementById('guests').value;
    var date = document.getElementById('date').value;

    // Perform form validation
    if (name === '' || email === '' || guests === '' || date === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Prepare booking data to send to server (for example, using AJAX)
    var bookingData = {
        name: name,
        email: email,
        guests: guests,
        date: date
    };

    // Simulate booking submission (replace this with your actual submission logic)
    console.log('Booking submitted:', bookingData);
    alert('Thank you for your booking!');
});
