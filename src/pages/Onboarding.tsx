import { questionState } from '@/atoms/questionState';
import { QuestionLayout } from '@/components/QuestionLayout';
import { Button } from '@/components/ui/button';
import { Gender } from '@/types';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const OnBoarding = () => {
  const questionValue = useRecoilValue(questionState);
  const setGenderValue = useSetRecoilState(questionState);

  const handleOnClick = (data: Gender) => {
    if (data === questionValue.gender) {
      setGenderValue({
        ...questionValue,
        gender: '',
      });
    } else {
      setGenderValue({
        ...questionValue,
        gender: data,
      });
    }
  };

  return (
    <QuestionLayout
      title="성별을 선택해주세요."
      disabled={questionValue.gender === ''}
      to="/onBoarding/location"
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-32">
        <div className="flex flex-col gap-8">
          <Button
            variant={questionValue.gender === 'man' ? 'default' : 'secondary'}
            className="text-lg font-bold px-20"
            onClick={() => handleOnClick('man')}
          >
            남자
          </Button>
          <Button
            variant={questionValue.gender === 'woman' ? 'default' : 'secondary'}
            className="text-lg  font-bold"
            onClick={() => handleOnClick('woman')}
          >
            여자
          </Button>
        </div>
      </div>
    </QuestionLayout>
  );
};

export default OnBoarding;
