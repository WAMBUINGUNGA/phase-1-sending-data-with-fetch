function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      return response.json();
    })
    .then(data => {
      // Append the new id to the DOM
      const userId = document.createElement('p');
      userId.textContent = `New user id: ${data.id}`;
      document.body.appendChild(userId);
    })
    .catch(error => {
      // Append error message to the DOM
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMessage);
    });
  }
  
  // Export submitData function to allow testing
  module.exports = submitData;
  
