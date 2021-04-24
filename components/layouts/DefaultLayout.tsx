import Navigation from '../Navigation';
import Footer from '../Footer';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const DefaultLayout = ({ children, className }: Props) => {
  return (
    <main className="flex flex-col items-center mx-auto space-y-6 text-base max-w-xsm md:max-w-2xl lg:text-lg lg:max-w-3xl">
      <Navigation />
      <div
        className={clsx(
          className,
          'md:max-w-3xl flex flex-col flex-auto w-full h-full'
        )}
      >
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default DefaultLayout;
