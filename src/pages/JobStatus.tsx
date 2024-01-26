import { questionState } from '@/atoms/questionState';
import { ComboboxDemo } from '@/components/ComboBox';
import { QuestionLayout } from '@/components/QuestionLayout';
import { JobStatus, JobStatuses } from '@/types';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const SelectLocation = () => {
  const questionValue = useRecoilValue(questionState);
  const setQuestionValue = useSetRecoilState(questionState);

  const handleChangeLocation = (data: string) => {
    if (data === questionValue.jobStatus) {
      setQuestionValue({
        ...questionValue,
        location: '',
      });
    } else {
      setQuestionValue({
        ...questionValue,
        jobStatus: data as JobStatus,
      });
    }
  };

  return (
    <QuestionLayout
      title="취업상태를 알려주세요."
      disabled={questionValue.jobStatus === ''}
      to="/onBoarding/result"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <ComboboxDemo
          value={questionValue.jobStatus as string}
          setValue={handleChangeLocation}
          placeholder="취업 상태를 알려주세요"
          datas={JobStatuses}
        />
      </div>
    </QuestionLayout>
  );
};

export default SelectLocation;
