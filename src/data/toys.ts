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
	{
		title: '강의 요약 생성기 및 퀴즈 생성기',
		summary: '강의 음성을 업로드해 텍스트로 변환해 요약한 내용을 기반으로 퀴즈를 생성하는 웹 어플리케이션',
		tags: ['Python', 'Flask', 'KoBART'],
		href: 'https://github.com/JihoLeec/OS_15',
	},
];
