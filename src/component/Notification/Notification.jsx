// import React, { useEffect } from "react";
// // import icons from "../../assets/react.svg"
// const NotificationExample = () => {
//   useEffect(() => {
//     // Request permission to show notifications
//     const requestNotificationPermission = async () => {
//       const permission = await Notification.requestPermission();
//       //   if (permission === 'granted') {
//       //     new Notification('Welcome!', {
//       //       body: 'You can now receive notifications.',
//       //     //   icon: 'https://example.com/icon.png', // Replace with your icon URL
//       //       image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', // Replace with your image URL
//       //     });
//       //   }
//     };

//     requestNotificationPermission();
//   }, []);

//   const showNotification = () => {
//     // if (Notification.permission === "granted") {
//       // if (permission === 'granted') {
//       new Notification("Welcome!", {
//         body: "You can now receive notifications.",
//         //   icon: 'https://example.com/icon.png', // Replace with your icon URL
//         image:
//           "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Replace with your image URL
//       });
//       //   }
//     // }
//   };

//   return (
//     <div>
//       <h1>Web Notifications Example</h1>
//       <button onClick={showNotification}>Show Notification</button>
//     </div>
//   );
// };

// export default NotificationExample;
import React, { useEffect } from "react";

const NotificationExample = () => {
  useEffect(() => {
    const requestNotificationPermission = async () => {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Notification permission granted");
        new Notification("Welcome!", {
          body: "You can now receive notifications.",
          //   icon: 'https://example.com/icon.png', // Replace with your icon URL
        //   image:
        //     "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Replace with your image URL
        });
        //   }
      } else {
        console.error("Notification permission denied");
      }
    };

    requestNotificationPermission();
  }, []);

  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Welcome!", {
        body: "You can now receive notifications.",
        image:
          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      });
    } else {
      console.error("Notification permission not granted");
    }
  };

  return (
    <div>
      <h1>Web Notifications Example</h1>
      <button onClick={showNotification}>Show Notification</button>
    </div>
  );
};

export default NotificationExample;
