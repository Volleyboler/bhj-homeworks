document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    valueElement.addEventListener('click', function() {
      listElement.classList.toggle('dropdown__list_active');
    });

    const items = dropdown.querySelectorAll('.dropdown__item');

    items.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedValue = item.textContent;
        valueElement.textContent = selectedValue;
        listElement.classList.remove('dropdown__list_active');
      });
    });

    document.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target)) {
        listElement.classList.remove('dropdown__list_active');
      }
    });
  });
});