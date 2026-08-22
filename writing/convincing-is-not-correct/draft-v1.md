# Convincing Is Not Correct

Four of the programs were perfect. Materials defined, geometry laid out, source spectrum built, tallies configured. Everything a reviewer would check, correct. Then they stopped.

No error. No output. Exit code zero, which in computing means "everything went fine." They had written out a complete setup for a calculation and never run the calculation. It's like watching someone lay every tool out on the bench, in order, and then go home.

If I had read that code instead of running it, I would have marked all four as passes.

## What I was actually doing

Forty years ago there was a calculation about neutrons leaking through gaps in fusion reactor shielding. Radiation doesn't only go through walls; it also finds the seams, the maintenance ports, the places where two slabs of steel don't quite meet. That's the whole problem. Earlier this year I reproduced that 1984 study with modern software, which means I now have something rare: a set of physics problems where I know the right answer.

So I gave the problems to an AI. Thirty times. Five problems, easy to hard, several attempts each, no hints and no second chances. Then I ran every single program it wrote and compared the number that came out against the number I already knew was correct.

That last part is the whole point, and it's the part almost nobody does.

## Reading is not running

When people ask whether AI can do technical work, they usually answer by looking. An expert reads the output and decides whether it looks right. That's a real test of something — it tells you whether the work is *convincing*. It does not tell you whether it's *correct*.

Those come apart more often than you'd think. Code that reads beautifully can be wrong in one character. Code that looks clumsy can be exactly right. And code can be complete, valid, and entirely inert, like my four.

Running it collapses the question. Either the program produces the number or it doesn't. Either the number matches the physics or it doesn't. There's no judgment call and nothing to argue about, which is unusual and worth appreciating when you find it.

I'm writing the results up properly, so I'll keep the details for the paper. One thing I'll say now: almost none of the failures were about physics. The AI understood the radiation fine. It got beaten by the fine print of one software library — a keyword that doesn't exist, a value outside an allowed list, two functions that each work but not together. The equivalent of knowing exactly what you want to say and misspelling one word so the letter comes back.

That's a much more fixable problem than "it doesn't understand physics." It's also much harder to notice, because every failure of that kind is a line of code that reads perfectly well.

## Then I checked my own instrument

Here's the part I didn't expect to write.

To score thirty programs automatically, I had to build a scoring harness — code that decides whether a run passed. And that code had bugs. Nineteen of them, by the time I stopped counting.

Some were embarrassing. One statistic I used to check whether a result was flat *failed* three perfectly flat results, and the giveaway was that the number changed when I ran more particles — a real physical effect doesn't do that. Another compared a position I only knew to within five centimeters against bins half a centimeter wide, which is like grading a dart throw to the millimeter when you were standing across the room. Fixing that one turned two failures into passes on data I had already collected. Nothing was re-run. The answers had been right the whole time; my ruler was wrong.

Nine of the nineteen I caught before they produced a wrong number. The rest I caught because a number came out wrong and I went looking. Zero of them — none — I found by reading over my own specifications and rubric, which I did several times, carefully, convinced they were fine.

The same week, two more. A routine command committed a file that something had silently reverted, and the commit reported success. And I found a note in my own records, written months ago, stating a confirmed cause for something, with a quotation attributed to a real person — that I had never confirmed and that the person, as far as I can tell, never said. It had been sitting there long enough that it was used to tell me my own memory of the events was wrong.

Three different systems. One failure. Every time, something reported success and I believed the report instead of looking at what it produced.

## The short version

Verify the artifact, not the operation.

The build succeeded, so the library must be good. The commit went through, so the file must be saved. The program ran, so the answer must be there. The code reads well, so it must be right.

None of those follow. They just feel like they do, and checking is nearly always cheaper than being wrong — a few dollars and an afternoon, in my case, to find out that four immaculate programs had done precisely nothing.
