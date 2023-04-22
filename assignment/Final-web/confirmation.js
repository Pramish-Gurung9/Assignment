function confirmDonation() {
  const confirmed = confirm('Are you sure you want to donate?');
  if (confirmed) {
    const amount = parseFloat(prompt('Please enter the donation amount:'));
    
    if (isNaN(amount) || amount <= 0) {
      alert('Invalid donation amount. Please enter a valid number.');
      return;
    }
    
    const id = prompt('Please enter your eSewa ID:');

    if (id === null || id === '') {
      alert('Invalid eSewa ID. Please enter a valid ID.');
      return;
    }

    const encodedAmount = encodeURIComponent(amount);
    const encodedId = encodeURIComponent(id);

    // Display thank you message
    const thankYouMessage = document.createElement('div');
    thankYouMessage.innerHTML = '<h1>Thank you for your donation!</h1>';
    thankYouMessage.style.position = 'fixed';
    thankYouMessage.style.top = 0;
    thankYouMessage.style.left = 0;
    thankYouMessage.style.width = '100%';
    thankYouMessage.style.height = '100%';
    thankYouMessage.style.backgroundColor = 'white';
    thankYouMessage.style.backgroundImage = 'url("images/logo.png")';
    thankYouMessage.style.backgroundRepeat = 'no-repeat';
    thankYouMessage.style.backgroundSize = 'contain';
    thankYouMessage.style.backgroundPosition = 'center';
    thankYouMessage.style.display = 'flex';
    thankYouMessage.style.justifyContent = 'center';
    thankYouMessage.style.alignItems = 'center';
    document.body.appendChild(thankYouMessage);

    // Set font-size to fill screen
    const h1 = thankYouMessage.querySelector('h1');
    const lineHeight = parseFloat(getComputedStyle(h1).lineHeight);
    const height = thankYouMessage.offsetHeight;
    const fontSize = (height / lineHeight) * 0.8; // adjust as needed
    h1.style.fontSize = `${fontSize}vh`;

    // Redirect to eSewa page after 3 seconds
    setTimeout(() => {
      const url = `https://esewa.com.np/#/sc=9803514141&su=Donation%20to%20Legend's%20Rescue&amt=${encodedAmount}&pid=${encodedId}`;
      window.open(url, '_blank');
    }, 3000);
  }
}
