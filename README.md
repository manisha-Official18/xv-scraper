# XV-SCRAPER

A simple Node.js library to search and extract video information from [xvideos.com](https://www.xvideos.com).

> **Disclaimer:** This library is for educational and personal use only. The author is not responsible for misuse.

## 📦 Installation

```bash
npm install xv-scraper
```

## 🚀 Usage

```js
// Search videos
const { xsearch } = require("xv-scraper");

(async () => {
  const results = await xsearch("milf", 0);
  console.log(results);
})();

// video info

const { xInfo } = require("xv-scraper");

(async () => {
  const info = await xInfo("https://www.xvideos.com/video123456/example");
  console.log(info);
})();
```

### Example Output

```js
{
  "url": "https://www.xvideos.com/video123456/example",
  "title": "Hot Example Video",
  "dlink": "https://...mp4",
  "thumbnail": "https://...",
  "duration": "05:22",
  "views": 1294032,
  "likes": "93%",
  "rating": "4.5"
}
```

## 📚 API

### `search(query: string, page?: number): Promise<{ title: string, url: string }[]>`

- **query** — Video search term.
- **page** _(optional, default 0)_ — Page number for search results.
- **returns** — Array of objects containing:
  - `title` — Video title.
  - `url` — Video page URL.

### `getInfo(url: string): Promise<VideoInfo>`

- **url** — Video page URL.
- **returns** — Object containing:

  - `url` _(string)_ — Video page URL.
  - `dlink` _(string | undefined)_ — Direct video link if available.
  - `title` _(string)_ — Video title.
  - `thumbnail` _(string | undefined)_ — Thumbnail URL.
  - `views` _(number)_ — Number of views.
  - `duration` _(string)_ — Video duration in HH\:MM\:SS.
  - `likes` _(string | undefined)_ — Number of likes.
  - `rating` _(string | undefined)_ — Video rating or score.