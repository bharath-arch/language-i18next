import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Content from "./component/Content";
// import NotificationExample from "./component/Notification/Notification";
import GeolocationExample from "./component/Location/Location";
import LocationFinder from "./component/Location/Pincode";

function App() {
  const { t, i18n } = useTranslation();
  const [notificationContent, setNotificationContent] = useState("");
  const [notificationTime, setNotificationTime] = useState("");

  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then((registration) => {
  //         console.log("Service Worker registered:", registration);
  //         return registration.pushManager.getSubscription();
  //       })
  //       .then((subscription) => {
  //         if (subscription) return;

  //         const publicKey =
  //           "BGdjpwjQn-atnVi6N2LtqQCzN7cjbtMTWYpb9vBqLrdTZAr8x034kSZb_gVe10vIWG_F2w_XTyfD_9q4IqdTHDk"; // Replace with your VAPID public key
  //         const options = {
  //           userVisibleOnly: true,
  //           applicationServerKey: urlB64ToUint8Array(publicKey),
  //         };

  //         return navigator.serviceWorker.ready.then((registration) =>
  //           registration.pushManager.subscribe(options)
  //         );
  //       })
  //       .then((subscription) => {
  //         console.log("Subscription object:", subscription); // Log the subscription
  //         return fetch("http://localhost:5000/subscribe", {
  //           method: "POST",
  //           body: JSON.stringify(subscription),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  //       })
  //       .catch((error) =>
  //         console.error("Error during service worker registration:", error)
  //       );
  //   }
  // }, []);
  const checkPermission = () => {
    if (!("serviceWorker" in navigator)) {
      throw new Error("No support for service worker!");
    }

    if (!("Notification" in window)) {
      throw new Error("No support for notification API");
    }

    if (!("PushManager" in window)) {
      throw new Error("No support for Push API");
    }
  };

  const registerSW = async () => {
    const registration = await navigator.serviceWorker.register("sw.js");
    return registration;
  };

  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Notification permission not granted");
    }
  };

  const main = async () => {
    checkPermission();
    await requestNotificationPermission();
    await registerSW();
  };

  const scheduleNotification = () => {
    fetch("http://localhost:5000/schedule-notification", {
      method: "POST",
      body: JSON.stringify({
        content: notificationContent,
        time: notificationTime,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setNotificationContent("");
        setNotificationTime("");
      })
      .catch((error) => {
        console.error("Error scheduling notification:", error);
      });
  };

  // function urlB64ToUint8Array(base64String) {
  //   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  //   const base64 = (base64String + padding)
  //     .replace(/-/g, "+")
  //     .replace(/_/g, "/");
  //   const rawData = window.atob(base64);
  //   return new Uint8Array([...rawData].map((char) => char.charCodeAt(0)));
  // }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // This changes the language live
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>

        <Content />

        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ar")}>العربية</button>
        <button onClick={() => changeLanguage("fn")}>Français</button>
      </div>
      <>
        {/* <NotificationExample /> */}
        <GeolocationExample />
        <LocationFinder />
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>Push Notifications</h1>
          <button onClick={main}>Enable Notification</button>
          {/* <input
            type="text"
            placeholder="Notification Content"
            value={notificationContent}
            onChange={(e) => setNotificationContent(e.target.value)}
          />
          <input
            type="datetime-local"
            value={notificationTime}
            onChange={(e) => setNotificationTime(e.target.value)}
          />
          <button onClick={scheduleNotification}>Schedule Notification</button> */}
        </div>
      </>
    </>
  );
}

export default App;
