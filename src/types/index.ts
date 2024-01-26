export type Location =
  | '서울'
  | '경기'
  | '인천'
  | '강원'
  | '충북'
  | '충남'
  | '대전'
  | '경북'
  | '경남'
  | '대구'
  | '울산'
  | '부산'
  | '전북'
  | '전남'
  | '광주'
  | '제주';

export const Locations = [
  '서울',
  '경기',
  '인천',
  '강원',
  '충북',
  '충남',
  '대전',
  '경북',
  '경남',
  '대구',
  '울산',
  '부산',
  '전북',
  '전남',
  '광주',
  '제주',
];

export type JobStatus =
  | '취업 상태 없음'
  | '재직자'
  | '자영업자'
  | '미취업자'
  | '프리랜서'
  | '일용근로자'
  | '(예비)창업자'
  | '단기 근로자'
  | '영농 종사자'
  | '제한 없음';

export const JobStatuses = [
  '취업 상태 없음',
  '재직자',
  '자영업자',
  '미취업자',
  '프리랜서',
  '일용근로자',
  '(예비)창업자',
  '단기 근로자',
  '영농 종사자',
  '제한 없음',
];

export type Gender = 'man' | 'woman';

export type QuestionType = {
  gender: Gender;
  location: Location;
  jobStatus: JobStatus;
};
