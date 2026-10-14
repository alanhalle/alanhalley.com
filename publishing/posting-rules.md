# Posting rules, one site at a time

Each site's editor quirks, so a draft comes out right the first time. **Check the target site's row before
drafting, and add a row the first time a site surprises you.** This is the only copy: `comms.md` covers
which channels and in what order, and this file covers how to format for each.

## Every draft

- **Plain text in a code block**, one line per paragraph, an empty line between paragraphs. No markdown,
  no blockquote markers, no bold or italics. Write bullets as "–" or as short separate paragraphs.
  What reaches the clipboard from chat is not what these editors show.
- **Broadcast only.** Post and close the tab. No plan that depends on replying or building karma.
- **No hashtags.**
- **Log it** in `posts-log.md` once posted: date, site, and where the text lives.
- Your own site first (canonical URL), and the other sites get a short version plus a link.

## By site

| Site | Quirks | Learned |
|---|---|---|
| **LinkedIn** | No markdown. Hard line breaks inside a paragraph carry over badly, and blank lines between paragraphs may need re-adding by hand. Featured section for keepers. | 2026-09-24, 2026-10-13 |
| **projectmanagement.com** | Often strips the blank lines between paragraphs; Alan re-adds them by editing after posting, so **warn him in every pm.com draft**. Project thumbnails: upload **500×500 PNG** (400×400 gets squished to 400×347). Links allowed (doi.org worked 2026-10-14). | 2026-08-09, 2026-10-01 |
| **OpenMC Discourse** | **Rejects doi.org links** ("Sorry you cannot post a link to that host"). Write DOIs as plain text: `DOI 10.5281/zenodo.NNNNN`. Discourse renders markdown, but plain text is safe. Alan can't edit his posts there (no edit control on his account), so a correction has to be a reply. | 2026-10-12, 2026-10-14 |
| **Bluesky** | 300-character limit. A link counts toward it. The substitute for Mastodon. | 2026-09-22 (limit from general knowledge, not yet hit) |
| **X** | 280-character limit. Write the body first, add the URL last, trim from the bottom. A URL counts as 23 characters, whatever its length; → counts as 1. | before 2026-08 |
| **Hacker News** | Product posts start with "Show HN:". Body: stack, what it does, one honest number, no superlatives. Weekday mornings, US time. Hostile to marketing. | before 2026-08 |
| **IndieHackers** | Removes posts that read as ads. Build stories, postmortems and questions are fine. Not a sales channel. | 2026-09-28 |
| **ResearchGate** | Upload a PDF as a preprint; there's no DOI-only entry. Set the DOI field by hand. **Replace the auto-extracted Description** with the abstract, because it pulls the intro and mangles fi/fl ligatures. | 2026-09-16, 2026-09-30 |
| **Zenodo** | The deposit API's `/deposit/<id>` link is a 404 for drafts. Find drafts on the upload dashboard (`/uploads/<id>`) after logging in. | 2026-10-14 |
| **Mastodon** | Account disabled with no notice (found 2026-09-22). Not used. | 2026-09-22 |
