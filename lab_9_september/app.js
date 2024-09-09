const catButton = document.getElementById('catButton');
        const catImage = document.getElementById('catImage');
        //adding event listener to the button
        catButton.addEventListener('click', () => {
            fetch('https://api.thecatapi.com/v1/images/search')
                .then(response => response.json())
                .then(data => {
                    catImage.src = data[0].url;
                    catImage.style.display = 'block';
                })
                .catch(error => console.error('Error fetching the cat image:', error));
        });
      const jsonUrl = 'https://vaibhavtomar-in.github.io/myspotify/cats.json';
  
      // Fetch JSON data from the github link
      fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
          const tableBody = document.getElementById('cat-breeds-table');
          //displaying the values in json by iterating through all objects
          data.forEach(cat => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${cat.name}</td>
              <td>${cat.temperament}</td>
              <td>${cat.origin}</td>
              <td>${cat.description}</td>
              <td>${cat.life_span}</td>
              <td><a href="${cat.url}" class="btn btn-primary" target="_blank">More Info</a></td>
            `;
            tableBody.appendChild(row);
          });
        })
        .catch(error => {
          console.error('Error fetching the JSON file:', error);
        });
        // Form validation
      const form = document.getElementById('subscriptionForm');
      const submitButton = document.getElementById('submitForm');

      // Add event listener for the form submit button
      submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      });

      // Basic email validation with pattern
      const emailInput = document.getElementById('email');
      emailInput.setAttribute('pattern', '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');