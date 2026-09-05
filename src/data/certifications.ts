/** 자격증 — 항목을 추가·수정하세요 */
export type CertificationItem = {
	name: string;
	date: string;
};

export const certifications: CertificationItem[] = [
	{
		name: '정보처리기사',
		date: '2026.09',
	},
	{
		name: '빅데이터분석기사',
		date: '2026.12',
	},
	{
		name: 'SQLD',
		date: '2026.12',
	},
];
