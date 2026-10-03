# What a Bend Buys

*Thirty-two gap shapes, three days on a free computer, and a rule of thumb for a question I first asked in 1984.*

A fusion reactor's shield can't be built in one piece. It goes up in sectors, and every joint between sectors is a gap that neutrons can stream through. The standard fix is to bend the gap, as a step, a dog-leg or a castellated joint, so that no straight line runs from the plasma to the back of the shield.

In 1984 I calculated how much a step helps, for the STARFIRE reactor design, in my master's thesis. The answer then was that a step doesn't stop the streaming so much as move it: the hot spot behind the shield shifts sideways, and the total gets through anyway. Earlier this year I [reproduced that study](/projects/starfire/) with modern open-source software.

That left a question I never had the computer time to ask. How much does each bend actually buy? If the gap is 2 cm wide instead of 3, or has four bends instead of two, how much less gets through?

## What I ran

Thirty-two gap shapes through the same 108 cm shield: straight, tilted, chevron, zigzag, stepped, castellated, and a family of "trapezoid" gaps that let me change one thing at a time. Width, number of bends, and how far past blocked the line of sight is. Twenty-seven runs on that family alone, plus replicates and checks.

Each run took about 35 minutes of computer time on Google's free Colab tier. The Japanese team that measured gap streaming at JAERI in 1997 wrote that their calculations took one to two weeks each on a workstation.

## What came out

Closing the line of sight is the big step. An open 2 cm gap lets through about 300 times the dose of solid shield near its exit. Bend it just enough to block the view and that drops to between 2 and 28 times, depending on the shape.

After that, three numbers explain most of it, and they fit in one line:

excess ≈ 1.7 × width^2.9 × bends^-0.8 × exp(-0.19 × margin)

Width matters most. Through an open gap, the dose rises with the square of the width. Through a blocked gap it rises faster, with an exponent near 3. A 2 cm gap that opens to 2.5 cm in assembly lets through about twice as much. Fit-up tolerance is the biggest lever.

Bends help, with diminishing returns. Going from 2 to 4 bends cuts the dose near the exit by about 40%. Going from 4 to 8 buys much less.

And the 1984 finding came back. Measured across the whole back of the shield instead of just behind the gap, bends help noticeably less. Part of what a bend does is spread the dose sideways. Forty-two years later, same answer.

One bend is a poor bargain. The single-bend chevrons leaked about twice what the rule predicts for one bend.

## The claims I took back

As with the last paper, I gave the draft to the competition before publishing: OpenAI's GPT-6 Astra and Google's Gemini, told to find what was wrong, not to polish the writing.

Both picked the same weakest claim: that the angle of a bend doesn't matter. I had one pair of runs, a sharp 90° corner against a shallow 15° one, 10% apart. That isn't evidence that angle doesn't matter. It's evidence that one pair can't tell. The claim is gone.

Astra also caught a piece of physics I had written to explain the width result. It was wrong, and it's gone too. The paper now reports what the numbers show and doesn't pretend to explain it.

Their questions sent me back to the computer three more times: runs with the variance-reduction shortcuts turned off, at three widths, to check they weren't biasing the answers (they weren't), and repeats of the points that looked suspicious. One of those repeats confirmed something new: with several bends, the width dependence gets even steeper between 3 and 4 cm. The simple rule averages over that.

Then a second round of review. Astra's one remaining objection: I had called a dose tally "total leakage," and it isn't, quite. Fixed.

## Back of the envelope

So what is the rule good for? Comparing designs. Narrow the gap first, block the line of sight, add a few bends, and expect diminishing returns after four. Within its range it's good to about 20%.

It is not a substitute for the transport calculation. It's tied to this shield and this source, and it underpredicts single bends by a factor of two.

In 1984 I had the question and no computer time. In 1997 the experts had the computer and needed two weeks a run. This year I had three days, a free cloud account and a machine that writes the code. We're not out of a job yet. The rule tells you which designs are worth running. Somebody still has to run them.

The paper: [Width, Bends and Line of Sight](https://doi.org/10.5281/zenodo.23128116). Everything behind it, including every run, both reviews and my responses: [the archive](https://doi.org/10.5281/zenodo.23128092).
