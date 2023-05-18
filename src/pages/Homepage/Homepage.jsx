import { Trans, useTranslation } from "react-i18next";

import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

import Footer from "../../components/Footer/Footer";

import './Homepage.scss'

const Homepage = () => {
    const { t } = useTranslation('homepage')

    const isMobile = useCheckMobileScreen()

    return (
        <div className='homepage'>
            <div>TEST</div>
            <Footer />
        </div>
    );
};

export default Homepage;
