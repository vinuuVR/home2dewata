document.addEventListener("DOMContentLoaded", () => {
  // 1. Select all the elements we want to animate
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  // 2. Set up the Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 3. When an element is on screen (isIntersecting)...
        if (entry.isIntersecting) {
          // ...add the '.is-visible' class to it.
          entry.target.classList.add("is-visible");

          // 4. Stop observing it so the animation doesn't re-run
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // 5. Tell the observer to watch each of our elements
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});
