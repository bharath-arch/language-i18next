import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);  // This changes the language live
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ar')}>العربية</button>
      <button onClick={() => changeLanguage('fn')}>Français</button>
    </div>
  );
}

export default App;
