/** 토이 프로젝트 — 항목을 추가·수정하세요 */
export type ToyProject = {
	title: string;
	summary: string;
	tags?: string[];
	href: string;
};

export const toys: ToyProject[] = [
	{
		title: 'K-MOOC / KOCW 강의 목록 크롤러',
		summary: '공개된 수천 개의 강의 목록을 수집해 액셀에 자동으로 정리하는 크롤러',
		tags: ['Python'],
		href: 'https://github.com/JihoLeec/k-edu-course-crawler',
	},
];
