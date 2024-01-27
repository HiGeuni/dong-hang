import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section className="w-full h-full relative">
      <img
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-3/4"
        src="/logo.png"
      />
      <Link to="/onBoarding">
        <Button className="absolute bottom-8 w-[300px] md:w-[600px] lg:w-[800px] left-0 right-0 mx-auto">
          내 정보 입력하기
        </Button>
      </Link>
    </section>
  );
};

export default Main;
