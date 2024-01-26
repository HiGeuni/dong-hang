import { JobStatus } from './../types/index';
import { Gender, Location } from '@/types';
import { atom } from 'recoil';

type QuestionType = {
  gender: Gender | '';
  location: Location | '';
  jobStatus: JobStatus | '';
};

export const questionState = atom<QuestionType>({
  key: 'questionState',
  default: {
    gender: '',
    location: '',
    jobStatus: '',
  },
});
