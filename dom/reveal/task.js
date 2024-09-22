document.addEventListener('scroll', function() {
  const reveals = document.querySelectorAll('.reveal');
    
  reveals.forEach(reveal => {
    const rect = reveal.getBoundingClientRect();
    const windowHeight = window.innerHeight;

        // Проверяем, находится ли элемент в поле зрения
    if (rect.top < windowHeight && rect.bottom > 0) {
      reveal.classList.add('reveal_active');
    }
  });
});