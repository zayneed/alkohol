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
    const ageCards = document.getElementById('ageCards');

    // Clear any existing cards
    ageCards.innerHTML = '';

    if (isNaN(age)) {
        resultMessage.textContent = 'Bitte gib ein gültiges Alter ein.';
        resultMessage.style.color = 'red';

    } else if (age >= 400) {
        resultMessage.textContent = 'fick dich';
        resultMessage.style.color = 'green';
        // Add cards for age 20 and older
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'nah das crazy';
        ageCards.appendChild(card);

    } else if (age >= 120) {
        resultMessage.textContent = 'halts maul';
        resultMessage.style.color = 'red';
        // Add cards for age 20 and older
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'nahhh';
        ageCards.appendChild(card);

    } else if (age >= 100) {
        resultMessage.textContent = 'du bist ein lügner';
        resultMessage.style.color = 'red';
        // Add cards for age 20 and older
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'das ist bigcap';
        ageCards.appendChild(card);

    } else if (age >= 80) {
        resultMessage.textContent = 'Du bist zu alt Jahre alt oder älter.';
        resultMessage.style.color = 'green';
        // Add cards for age 20 and older
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'du rentner';
        ageCards.appendChild(card);

    } else if (age >= 60) {
        resultMessage.textContent = 'Du bist 60 Jahre alt oder älter.';
        resultMessage.style.color = 'blue';
        // Add cards for age 20 and older
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'du bist ein chilliger homie props';
        ageCards.appendChild(card);

    } else if (age >= 50) {
        resultMessage.textContent = 'Du bist 50 Jahre alt oder älter.';
        resultMessage.style.color = 'green';
        // Add cards for age 20 and older
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'bitte geh nie wieder auf diese website';
        ageCards.appendChild(card);

    } else if (age >= 30) {
        resultMessage.textContent = 'Du bist 30 Jahre alt oder älter.';
        resultMessage.style.color = 'green';
        // Add cards for age 20 and older
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'Du bist zu alt um mit 15-Jährigen zusammen zu sein';
        ageCards.appendChild(card);

    } else if (age >= 20) {
        resultMessage.textContent = 'Du bist 20 Jahre alt oder älter.';
        resultMessage.style.color = 'green';
        // Add cards for age 20 and older
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'Du bist ein alter Sack';
        ageCards.appendChild(card);

    } else if (age >= 18) {
        resultMessage.textContent = 'Du bist 18 Jahre alt oder älter.';
        resultMessage.style.color = 'green';
        // Add a card for age 18 to 19
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'Cool, du bist über 18!';
        ageCards.appendChild(card);

    } else if (age >= 1) {
        resultMessage.textContent = 'du bist zu jung';
        resultMessage.style.color = 'green';
        // Add a card for age 18 to 19
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'Drake liebt dich';
        ageCards.appendChild(card);

    } else if (age >= 10) {
        resultMessage.textContent = 'du bist 10 oder älter';
        resultMessage.style.color = 'green';
        // Add a card for age 18 to 19
        const card = document.createElement('div');
        card.className = 'age-card';
        card.textContent = 'fick deine mutter';
        ageCards.appendChild(card);


    } else {
        resultMessage.textContent = 'Du bist unter 18 Jahre alt. Du bist zu jung für diese Website.';
        resultMessage.style.color = 'red';
    }
}
