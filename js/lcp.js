// Register an event listener for the 'load' event
window.addEventListener('load', () => {
  // Get all the elements on the page
  const elements = document.querySelectorAll('*');
  
  // Initialize a variable to store the largest contentful paint time
  let largestPaintTime = 0;
  
  // Iterate through all the elements and find the largest paint time
  elements.forEach((element) => {
    const paintTime = element.getClientRects()[0].width;
    
    if (paintTime > largestPaintTime) {
      largestPaintTime = paintTime;
    }
  });
  
  // Log the largest paint time (LCP) in the console
  console.log('Largest Contentful Paint (LCP):', largestPaintTime);
});
