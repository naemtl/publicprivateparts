import { useTranslation } from "react-i18next";

import './Homepage.scss'

const Homepage = () => {
    const { t } = useTranslation()

    return (
        <div className='homepage'>
            {t('greeting')}
        </div>
    );
};

export default Homepage;
