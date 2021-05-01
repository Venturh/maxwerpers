import useTranslation from 'next-translate/useTranslation';
import { footer } from 'content';

import { Discord, Link, Logo, LanguageSwitch } from 'components';

const Footer = () => {
  const { t } = useTranslation('portfolio');

  return (
    <div className="flex flex-col w-full py-6 space-y-4 text-base">
      <div className="w-full border-t-2 border-accent" />
      <div className="flex flex-col-reverse sm:flex-col sm:grid sm:grid-cols-4">
        <div className="col-span-2 mb-4 space-y-1">
          <div className="mt-4 space-y-2 sm:mt-0">
            <Discord />
            <p className="text-sm text-secondary">
              © 2020-2021 - Maximilian Werpers{' '}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-4 text-base sm:grid-cols-3">
          {Object.entries(footer).map(([title, values]) => (
            <div className="space-y-2" key={title}>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-secondary">
                {t(`${title}`)}
              </h3>
              <div className="flex flex-col space-y-2 ">
                {values.map(({ link, name, internal }) => (
                  <Link key={name} to={link} out={!internal}>
                    <span className="text-secondary">
                      {title === 'pages' ? t(`${name}`) : name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-secondary">
              {t('language')}
            </h3>
            <LanguageSwitch withDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
