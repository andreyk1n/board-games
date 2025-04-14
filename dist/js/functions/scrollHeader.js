// ---------------------------------------------------------------------------------------------------------------
// Для коректної роботи хедер має мати клас .header, position: fixed, і решту стилів які прописані в темі 
// саме для хедера
// ---------------------------------------------------------------------------------------------------------------
export function initScrollControlledHeader() {
  let lastScrollTop = 0;
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    header.classList.toggle('scrolled', scrollTop > 10);
    lastScrollTop = scrollTop;
  });
}
// ---------------------------------------------------------------------------------------------------------------


