const questions = document.querySelectorAll('.accordion-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const isActive = question.classList.contains('active');

    // Close all open items
    questions.forEach((q) => {
      q.classList.remove('active');
      q.nextElementSibling.style.display = 'none';
    });

    // If it wasn't already open, open this one
    if (!isActive) {
      question.classList.add('active');
      question.nextElementSibling.style.display = 'block';
    }
  });
});
