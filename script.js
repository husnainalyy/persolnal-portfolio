document.getElementById('backButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default behavior (page navigation)
    // Your code to handle button click
    // For example, add class to apply active state styles
    this.classList.add('active');
    // Simulate navigation delay (adjust as needed)
    setTimeout(() => {
        // Restore button style after delay
        this.classList.remove('active');
    }, 500);
});
