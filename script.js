
document.querySelector('header form button').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Search functionality coming soon!');
  });
  
  document.querySelector('header a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('#modal span').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
});

document.getElementById("button").addEventListener("click", function() {
  document.getElementById("form").style.display = "block";
});