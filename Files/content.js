window.addEventListener('load', () => {
    // Use sessionStorage to ensure print dialog opens only once per page session
    if (!sessionStorage.getItem('printShown')) {
        // Set a flag in sessionStorage to prevent further print dialogs
        sessionStorage.setItem('printShown', 'true');
        
        // Trigger the print dialog after a short delay to ensure the page is fully loaded
        setTimeout(() => {
            window.print();
        }, 1000); // Adjust delay if needed
    }
});
