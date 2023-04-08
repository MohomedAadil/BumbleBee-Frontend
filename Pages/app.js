function updateUser() {
    var username = $("#username").val();
    var phonnumber = $("#phonenumber").val();
    var password = $("#password").val();
  
    var userData = {
      "username": username,
      "phonenumber": phonnumber,
      "pasword": password
    };
  
    $.ajax({
      url: `http://localhost:9191/updateUser/${username}`,
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify(userData),
      success: function() {
        alert("User data updated successfully.");
      },
      error: function() {
        alert("Error updating user data.");
      }
    });
  }
  