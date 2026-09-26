/** 자격증 — 항목을 추가·수정하세요 */
export type CertificationItem = {
	name: string;
	date: string;
};

export const certifications: CertificationItem[] = [
	{
		name: '정보처리기사 필기 합격',
		date: '2026.03.11',
	},
	{
		name: '빅데이터분석기사 필기 합격',
		date: '2026.09.23',
	},
];

/** 준비 중인 자격증 */
export const certificationsPrep: CertificationItem[] = [
	{
		name: 'SQLD',
		date: '2026.11.14 응시 예정',
	},
	{
		name: '한국사능력검정시험 1급',
		date: '2026.10.17 응시 예정',
	},
	{
		name: 'TOEIC',
		date: '2026.09.29 발표 예정',
	},
];
