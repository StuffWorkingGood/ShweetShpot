# Sweet Spot 🍬 — Website

MKB-style player prop platform site, branded for Sweet Spot (@SweetSpotReport).

## Files

- `index.html` — landing page (hero, tools, testimonials, VIP waitlist pricing, FAQ)
- `login.html` — demo login (any email works; email is stored locally as waitlist placeholder)
- `tools.html` + `app.js` — demo tool suite: Value Finder, HR Sweet Feed, Bucket Board (sample data)
- `style.css` — shared Sweet Spot theme (dark + hot pink + yellow)

## Deploy to GitHub Pages (free)

1. Create a repo, e.g. `sweet-spot` under your GitHub account.
2. Upload all files in this folder to the repo root.
3. Repo → Settings → Pages → Source: `main` branch, `/ (root)` → Save.
4. Site goes live at `https://stuffworkinggood.github.io/sweet-spot/` in ~1 minute.
5. When you buy a domain: add it under Settings → Pages → Custom domain, then point the domain's DNS (CNAME → `stuffworkinggood.github.io`). GitHub provides free HTTPS.

## Going live (real data + real accounts)

GitHub Pages is static hosting — it can't run a database or hide API keys. To turn the demo into the real product:

1. **Odds data**: subscribe to an odds API (The Odds API, OddsJam/OpticOdds, SportsGameOdds). Player props across 15+ books is the expensive part.
2. **Backend**: Supabase or Firebase (free tiers) for auth + database; or a small server on Render/Railway/Fly.io.
3. **Payments**: Whop (popular for betting Discords) or Stripe.
4. **Replace sample data**: swap the arrays in `app.js` for `fetch()` calls to your backend.

## Legal notes

- Keep the responsible-gambling disclaimer and 1-800-GAMBLER line in the footer.
- Form an LLC before charging money (MKB is "Mama Knows Bets, LLC").
- Add real Terms of Service / Privacy Policy pages before launching paid tiers (`terms.html` / `privacy.html` are linked in the footer but not yet created).
