document.getElementById('createWalletButton').addEventListener('click', function() {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';
    
    // Simulate wallet creation process with a timeout
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        alert('Wallet created successfully!');
        // Redirect to another page after the alert
        window.location.href = 'anotherpage.html';
    }, 3000); // Simulate a 3 second delay
});