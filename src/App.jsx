import React from "react";
import { useTranslation } from "react-i18next";
import Content from "./component/Content";
import NotificationExample from "./component/Notification/Notification";
import GeolocationExample from "./component/Location/Location";
import LocationFinder from "./component/Location/Pincode";

function App() {
  const { t, i18n } = useTranslation();

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
        <NotificationExample />
        <GeolocationExample />
        <LocationFinder/>
      </>
    </>
  );
}

export default App;
