document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way
    // Get form data
    var form = document.getElementById('registration-form');
    var username = form.elements.username.value;
    var email = form.elements.email.value;
    var password = form.elements.password.value;

    const jsonObject = {
        "username" : username,
        "email" : email,
        "password" : password
    }

    var jsonData = JSON.stringify(jsonObject);

    // Send JSON data to the server using fetch
    fetch(form.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
    .then(function(response) {
      if (response.ok) {
        // Registration successful, handle the response from the server
        return response.json();
      } else {
        // Registration failed, handle the error
        throw new Error('Registration failed. Status:', response.status);
      }
    })
    .then(function(jsonData) {
      console.log(jsonData); // Handle the JSON data returned from the server
      // Access specific properties of the JSON data
      var username = jsonData.username;
      var userId = jsonData.userId;
      // ...
    })
    .catch(function(error) {
      console.error(error); // Handle any errors
    });
  });



