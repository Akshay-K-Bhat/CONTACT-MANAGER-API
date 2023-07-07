function getCookieValue(cookieName) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    // Check if the cookie starts with the provided name
    if (cookie.startsWith(cookieName + '=')) {
      // Extract and return the cookie value
      const cookieValue = cookie.substring(cookieName.length + 1);
      return JSON.parse(decodeURIComponent(cookieValue));
    }
  }

  // Return null if the cookie is not found
  return null;
}

// Retrieve the value of the "accessToken" cookie
const accessToken = getCookieValue('accessToken');

// Output the retrieved value
console.log(accessToken);

if(accessToken)
{
  console.log("present");
  window.location.href = "../dashboard.html"
}
else
{
  console.log("not present");
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way
    // Get form data
    var form = document.getElementById('login-form');
    var email = form.elements.email.value;
    var password = form.elements.password.value;

    const jsonObject = {
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
          // Login successful, handle the response from the server
          // Set a cookie with a name and value
    
          // Chain another .then() to handle the response.json() Promise
          return response.json().then(function(data) {
            console.log('Response data:', data);
    
            // Calculate the expiration time
            var expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000)); // 1 hour
    
            // Set the cookie with the expiration time
            document.cookie = `accessToken=${encodeURIComponent(JSON.stringify(data))}; expires=${expirationDate.toUTCString()}`;

            window.location.href = '../dashboard.html'
    
            // Continue with further processing or redirect as needed
          });
    
      


    
        } else {
          // Login failed, handle the error
          alert("Invalid password");
        }
      });
    

    
  });