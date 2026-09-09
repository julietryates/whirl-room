/* ------------------------------------------------------------------
   This is the only file you need to edit to make whirl room yours.
   Change the objects, the room, or the meanings. app.js stays as-is.
------------------------------------------------------------------- */

window.CONFIG = {
  title: "the room",
  subtitle: "Click three objects, in any order. See what it says.",
  picksNeeded: 3,

  // Each object: emoji, a short trait word, and roughly where it sits (percent of room).
  objects: [
    { emoji: "🪴", trait: "growth",  top: "12%", left: "10%" },
    { emoji: "🕯️", trait: "calm",    top: "18%", left: "70%" },
    { emoji: "📚", trait: "curious", top: "55%", left: "6%"  },
    { emoji: "🪞", trait: "reflect", top: "62%", left: "78%" },
    { emoji: "☕", trait: "comfort", top: "38%", left: "42%" },
    { emoji: "🧵", trait: "make",    top: "78%", left: "38%" },
  ],

  // Sentence fragments, keyed by trait, joined in the order they were clicked.
  lines: {
    growth:  "reaching for what's next",
    calm:    "steadying the room before it moves",
    curious: "following the question that snags you",
    reflect: "circling back before deciding anything",
    comfort: "starting from what already feels safe",
    make:    "turning the feeling into something with your hands",
  },

  resultTitle: "what your order says",
};
