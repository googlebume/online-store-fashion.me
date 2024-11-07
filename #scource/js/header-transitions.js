export function headerBacgroundReplacementTransition() {
    let imageCounter = 1;
    const maxImageCount = 3;
    const transitionDelay = 10000; // 10 секунд
  
    setInterval(headerReplacement, transitionDelay);
  
    function headerReplacement() {
      const header = document.querySelector('header');
      header.style.backgroundImage = `url(../../imgs/headers/header-image_${imageCounter}.jpg)`;
  
      imageCounter++;
      if (imageCounter > maxImageCount) {
        imageCounter = 1; // Скинути лічильник на 1 після останньої картинки
      }
    }
  }