# JihoLeec.github.io

Astro로 만든 취업용 포트폴리오 사이트입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:4321` 을 여세요.

## 콘텐츠 수정 위치

| 내용 | 파일 |
|------|------|
| 이름·소개·이메일·사진 경로 | `src/data/profile.ts` |
| 학력 | `src/data/education.ts` |
| 자격증 | `src/data/certifications.ts` |
| 경력 (Experience) | `src/data/experience.ts` |
| 프로젝트 | `src/content/projects/*.md` |
| 프로필 사진 | `public/images/profile.jpg` |

프로젝트 마크다운을 추가하면 목록과 상세 페이지가 자동으로 생깁니다.

## 배포

1. GitHub repo Settings → Pages → Source를 **GitHub Actions**로 설정
2. `main`에 push하면 `.github/workflows/deploy.yml`이 빌드·배포합니다

Git 커밋/푸시는 직접 진행하세요.
