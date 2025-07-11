document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  projects.forEach(project => {
    observer.observe(project);
  });
});

const topBtn = document.getElementById("topBtn");

    window.onscroll = function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
