# Rockwell H2, Netlify + Decap CMS 

## Deploy
1) Push this repo to GitHub
2) Create a new Netlify site from the GitHub repo
3) In Netlify site settings, publish directory is repo root (.) and no build command
4) Enable Identity and Git Gateway:
   - Integrations -> Identity -> Enable
   - Identity -> Services -> Enable Git Gateway
5) Invite yourself under Identity -> Invite users
6) Go to /admin/

## Content
- The homepage renders `content/home.md` at runtime.
- Decap edits `content/home.md`.
- Uploads go to `images/uploads`.
