// public/sw.js
self.addEventListener('push', (event) => {
    const options = {
      body: event.data ? event.data.text() : 'No payload',
    };
  
    event.waitUntil(
      self.registration.showNotification('New Notification', options)
    );
  });
// self.addEventListener('push', (event) => {
//   const data = event.data ? event.data.json() : { title: 'No Title', body: 'No payload' };

//   const options = {
//     body: data.body || 'No payload',
//     // icon: 'https://example.com/icon.png', // Replace with your icon URL
//     image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', // Replace with your image URL
//     // badge: 'https://example.com/badge.png', // Optional: replace with your badge URL
//     actions: [
//       { action: 'explore', title: 'View' },
//       { action: 'close', title: 'Dismiss' },
//     ],
//     data: {
//       url: data.url || '/', // URL to open when notification is clicked
//     },
//   };

//   event.waitUntil(
//     self.registration.showNotification(data.title || 'New Notification', options)
//   );
// });

// // Handle notification click events
// self.addEventListener('notificationclick', (event) => {
//   event.notification.close(); // Close the notification

//   // Handle the action taken by the user
//   if (event.action === 'explore') {
//     clients.openWindow(event.notification.data.url); // Open the URL in a new tab
//   } else {
//     clients.openWindow('/'); // Default action
//   }
// });
