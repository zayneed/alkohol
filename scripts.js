document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('overlay');
    const content = document.querySelector('.content');
    const enterButton = document.getElementById('enterButton');
    const ageModal = document.getElementById('ageModal');
    const closeModal = document.querySelector('.close');

    // Show content and hide overlay when button is clicked
    enterButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        content.style.display = 'block';
        document.body.style.overflow = 'auto'; // Erlaubt das Scrollen nach Entfernen des Overlays
    });

    // Close the modal when the user clicks on <span> (x)
    closeModal.addEventListener('click', function() {
        ageModal.style.display = 'none';
    });

    // Close the modal when the user clicks anywhere outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target === ageModal) {
            ageModal.style.display = 'none';
        }
    });
});

function checkAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    const resultMessage = document.getElementById('resultMessage');
    const ageModal = document.getElementById('ageModal');

    if (isNaN(age)) {
        resultMessage.textContent = 'Bitte gib ein gültiges Alter ein.';
        resultMessage.style.color = 'red';
    } else if (age >= 18) {
        resultMessage.textContent = 'Du bist 18 Jahre alt oder älter.';
        resultMessage.style.color = 'green';
        ageModal.style.display = 'block'; // Zeigt das Modal an
    } else {
        resultMessage.textContent = 'Du bist unter 18 Jahre alt. Du bist zu jung für diese Website';
        resultMessage.style.color = 'red';
    }
}
