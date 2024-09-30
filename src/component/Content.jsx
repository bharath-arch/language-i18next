import React from "react";
import { useTranslation } from "react-i18next";

function Content() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("content")}</p>
    </div>
  );
}

export default Content;
