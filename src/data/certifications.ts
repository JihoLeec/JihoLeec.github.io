/** 자격증 — 항목을 추가·수정하세요 */
export type CertificationItem = {
	name: string;
	date: string;
};

export const certifications: CertificationItem[] = [
	{
		name: '정보처리기사',
		date: 'YYYY.MM',
	},
	{
		name: '빅데이터분석기사',
		date: 'YYYY.MM',
	},
	{
		name: 'SQLD',
		date: 'YYYY.MM',
	},
];
