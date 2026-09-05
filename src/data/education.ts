/** 학력 — 항목을 추가·수정하세요 */
export type EducationItem = {
	school: string;
	degree: string;
	period: string;
	detail?: string;
};

export const education: EducationItem[] = [
	{
		school: '단국대학교',
		degree: '소프트웨어학과',
		period: '2023.03 - 2027.02',
		detail: '학점, 세부 전공, 활동 등 (선택)',
	},
];
