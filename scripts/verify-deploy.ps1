#!/usr/bin/env pwsh
# Run after git push to confirm Vercel deployed all writing pages.
# Usage: pwsh scripts/verify-deploy.ps1

$base = "https://alanhalley.com"

$pages = @(
    @{ url = "/";                                     check = "Alan Halley" }
    @{ url = "/writing/";                             check = "Writing" }
    @{ url = "/writing/henry-and-polly/";             check = "Bee Trace" }
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
