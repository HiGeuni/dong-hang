import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface QuestionLayoutProps {
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
  to: string;
  navigationName?: string;
}

export const QuestionLayout = ({
  title,
  children,
  disabled,
  to,
  navigationName = '다음으로',
}: QuestionLayoutProps) => {
  const navigate = useNavigate();

  const handleOnBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="relative w-full h-full">
      <div className="mx-auto w-full md:w-[600px] lg:w-[800px]">
        <nav className="pl-4 pt-4 md:pl-0" onClick={handleOnBackClick}>
          <ArrowLeft size={20} />
        </nav>
        <h1 className="absolute top-[25%] left-1/2 -translate-x-1/2 w-full text-2xl font-bold">
          {title}
        </h1>
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] lg:w-[800px]">
          {children}
        </div>
        <Link to={to}>
          <Button
            className="absolute bottom-8 w-[300px] md:w-[600px] lg:w-[800px] left-0 right-0 mx-auto"
            disabled={disabled}
          >
            {navigationName}
          </Button>
        </Link>
      </div>
    </div>
  );
};
