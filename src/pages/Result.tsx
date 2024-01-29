import { questionState } from '@/atoms/questionState';
import { QuestionLayout } from '@/components/QuestionLayout';
import { useRecoilValue } from 'recoil';

const Result = () => {
  const questionValue = useRecoilValue(questionState);

  return (
    <QuestionLayout to="/chat" navigationName="채팅 시작하기">
      <div className="w-full h-full -mt-20 text-xl flex flex-col gap-y-8 items-center justify-center">
        <div>
          <span className="font-bold">성별</span> :{' '}
          {questionValue.gender ? questionValue.gender : '입력하지 않음'}
        </div>
        <div>
          <span className="font-bold">직업</span> :{' '}
          {questionValue.jobStatus ? questionValue.jobStatus : '입력하지 않음'}
        </div>
        <div>
          <span className="font-bold">지역</span> :{' '}
          {questionValue.location ? questionValue.location : '입력하지 않음'}
        </div>
      </div>
    </QuestionLayout>
  );
};

export default Result;
