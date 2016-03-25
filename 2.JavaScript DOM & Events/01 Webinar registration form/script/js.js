var checkbox = document.getElementById('invoice');
var invoiceForm = document.getElementById('invoiceForm');

document.addEventListener("DOMContentLoaded", function () {
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            invoiceForm.style.visibility = 'visible';
        } else {
            invoiceForm.style.visibility = 'hidden';
        }
    });
});