﻿document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const orderStatusDiv = document.getElementById("orderStatus");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const orderId = formData.get("orderId");

        fetch('/Home/TrackOrder?orderId=' + orderId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    orderStatusDiv.innerHTML = `<p>Order Number: ${data.orderNumber}</p><p>Status: ${data.statusDescription}</p>`;
                } else {
                    orderStatusDiv.innerHTML = `<p>${data.message}</p>`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                orderStatusDiv.innerHTML = `<p>An error occurred while tracking the order. Please try again later.</p>`;
            });
    });
});
