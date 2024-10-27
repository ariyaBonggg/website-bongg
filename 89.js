document.addEventListener("DOMContentLoaded", function() {
    console.log("Website is ready!");

    // Menambahkan animasi saat mengarahkan mouse ke elemen "service-item"
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});

