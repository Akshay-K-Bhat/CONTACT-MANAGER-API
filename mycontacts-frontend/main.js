document.getElementById("sendRequestBtn").addEventListener("click", function() {
  fetch('http://localhost:5000/api/contacts', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiQWRpdHlhIiwiZW1haWwiOiJhZGl0eWFAZ21haWwuY29tIiwiaWQiOiI2NDlmMDljNjI0NDQ5MzFjNjAyNWEyODkifSwiaWF0IjoxNjg4Mzg4NzkwLCJleHAiOjE2ODgzOTIzOTB9.B9BGvaZQWwLoUuZwZMhcZZVfsLBH1IqVT2XuHWgs-OQ'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

});
