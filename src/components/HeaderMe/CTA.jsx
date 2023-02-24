
import Resume from "../../Assets/resumes.pdf"
import { useTranslation} from 'react-i18next';

export const CTA = () =>{
    const { t } = useTranslation();

    return (
        <div className="cta">
            <a href={Resume} download="rajkumar's resume" className="button">{t('Download Resume')} </a>
            <a href="#contact" className="button">{t('Hire Me')}</a>
        </div>
    )
}
