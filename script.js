// script.js
document.addEventListener('DOMContentLoaded', function() {
    const rose = document.querySelector('.rose');
    
    rose.addEventListener('click', function() {
      rose.classList.toggle('active');
    });
  });