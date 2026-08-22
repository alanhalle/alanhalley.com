# Deployment Guide

## Normal deploy: all Vercel sites

```
git push
```

Vercel auto-deploys on push to the default branch. No manual step. Check deployment status at vercel.com/alanhalle.

Sites on Vercel: briefwork.io, ilhe.us, ilhe.us/menus, ilheus.menu, decisions.alanhalley.com, issues.alanhalley.com, nuclides.alanhalley.com, ken.alanhalley.com

## alanhalley.com (exception — CF Pages, not Vercel, and its own repo)

Repo: **alanhalle/alanhalley.com**, branch **main**  
Local path: `Nimbalyst/projects/alanhalley.com/` — a **nested git repo**, gitignored from second-brain (`.gitignore:10`), so its changes never appear in second-brain's `git status`  
Site root is the repo root: `writing/`, `about/`, `projects/`, `sitemap.xml` sit at the top level  
Build command: `exit 0` (static files, no build step)

```
cd projects/alanhalley.com
git push origin main   ← CF Pages auto-deploys, live in well under a minute
pwsh scripts/verify-deploy.ps1
```

Manage at: Cloudflare dashboard → Pages → alanhalley-com

**Verified 2026-08-22:** pushed a new essay to `alanhalle/alanhalley.com` `main` and `verify-deploy.ps1` returned 20/20 against the live URLs, including the new page.

### Superseded: the second-brain deploy directory

`nimbalyst-local/deploy/alanhalley/` in the **second-brain** repo is an **earlier CF Pages configuration and is no longer what serves the site.** Last touched 2026-05-20. It still contains `CLOUDFLARE-PAGES-SETUP.md` describing a build from `alanhalle/second-brain@master` with output dir `nimbalyst-local/deploy/alanhalley` — that setup is dead. The directory has no `writing/` at all, which is the quickest way to tell you are in the wrong place.

**Do not publish there.** Editing it produces no deploy and no error.

## Gotchas

**SPA catch-all on Vercel**: sitemap.xml and robots.txt must have explicit routes defined before the catch-all `/*` rule in vercel.json, or they return the app shell instead of the file.

**alanhalley.com is not on Vercel**: easy to look for it there and not find it. It's on CF Pages, from its own repo — see above. Two wrong beliefs are in circulation about this site: that it deploys from Vercel, and that it deploys from second-brain's `nimbalyst-local/deploy/alanhalley/`. Neither is true. It is `alanhalle/alanhalley.com`, branch `main`.

**briefwork.io env vars**: Supabase URL/key, Stripe secret, Resend API key are in Vercel environment variables. If the project is ever recreated, these must be re-entered manually. Keys are in `.env` at the workspace root and in 1Password/wherever you store secrets.

**decisions-app Supabase DB is shared**: briefwork.io and decisions.alanhalley.com both use the same `decisions-app` Supabase project (free-tier workaround). Schema changes affect both apps.

## DNS changes

All DNS is on Cloudflare. See infrastructure.md → DNS section.  
Parked domains (appengineers.com, trikescore.com) still use Namecheap DNS.
