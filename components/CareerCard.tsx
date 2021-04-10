import useTranslation from 'next-translate/useTranslation';

import { Label, Link } from 'components';
import { career } from 'content';
import { Career } from '@types';

type Props = {
  career: Career;
  last: boolean;
};

const CareerCard = ({
  career: { title, description, time, type, tech, url, logo },
  last,
}: Props) => {
  const { t } = useTranslation();
  return (
    <li className="w-full py-2">
      <div className="relative">
        {!last && (
          <span
            className="hidden md:block absolute top-4 left-3 md:left-5 h-full w-0.5 bg-accentBg"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start md:space-x-3">
          <img
            className="items-center justify-center hidden w-6 h-6 rounded-full md:flex md:w-10 md:h-10 bg-primary ring-8 ring-primaryBg ring-offset-accentBg ring-offset-1"
            src={`/images/${logo}`}
            alt=""
          />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <Link out to={url}>
                <span className="text-lg font-medium">{title}</span>
              </Link>
              <Label variant="15">{t(`portfolio:${type}`)}</Label>
            </div>
            <p className="text-sm">{t(`portfolio:${time}`)}</p>
            <p className="prose ">{t(`portfolio:${description}`)}</p>
            <div className="flex mt-1 space-x-1">
              {tech.map((t) => (
                <Label variant="15" key={t}>
                  {t}
                </Label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CareerCard;
