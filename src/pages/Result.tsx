import { questionState } from '@/atoms/questionState';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const Result = () => {
  const questionValue = useRecoilValue(questionState);

  return (
    <div>
      <div>{questionValue.gender}</div>
      <div>{questionValue.jobStatus}</div>
      <div>{questionValue.location}</div>
      <Link to="/">
        <Button>홈으로</Button>
      </Link>
    </div>
  );
};

export default Result;
