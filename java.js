// Data for the main characters
const characters = [
    { name: "E. Coli", role: "The Gut Singer" },
    { name: "Penicillin", role: "The Antagonist" },
    { name: "Yeast (S. cerevisiae)", role: "The Fermenter" },
    { name: "Phage Virus", role: "The Silent Dancer" },
    { name: "Tardigrade", role: "The Unkillable Narrator" },
    { name: "Lactobacillus", role: "The Probiotic Hero" }
];

// --- 1. Populate the Character List ---
const characterList = document.getElementById('character-list');

characters.forEach(character => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${character.name}</strong><br>(${character.role})`;
    characterList.appendChild(listItem);
});

// --- 2. Handle the Subscription Form ---
const subscribeForm = document.getElementById('subscribe-form');
const formMessage = document.getElementById('form-message');

subscribeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // In a real website, you would send this email to a server here.
    console.log(`Subscribed with email: ${email}`);
    
    // Display a confirmation message
    formMessage.textContent = `Thanks for subscribing, ${email}! We'll send you updates soon.`;
    formMessage.classList.remove('hidden');
    formMessage.style.color = '#4CAF50';
    
    // Clear the form field
    emailInput.value = '';
    
    // Hide the message after a few seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
});