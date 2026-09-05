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
		company: '회사 / 조직명',
		role: '직무 / 직책',
		period: 'YYYY.MM – YYYY.MM',
		summary: '담당한 업무를 한두 문장으로 요약하세요.',
		highlights: ['주요 성과 또는 업무 1', '주요 성과 또는 업무 2'],
	},
	{
		company: '회사 / 조직명 (예시 2)',
		role: '직무 / 직책',
		period: 'YYYY.MM – Present',
		summary: '인턴, 아르바이트, 연구실 등도 여기에 넣을 수 있습니다.',
	},
];
