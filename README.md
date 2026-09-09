# whirl room

A small experiment. You walk into a room, click three objects in any order, and the
order becomes a sentence about how you move through things.

**Live:** _(deploy pending — will be hosted via Cloudflare)_

## Run it locally

No build step. Open `index.html` in a browser, or serve the folder:

```sh
npx serve .
```

## Make it yours

Everything you'd want to change lives in [`config.js`](config.js):

- **`objects`** — the emoji in the room, each with a one-word `trait` and a
  `top` / `left` position (percent of the room).
- **`lines`** — the sentence fragment each trait contributes, joined in click order.
- **`title`**, **`subtitle`**, **`resultTitle`**, **`picksNeeded`** — the framing.

`app.js` is just the mechanics and doesn't need to change.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | All styling |
| `config.js` | The room's content — edit this |
| `app.js` | Click / spin / result logic |

## License

[MIT](LICENSE)
