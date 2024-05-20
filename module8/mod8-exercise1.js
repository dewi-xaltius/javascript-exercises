// Exercise 1: Show/hide an element
document.addEventListener('DOMContentLoaded', function() {
    function toggleParagraphVisibility() {
        var paragraph = document.getElementById('paragraph');
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
        } else {
            paragraph.style.display = 'none';
        }
    }

    var toggleIcon = document.getElementById('toggleParagraph');
    toggleIcon.addEventListener('click', toggleParagraphVisibility);
});
