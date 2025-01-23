const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let textArea = document.getElementById('textArea').value.toLowerCase();

    if (!textArea.startsWith('http')) {
        let urls = textArea.split('\n').map(url => url.trim()).filter(url => url);

        urls.forEach((url) => {
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
