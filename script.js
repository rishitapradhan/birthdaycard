document.getElementById('reveal-button').addEventListener('click', function() {
    const wishes = document.getElementById('hidden-wishes');
    wishes.classList.toggle('visible');
    if (wishes.classList.contains('visible')) {
        this.innerText = "Hide Wishes";
    } else {
        this.innerText = "Reveal More Wishes";
    }
});
