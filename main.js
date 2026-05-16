// Toolify - Main JavaScript File
console.log('Toolify loaded successfully!');

// Track page views (for future analytics)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded: ' + window.location.pathname);
});

// Generic function to go back
function goBack() {
    window.location.href = 'index.html';
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Copied to clipboard!');
    }).catch(function() {
        alert('Failed to copy text');
    });
}