/**
 * Portfolio Eloïse Aubert
 * Interactivité navbar et menu mobile
 */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  const backgroundVideo = document.getElementById('backgroundVideo');

  // Vidéo : figer sur la dernière image à la fin
  if (backgroundVideo) {
    backgroundVideo.addEventListener('ended', () => {
      // Se positionner sur la dernière frame et arrêter la lecture
      backgroundVideo.pause();
      backgroundVideo.currentTime = backgroundVideo.duration;
    });
  }

  // Scroll : effet glassmorphism renforcé
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

  // Menu mobile
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Fermer le menu en cliquant sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
});
