function confirmDonation() {
  const confirmed = confirm('Are you sure you want to donate?');
  if (confirmed) {
    const accountNumber = prompt('Please enter the EsewaId number:');
    const holderName = prompt('Please enter the Account Holder Name:');
    const amount = parseFloat(prompt('Please enter the Donation Amount:'));
    
    if (isNaN(amount)) {
      alert('Invalid donation amount. Please enter a valid number.');
      return;
    }
    
    if (amount <= 0) {
      alert('Donation amount must be greater than zero.');
      return;
    }

    const encodedNumber = encodeURIComponent(accountNumber);
    const encodedName = encodeURIComponent(holderName);
    const encodedAmount = encodeURIComponent(amount);

    const url = `https://esewa.com.np/#/home`;

    window.open(url, '_blank');
  }
}
