document.addEventListener("DOMContentLoaded", function() {
    // Fetch and render content from MANIFESTO.md
    fetch('MANIFESTO.md')
        .then(response => response.text())
        .then(data => {
            document.getElementById('manifesto-content').innerHTML = marked(data);
        });

    // Fetch and render content from VISION.md
    fetch('VISION.md')
        .then(response => response.text())
        .then(data => {
            document.getElementById('vision-content').innerHTML = marked(data);
        });

    // Event listeners for call-to-action buttons
    document.getElementById('star-repo').addEventListener('click', function() {
        window.open('https://github.com/composable-delivery/Universal-Pattern-Language', '_blank');
    });

    document.getElementById('join-discussions').addEventListener('click', function() {
        window.open('https://github.com/composable-delivery/Universal-Pattern-Language/discussions', '_blank');
    });

    document.getElementById('contribute').addEventListener('click', function() {
        window.open('https://github.com/composable-delivery/Universal-Pattern-Language', '_blank');
    });

    // Search functionality
    document.getElementById('search').addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const content = section.textContent.toLowerCase();
            if (content.includes(query)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});
