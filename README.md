# Your birthday letter site

## 1. Add your stuff

- **Photos** → drop them in `assets/photos/` and name them `photo1.jpg`, `photo2.jpg`, etc. (or any names you like)
- **Song** → drop your MP3 in `assets/audio/` and name it `song.mp3` (or update the filename in `index.html`, search for `song.mp3`)
- **Words** → open `script.js`, edit the `SLIDES` list at the very top. Each entry is one page:
  ```js
  {
    photo: "assets/photos/photo1.jpg",
    caption: "the beginning",
    heading: "Once upon a time",
    text: "Your line here."
  }
  ```
  Add, remove, or reorder entries freely — the slideshow and progress dots update automatically. The last slide (`final: true`) has no photo, just a closing line.

## 2. Preview it locally (optional)

Any static server works, e.g. with Python:
```
python3 -m http.server 8000
```
then open `http://localhost:8000`.

## 3. Deploy to Vercel

**Easiest — no terminal:**
1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New → Project → Deploy without Git** (or drag-and-drop).
3. Drag this whole folder onto the upload area.
4. Click Deploy. Done — you'll get a live link like `your-project.vercel.app`.

**With the Vercel CLI:**
```
npm i -g vercel
cd bday-letter
vercel
```
Follow the prompts — it deploys straight from this folder.

## Notes
- Keep the MP3 reasonably small (under ~10MB) so the page loads fast.
- If a photo doesn't load, that polaroid will just show a soft cream placeholder instead of breaking.
- Autoplay: most browsers block audio until a user interacts with the page — that's why the music starts right when the envelope is tapped open, which counts as the interaction.
