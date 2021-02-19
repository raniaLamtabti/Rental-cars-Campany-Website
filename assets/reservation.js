const calc = document.querySelector('#calc');
const result = document.querySelector('#result');
const typeSelect = document.querySelector('#type');
const options = document.querySelector('#type').options;
const optionsF = document.querySelector('#fule').options;
const fule = document.querySelector('#fule').value;
const automatic = document.querySelector('#aut');
const manuel = document.querySelector('#man');

typeSelect.addEventListener("change", function() {
    var id = options[options.selectedIndex].id;
    if (id == 1) {
        optionsF[2].disabled = true;
        optionsF[4].disabled = true;
        optionsF[1].disabled = false;
        optionsF[3].disabled = false;
        automatic.disabled = true;
        manuel.disabled = true;
    } else if (id == 2) {
        optionsF[1].disabled = false;
        optionsF[2].disabled = false;
        optionsF[3].disabled = false;
        optionsF[4].selected = true;
        automatic.disabled = true;
        manuel.disabled = false;
        manuel.checked = true;
    } else if (id == 3) {
        optionsF[1].disabled = true;
        optionsF[2].disabled = false;
        optionsF[3].disabled = false;
        optionsF[4].selected = false;
        automatic.disabled = true;
        manuel.disabled = false;
        manuel.checked = true;
    } else if (id == 4) {
        optionsF[1].disabled = true;
        optionsF[2].disabled = false;
        optionsF[3].disabled = false;
        optionsF[4].selected = false;
        manuel.disabled = true;
        automatic.disabled = false;
        automatic.checked = true;
    } else if (id == 5) {
        optionsF[1].disabled = true;
        optionsF[2].disabled = true;
        optionsF[3].disabled = true;
        optionsF[4].selected = true;
        automatic.disabled = true;
        manuel.disabled = false;
        manuel.checked = true;
    } else if (id == 6) {
        optionsF[1].disabled = true;
        optionsF[2].disabled = true;
        automatic.disabled = true;
        manuel.disabled = false;
        manuel.checked = true;
    } else if (id == 7) {
        optionsF[1].disabled = true;
        optionsF[2].disabled = true;
        optionsF[3].disabled = true;
        optionsF[4].selected = true;
        manuel.disabled = true;
        automatic.checked = true;
    }
});

calc.addEventListener('click', () => {
    event.preventDefault();
    const type = parseInt(document.querySelector('#type').value, 10);
    const fule = document.querySelector('#fule').value;
    const automatic = document.querySelector('#aut');
    const days = document.querySelector('#days').value;
    const result = document.querySelector('#result');
    const daysNum = document.querySelector('#daysNum');
    var price = 0;
    var auto = 0;
    if (automatic.checked) {
        auto = 19;
    }
    price = (type + ((type * fule) / 100)) * days;
    result.innerHTML = price;
    daysNum.innerHTML = days;
    // alert("Price for " + days + " day(s):" + price + "$");
    // Swal.fire('Price for ' + days + ' day(s): ' + price + '$');
});