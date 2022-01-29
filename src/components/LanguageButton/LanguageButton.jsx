import { useTranslation } from "react-i18next";

import "./LanguageButton.scss";

const LanguageButton = ({ language, supportedLanguages }) => {
    const { i18n } = useTranslation()

    return (
        <button
            className='language-button'
            style={{ fontWeight: i18n.resolvedLanguage === language ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => i18n.changeLanguage(language)}
        >
            {supportedLanguages[language].shortName}
        </button>
    );
};

export default LanguageButton;
