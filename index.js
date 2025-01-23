const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let textArea = document.getElementById('textArea').value.toLowerCase();

    // Check if the textArea contains any URLs that start with 'http'
    if (!textArea.startsWith('http')) {
        // Split by new lines, filter out empty entries, and process each line
        let urls = textArea.split('\n').map(url => url.trim()).filter(url => url);

        urls.forEach((url) => {
            // Ensure the URL starts with 'http' or 'https' before opening in a new tab
            if (url.startsWith('http')) {
                const newTab = window.open(url, '_blank');
                if (!newTab) {
                    alert("Browser blocked the popup! Allow pop-ups for this site.");
                }
            }
        });
    } else {
        alert("The input starts with 'http'. Please enter other URLs.");
    }
});
