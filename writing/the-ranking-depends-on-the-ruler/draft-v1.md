# The Ranking Depends on the Ruler

*Seven AI models, three companies, one physics problem set, and a sentence of mine I had to take back.*

In August I gave an AI a set of physics problems I already knew the answers to, ran every program it wrote, and checked the numbers. That was [Convincing Is Not Correct](/writing/convincing-is-not-correct/). It tested two Claude models. I promised to run the others.

In September I did. Seven models from Anthropic, OpenAI and Google, plus Gemma, an open model from Google that you can download and run on your own computer. The same five problems, from [the neutron streaming study](/projects/starfire/) I reproduced earlier this year: radiation leaking through the gaps in a fusion reactor's shield. Every program was run. Every answer was checked against the known one.

## Which one is best?

It depends on what you check.

If you only ask "does the program run", GPT-6 Astra and Claude Opus 5.5 tie at the top, 7 of 9 on the harder problems. If you ask "is the answer right", Opus got 4 of those 7 right and Astra got 2. Claude Sonnet 5.5, the cheaper Claude model, ran only 5, and got 4 of them right.

So the question "which AI is best" has no answer until you say what you are measuring. A benchmark that stops at "it ran" would have put Astra level with Opus and Sonnet in fourth place. Checking the answer moves Sonnet up to a tie for first.

August's headline was that the cheaper Claude model and the flagship ranked in opposite order depending on the check. That didn't repeat. In September the two Claude models tied on right answers. I say so in the paper, instead of choosing the models that would have told the old story.

## The same trap, three companies

One pair of instructions broke programs from all three companies. Both are real, documented and correct on their own: tag the water's hydrogen with a special table for how neutrons bounce off water, then mix the water into the shield material. The software refuses to do both. It killed 6 of 6 attempts in August and 8 of 21 in September, across every vendor and both Claude generations.

Nobody reading the code would catch it. But shown the error message once, the models got past it every time I could check: 7 of 7.

## Newer isn't always better

When I asked the question in plain conversational English instead of as a formal specification, the newest Claude flagship refused all three times. Its safety filter labeled the request "cyber" content. There is nothing about computers in it. It's a question about a reactor shield. The older Claude model answered the same prompt.

Gemma, the model you could run on your own machine, produced nothing that ran: 0 of 15, and 0 of 15 again when shown its errors. That matters to anyone whose work can't be sent to a company's servers, which in nuclear engineering is a lot of people.

## The sentence I took back

Before publishing, I did something new. I gave the paper to the competition. OpenAI's model and Google's model each got the draft and the raw records and were told to attack the claims, not polish the writing.

OpenAI's model came back with 22 objections. The one it called the weakest claim in the paper was this: "No failure was a physics misunderstanding."

That was my favorite sentence. I wrote a version of it in August: "The AI understood the radiation fine."

It was right to go after it. I can show which programs produced the right number. I can't show what the model understood. A program that died on its first line was never tested past that line. And the programs that did run had their own physics-level slips: a source that ignored the spec, a table of dose factors that cited the right standard and had the wrong numbers. The sentence now says what I can actually show: every failure that *stopped* a program was a software detail.

The reviews caught plain mistakes too. A sentence describing the August results was simply false. While fixing one reviewer's point, I introduced a new error in the abstract. And I "corrected" a count that had been right all along, then found the old notes that proved it and put it back.

## The ruler again

In August I counted nineteen bugs in my own scoring tools. It's twenty-nine now. The pattern hasn't changed: something reports success, and I believe the report instead of looking at what it produced.

So the lesson from August stands, with one addition. Verify the artifact, not the operation. And before you trust a ranking, find out what ruler it was measured with, because the ranking depends on the ruler.

The paper: [Executing the Output](https://doi.org/10.5281/zenodo.23067522). Everything behind it, including every program the models wrote and both reviews: [the benchmark archive](https://doi.org/10.5281/zenodo.23067451).
