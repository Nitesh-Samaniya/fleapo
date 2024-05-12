window.addEventListener('resize', function() {
  var sidebar = document.getElementById("sidebar");
  if (window.innerWidth > 900) {
      sidebar.style.display = 'none';
  }
});

window.dispatchEvent(new Event('resize'));

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === 'block') {
      sidebar.style.display = 'none'; 
  } else {
      sidebar.style.display = 'block'; 
  }
}
