// Register an event listener for the 'DOMContentLoaded' event
window.addEventListener('DOMContentLoaded', () => {
  // Initialize a variable to store the cumulative layout shift
  let cumulativeLayoutShift = 0;

  // Create a PerformanceObserver to monitor layout shifts
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (!entry.hadRecentInput) {
        cumulativeLayoutShift += entry.value;
      }
    });
  });

  // Observe layout shift entries
  observer.observe({ type: 'layout-shift', buffered: true });

  // Log the cumulative layout shift (CLS) in the console
  console.log('Cumulative Layout Shift (CLS):', cumulativeLayoutShift);
});
