$(document).ready(function() {
    // Variables for user credentials and smart car information
    var users = {
      user1: {
        password: 'password1',
        carDetails: 'Smart Car 1: Porsche 911 GT2 RS, Color: Blue',
        backgroundImage: 'image1.jpg'
      },
      user2: {
        password: 'password2',
        carDetails: 'Smart Car 2: Cybertruck, Color: Silver',
        backgroundImage: 'image2.jpg'
      },
      user3: {
        password: 'password3',
        carDetails: 'Smart Car 3: Tesla Model S, Color: White',
        backgroundImage: 'image3.jpg'
      }
    };
  
    // Login form submission
    $('#login-form').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Check if credentials are valid
      if (users.hasOwnProperty(username) && users[username].password === password) {
        // Hide login panel
        $('#login').hide();
        // Display welcome message and car information for the logged-in user
        $('#welcome-message').text('Welcome, ' + username + '!');
        $('#car-details').text(users[username].carDetails);
        // Apply background image for the user and set it to cover the container
        $('body').css({
          'background-image': 'url(' + users[username].backgroundImage + ')',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'fit'
        });
        // Show user panel
        $('#user-panel').show();
      } else {
        // Show error message for invalid credentials
        alert('Invalid username or password.');
      }
    });
  
    // Logout button click
    $('#logout-button').click(function() {
      // Clear input fields and reset the form
      $('#username').val('');
      $('#password').val('');
      $('#login-form')[0].reset();
      // Reset background image
      $('body').css('background-image', 'none');
      // Hide user panel and show login panel
      $('#user-panel').hide();
      $('#login').show();
    });
  });
  