// function handleLogin(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const userData = {
//       username: formData.get('username'),
//       password: formData.get('password'),
//     };
//     fetch('http://localhost:9191/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userData)
//     })
//     .then(response => {
//       if (response.status === 200) {
//         window.location.href = 'index.html';
//         alert("Admin Login Successful!");
//       } else {
//         alert("Invalid Login! Please Try again.");
//       }
//     })
//     .catch(error => {
//       console.error('Fetch operation error:', error);
//       // handle error
//     });
//   }


function login(username, password) {
  fetch('http://localhost:9191/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.ok) {
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      alert('Login failed!');
    }
  })
  .catch(error => {
    alert('Error: ' + error);
  });
}
