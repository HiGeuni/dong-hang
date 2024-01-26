import { questionState } from '@/atoms/questionState';
import { ComboboxDemo } from '@/components/ComboBox';
import { QuestionLayout } from '@/components/QuestionLayout';
import { Location, Locations } from '@/types';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const SelectLocation = () => {
  const questionValue = useRecoilValue(questionState);
  const setQuestionValue = useSetRecoilState(questionState);

  const handleChangeLocation = (data: string) => {
    if (data === questionValue.location) {
      setQuestionValue({
        ...questionValue,
        location: '',
      });
    } else {
      setQuestionValue({
        ...questionValue,
        location: data as Location,
      });
    }
  };

  return (
    <QuestionLayout
      title="지역을 선택해주세요."
      disabled={questionValue.location === ''}
      to="/onBoarding/status"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <ComboboxDemo
          value={questionValue.location as string}
          setValue={handleChangeLocation}
          placeholder="지역을 선택해주세요"
          datas={Locations}
        />
      </div>
    </QuestionLayout>
  );
};

export default SelectLocation;
