const closeIcon = document.querySelector('.close-icon');
const sidebarCheckbox = document.getElementById('sidebar-icon-checkbox');

closeIcon.addEventListener('click',()=>{
  sidebarCheckbox.checked = false;
})