const send = document.querySelector('#send');
const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const subject = document.querySelector('#subject').value;
const message = document.querySelector('#message').value;

send.addEventListener('click', () => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
    Swal.fire({
        title: '<strong class="alertTitle">Verify Your Message</strong>',
        html: '<label class="alertLabel">Your Name :</label><br>' +
            '<p class="alertP">' + name + '</p><br>' +
            '<label class="alertLabel">Your Email :</label><br>' +
            '<p class="alertP">' + email + '</p><br>' +
            '<label class="alertLabel">Message Subject :</label><br>' +
            '<p class="alertP">' + subject + '</p><br>' +
            '<label class="alertLabel">Message :</label><br>' +
            '<p class="alertP">' + message + '</p><br>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i> No',
        cancelButtonAriaLabel: 'No',
    })
});