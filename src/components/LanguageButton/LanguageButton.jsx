import { useTranslation } from "react-i18next";

import "./LanguageButton.scss";

const LanguageButton = ({ supportedLanguages, language }) => {
    const { t, i18n } = useTranslation()

    return (
        <button
            className='language-button'
            key={language}
            style={{ fontWeight: i18n.resolvedLanguage === language ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => i18n.changeLanguage(language)}
        >
            {supportedLanguages[language].nativeName}
        </button>
    );
};

export default LanguageButton;
