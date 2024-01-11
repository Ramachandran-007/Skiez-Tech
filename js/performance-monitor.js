// Create a PerformanceObserver object
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`Performance Entry: ${entry.name}`);
    console.log(`Start Time: ${entry.startTime}`);
    console.log(`Duration: ${entry.duration}`);
    // Additional properties and data can be accessed depending on the entry type
  });
});

// Specify the entry types you want to observe
const entryTypes = ['navigation', 'resource', 'paint', 'mark', 'measure'];

// Start observing performance entries
observer.observe({ entryTypes });

// Stop observing performance entries
// observer.disconnect();
