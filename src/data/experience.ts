/** 경력(Experience) — 항목을 추가·수정하세요 */
export type ExperienceItem = {
	company: string;
	role: string;
	period: string;
	summary?: string;
	highlights?: string[];
};

export const experiences: ExperienceItem[] = [
	{
		company: '무직',
		role: '백수',
		period: '2002.01 - 2026.12',
		summary: '미정',
		highlights: ['운동하기', '브롤하기'],
	},
];
