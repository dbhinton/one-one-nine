$(document).ready(function () {
    $(".hamburger").on("click", function () {
    $(this).toggleClass("active");
    $("body").toggleClass("menu-open");
    });
    });


// get the link elements on the page
var links = document.getElementsByTagName("a");

// add event listeners to each link element
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(event) {
    event.preventDefault();

    // get the URL of the clicked link
    var url = this.getAttribute("href");

    // update the URL in the address bar
    history.pushState(null, null, url);

    // load the content of the linked page
    fetch(url)
      .then(function(response) {
        // check the status of the response
        if (response.status === 200) {
          // return the response as text
          return response.text();
        } else {
          // handle the error
          throw new Error("Error retrieving data from server");
        }
      })
      .then(function(data) {
        // update the content of the page with the response data
        document.getElementById("content").innerHTML = data;
      })
      .catch(function(error) {
        // handle any errors that occur
        console.log(error);
      });
  });
}
