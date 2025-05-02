const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
  });
  
  // Get references to HTML elements
  const counterElement = document.querySelector(".counter");
  const projectSection = document.getElementById("projectSection");
  
  let counter = 0;
  let counting = false;
  
  // Function to increment the counter
  function incrementCounter() {
      if (counting) return;
      counting = true;
      const targetCount = 100; // Set your target count here
      const increment = targetCount / 100; // Divide by the number of pixels in the section
  
      const interval = setInterval(() => {
          counter += increment;
          counterElement.textContent = Math.round(counter);
  
          if (counter >= targetCount) {
              clearInterval(interval);
              counter = targetCount; // Ensure the final count is exact
          }
  
          counting = false;
      }, 10); // Adjust the interval as needed
  }
  
  // Listen for scroll events
  window.addEventListener("scroll", () => {
      const sectionRect = projectSection.getBoundingClientRect();
      if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0 && !counting) {
          incrementCounter();
      }
  });
  