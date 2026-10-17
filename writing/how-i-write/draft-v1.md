# How I Write

*Draft 3, 2026-10-17. Assembled from Alan's own sentences (sessions 2026-10-05 and 2026-10-13), copyedited only. Brackets are gaps only Alan can fill.*

---

More than 50 homes. 27 cars. Ten years in Columbia, and I never renewed a lease.

My years are school years. Columbia is a college town, and everyone thought in school years, September to May. My leases probably followed the school year, at least for a while.

I did some programming for an Iowa seed corn company, analyzing customer surveys. The data was delivered on a 2314 disk pack. I rented a DEC printer terminal, not a CRT.

When was that?

I remember the house where I used the DEC. I didn't know the year. Which car did I own then? I couldn't remember. Where did I live before? I kept filling in the database.

Mostly I linked cars with homes. But I remember owning five cars at one home. I sold the Fiat with the Ferrari engine at the house with five cars. When did I buy the Fiat? That summer in Overland Park, when I bought a Mini Cooper and rebuilt the engine in the spare bedroom. I also sold the Porsche 914 and a friend's Porsche that summer. Oh, and I drove a different Porsche 914 and a 911T to San Francisco to sell.

Garry, who sold me the 911T, sent me an email a few years ago: "Remember the Porsche 911T that I sold you in 1975?"

A year anchored.

I left for San Francisco on New Year's Eve from the Dartmouth house. The DEC terminal and the 911T didn't overlap. The DEC was on Alexander. The 911T was on Dartmouth, bought in one year and sold in another, a few months later.

## The database

Years ago I made a list of places I had lived on Google Maps My Places, as research for an iPhone app I was building for a client. I had 51 homes in My Places. We have added some I recently remembered. After I moved to Ilhéus I made a spreadsheet listing all the cars I had owned: 27. I haven't owned a car since 2010.

The homes and cars lists went into the database when I started writing "my memoirs," as Claude asked me when a story occurred.

It has tables for homes, cars, work, people, schools, events and stories. Homes and cars matter only as anchors. There are places I don't remember, and that's fine.

It has still taken me months to fill the gaps.

## How it works

I tell Claude stories. Claude stores them verbatim. We work through the details using the database for reference. Then Claude publishes the essay to alanhalley.com and drafts a blurb for LinkedIn.

[FIGURE: how-it-works.svg]

The database is Postgres on Supabase, on the free tier. Ten tables: homes (55 rows), cars (26), work (32), schools (24), people (23), events (27), stories (30), and a year table (76) that the others point to, plus two tables linking stories to people and events. Claude reads and writes it directly.

## I can't trust my memory

Homes were on Oxford, then Dartmouth, then Alexander, then the house north of town that burned as we finished moving in.

We still had the Mercedes in the garage of the burning house. But I don't remember the Mercedes on Alexander. I bought a snooker table and a billiards table on Dartmouth. I think I remember the pieces of the tables in the basement on Alexander. I remember moving the pieces of the tables from the burned house. I traded the billiard table for a Nakamichi receiver. I sold the snooker table back to the pool hall on Ninth Street. Maybe I didn't move the tables from Dartmouth?

I remember buying special bolts in New York for one of the tables. Maybe I moved only the billiard table to Alexander and sold it there? Not important. Just irritating. I think I imagined the smoke-stained pieces of tables. I know that I sold the snooker table back to the original owner, unburned.

I can't trust my memory.

## The second memory

I started on the second memory idea almost a year ago. A Workflowy aficionado with ADHD on YouTube got me thinking about AI. I first used Claude to reorganize my Downloads folder, as a test, maybe November 2025. I found Emergent.sh in December, I think. Then OpenClaw got my interest. It changed names several times. I tried to install a Claw on Emergent and got an unexpected bill. And then I started building with Claude.

I write a story and Claude asks me, "When was that?" Then I remember the car I owned, then where I lived. Usually. Some things just aren't coming back to mind after decades.

The database serves its purpose, my second memory.

Now I can ask Claude, "Which August did I go to France?"
