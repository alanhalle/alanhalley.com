# The Last 80%

Andrej Karpathy built a menu app. Claude wrote him a polished React frontend — animations, responsive, the works — in a few hours. He felt 80% done.

He was 20% done.

The code was the easy part. What ate the rest of his time: a custom domain and OAuth through Google Cloud Console just to get login working. Stripe, and getting payments to actually match up with the right user's account. Deprecated docs that Claude confidently hallucinated fixes for. Environment variables, rate limiting, making the thing reachable at a public URL instead of just running on his laptop. His own words: he spent more time in browser tabs clicking through settings than in the code editor.

I've hit the same wall, closer to home. darthvader.mba is a small satire site I run on a Cloudflare Worker, with Stripe handling real money — people pay to vote. Early on, people were paying, Stripe was charging their cards, and the votes never showed up on the leaderboard. Nothing was broken in any way a code review would catch. The checkout session just wasn't carrying the metadata the webhook needed to know which nominee the vote was for — so money moved and nothing recorded. Found it, fixed it, made the webhook idempotent so a Stripe retry couldn't double-count a vote. None of that is prompting skill. It's knowing where systems like this quietly fail.

That's the pattern. The AI writes code faster every month. The part that hasn't gotten any faster is domains, auth, webhooks, and the fifteen minutes of silent failure because a key didn't get set in the right place. That part is still just work. It rewards having done it before, wrong, a few times.

If you've built a prototype with Claude Code or Cursor and it's sitting at "works on my laptop," that's usually not a sign you need better prompts. It's the last 80%, and it's a different kind of job than the first 20%.

[alanhalley.com/#work](https://alanhalley.com/#work)
