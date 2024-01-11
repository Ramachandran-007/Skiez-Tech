// Register an event listener for the 'load' event
window.addEventListener('load', () => {
  // Initialize a variable to store the total blocking time
  let totalBlockingTime = 0;

  // Calculate the total blocking time using the Long Tasks API
  if ('PerformanceLongTaskTiming' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.hadRecentInput) {
          totalBlockingTime += entry.duration;
        }
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
  }

  // Measure the total blocking time using the Performance API
  if ('performance' in window && 'timeOrigin' in performance) {
    const navEntry = performance.getEntriesByType('navigation')[0];
    const mainThreadActivity = navEntry.processingStart - navEntry.startTime;
    totalBlockingTime += mainThreadActivity;
  }

  // Log the total blocking time (TBT) in the console
  console.log('Total Blocking Time (TBT):', totalBlockingTime);
});
