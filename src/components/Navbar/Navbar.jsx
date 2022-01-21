import React from 'react';
import { useTranslation } from "react-i18next";

import { supportedLanguages } from "../../utils/localization";

const Navbar = () => {
    const { t, i18n } = useTranslation()

    return (
        <div>
            <div>
                {Object.keys(supportedLanguages).map((lang) => (
                    <button
                        key={lang}
                        style={{ fontWeight: i18n.resolvedLanguage === lang ? 'bold' : 'normal' }}
                        type="submit"
                        onClick={() => i18n.changeLanguage(lang)}
                    >
                        {supportedLanguages[lang].nativeName}
                    </button>
                ))}
            </div>
        </div>
    )
};

export default Navbar;
