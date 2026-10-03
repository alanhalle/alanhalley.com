#!/usr/bin/env pwsh
# Run after git push to confirm Vercel deployed all writing pages.
# Usage: pwsh scripts/verify-deploy.ps1

$base = "https://alanhalley.com"

$pages = @(
    @{ url = "/";                                     check = "hire-the-right-developer-for-your-project" }
    @{ url = "/about/";                               check = 'href="/#work">Work With Me' }
    @{ url = "/writing/";                             check = "/writing/what-a-bend-buys/" }
    @{ url = "/writing/what-a-bend-buys/";            check = "Somebody still has to run them" }
    @{ url = "/writing/the-high-road/";               check = "Earl told me in one sentence" }
    @{ url = "/writing/the-high-road/map/";           check = "Companion to" }
    @{ url = "/writing/the-high-road/henry-polly-flyover.kml"; check = "Fly from Rocheport" }
    @{ url = "/writing/three-days/";                  check = "four pages of boilerplate" }
    @{ url = "/writing/the-last-80-percent/";         check = "darthvader.mba" }
    @{ url = "/writing/convincing-is-not-correct/";    check = "the-ranking-depends-on-the-ruler" }
    @{ url = "/writing/the-ranking-depends-on-the-ruler/"; check = "a sentence of mine I had to take back" }
    @{ url = "/writing/working-from-home-since-1975/"; check = "recreating that hallway" }
    @{ url = "/writing/less-than-two-dollars/";         check = "Flagrante" }
    @{ url = "/writing/full-moon/";                    check = "Rocheport" }
    @{ url = "/writing/henry-and-polly/";             check = "a settlers' road on the Grand Divide" }
    @{ url = "/writing/family-tree-ai/";              check = "FindaGrave" }
    @{ url = "/writing/the-go-between-revisited/";    check = "integration point" }
    @{ url = "/writing/real-money-real-people/";      check = "Brief Work" }
    @{ url = "/writing/airport-to-beach/";            check = "beachburbs" }
    @{ url = "/writing/nao-sei-nada/";                check = "Não Sei Nada" }
    @{ url = "/writing/easing-in/";                   check = "Second Brain" }
    @{ url = "/writing/a-veritable-island/";          check = "island" }
    @{ url = "/writing/one-person-operating-system/"; check = "operating system" }
    @{ url = "/writing/the-go-between/";              check = "Graeber" }
    @{ url = "/writing/doc/";                         check = "Doc" }
    @{ url = "/writing/my-florida-vacation/";         check = "Florida" }
    @{ url = "/about/";                               check = "Alan Halley" }
    @{ url = "/projects/";                            check = "Projects" }
    @{ url = "/projects/starfire/";                    check = "/writing/what-a-bend-buys/" }
    @{ url = "/projects/sapetinga-restaurant/";        check = "hard little lot" }
)

$pass = 0
$fail = 0

foreach ($page in $pages) {
    $uri = "$base$($page.url)"
    try {
        $response = Invoke-WebRequest -Uri $uri -UseBasicParsing -TimeoutSec 10
        if ($response.StatusCode -eq 200 -and $response.Content -match [regex]::Escape($page.check)) {
            Write-Host "  PASS  $($page.url)" -ForegroundColor Green
            $pass++
        } else {
            Write-Host "  FAIL  $($page.url)  (status=$($response.StatusCode), missing: '$($page.check)')" -ForegroundColor Red
            $fail++
        }
    } catch {
        Write-Host "  ERROR $($page.url)  ($($_.Exception.Message))" -ForegroundColor Red
        $fail++
    }
}

Write-Host ""
Write-Host "$pass passed, $fail failed" -ForegroundColor ($fail -eq 0 ? "Green" : "Red")
if ($fail -gt 0) { exit 1 }
