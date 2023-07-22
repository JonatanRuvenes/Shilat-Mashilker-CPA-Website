// Load header content
var headerContainer = document.getElementById('header-container');
fetch('head.html')
  .then(response => response.text())
  .then(content => {
    headerContainer.innerHTML = content;
  });

// Load footer content
var footerContainer = document.getElementById('footer-container');
fetch('foot.html')
  .then(response => response.text())
  .then(content => {
    footerContainer.innerHTML = content;
  });


