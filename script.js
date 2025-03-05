document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const college = document.getElementById('college').value;
    const year = document.getElementById('year').value;
    const skills = document.getElementById('skills').value;
  
    // Display success message
    document.getElementById('result').innerHTML = `
      <h3>Thank you for registering!</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>College: ${college}</p>
      <p>Year: ${year}</p>
      <p>Skills: ${skills}</p>
    `;
    
    // You can also send this data to a backend server using an AJAX request (if needed)
  });
  