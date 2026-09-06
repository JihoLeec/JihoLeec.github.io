/** 활동(Activities) — 항목을 추가·수정하세요 */
export type ActivityItem = {
	company: string;
	role: string;
	period: string;
	note?: string;
};

export const activities: ActivityItem[] = [
	{
		company: '글로벌하이텍전자',
		role: '국가교외근로장학생',
		period: '2024.03 - 2024.08',
	},
	{
		company: '(주)코멘토 SW 직무부트캠프',
		role: '수료',
		period: '2024.07 - 2024.08',
		note: '기획부터 개발까지 파이썬 백엔드 개발 실무 체험',
	},
	{
		company: '경희대 해커톤 khuthon 2026',
		role: '우수상',
		period: '2026.05',
		note: 'Team name: Six Sense',
	},
	{
		company: '백준',
		role: '골드 3',
		period: '2024.02 - 2026.04',
		note: '최장 스트릭 기록 793일',
	},
];
