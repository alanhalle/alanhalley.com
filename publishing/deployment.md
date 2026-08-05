# Deployment Guide

## Normal deploy: all Vercel sites

```
git push
```

Vercel auto-deploys on push to the default branch. No manual step. Check deployment status at vercel.com/alanhalle.

Sites on Vercel: briefwork.io, ilhe.us, ilhe.us/menus, ilheus.menu, decisions.alanhalley.com, issues.alanhalley.com, nuclides.alanhalley.com, ken.alanhalley.com

## alanhalley.com (exception — CF Pages, not Vercel)

Repo: alanhalle/second-brain, branch: master  
Output dir: nimbalyst-local/deploy/alanhalley/  
Build command: `exit 0` (static files, no build step)

```
git push  ← pushes second-brain/master → CF Pages auto-deploys
```

Manage at: Cloudflare dashboard → Pages → alanhalley-com

## Gotchas

**SPA catch-all on Vercel**: sitemap.xml and robots.txt must have explicit routes defined before the catch-all `/*` rule in vercel.json, or they return the app shell instead of the file.

**alanhalley.com is not on Vercel**: easy to look for it there and not find it. It's on CF Pages.

**briefwork.io env vars**: Supabase URL/key, Stripe secret, Resend API key are in Vercel environment variables. If the project is ever recreated, these must be re-entered manually. Keys are in `.env` at the workspace root and in 1Password/wherever you store secrets.

**decisions-app Supabase DB is shared**: briefwork.io and decisions.alanhalley.com both use the same `decisions-app` Supabase project (free-tier workaround). Schema changes affect both apps.

## DNS changes

All DNS is on Cloudflare. See infrastructure.md → DNS section.  
Parked domains (appengineers.com, trikescore.com) still use Namecheap DNS.
