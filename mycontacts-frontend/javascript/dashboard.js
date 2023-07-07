function isAccessTokenPresent() {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');

  // Iterate through each cookie and check for the presence of "accessToken" key
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Check if the cookie starts with the "accessToken" key
    if (cookie.startsWith('accessToken=')) {
      return true; // "accessToken" key is present
    }
  }

  return false; // "accessToken" key is not present
}

// Example usage
if (isAccessTokenPresent()) {
  console.log("accessToken key is present");
} else {
  console.log("accessToken key is not present");
  window.location.href = '../login.html'
}


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
const accessToken = getCookieValue('accessToken').accessToken;

// Output the retrieved value
console.log(accessToken);



document.getElementById("sendRequestBtn").addEventListener("click", function() {
  fetch('http://localhost:5000/api/contacts', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer '+accessToken
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data[0]);
    document.write(data[0].name)
  })
  .catch(error => {
    console.error('Error:', error);
  });

});


function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Example usage when logging out
document.getElementById('logout-button').addEventListener('click', function() {
  
  // Delete the "accessToken" cookie
  deleteCookie('accessToken');
  // Additional logout actions
  window.location.href = "../login.html"
});

