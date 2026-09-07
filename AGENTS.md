## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


// 아래 내용은 개인적인 요청이므로 수정해도 무방합니다.
## Git

The human owns git by default. Do not run git commands (`status`, `add`, `commit`, `push`, `pull`, `checkout`, and so on) unless the user clearly asks you to do that git work.

If the user did not ask you to run git:

- Do not stage, commit, or push.
- After you finish the work, summarize the changes.
- Suggest a commit title that matches this repo's recent style (`feat:`, `fix:`, `docs:`, `chore:`, `refactor`,).
- A title plus a short summary is enough. Do not create the commit.

If the user explicitly asks you to commit, push, or otherwise run git, then you may do that git work.
