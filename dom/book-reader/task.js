document.addEventListener('DOMContentLoaded', function() {
  const fontSizeLinks = document.querySelectorAll('.font-size');
  const book = document.getElementById('book');

  fontSizeLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Предотвращаем переход по ссылке

          // Удаляем активный класс у всех ссылок
          fontSizeLinks.forEach(item => {
              item.classList.remove('font-size_active');
          });

          // Добавляем активный класс к текущему элементу
          this.classList.add('font-size_active');

          // Удаляем классы размера шрифта у книги
          book.classList.remove('book_fs-small', 'book_fs-big');

          // Добавляем соответствующий класс в зависимости от выбранного размера
          const size = this.dataset.size;
          if (size === 'small') {
              book.classList.add('book_fs-small');
          } else if (size === 'big') {
              book.classList.add('book_fs-big');
          }
      });
  });
});