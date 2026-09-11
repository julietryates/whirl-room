/* ------------------------------------------------------------------
   This is the only file you need to edit to make whirl room yours.
   Change the objects, the room, or the meanings. app.js stays as-is.
------------------------------------------------------------------- */

window.CONFIG = {
  title: "the haunted room",
  subtitle: "Click three objects, in any order. See what haunts you.",
  picksNeeded: 3,

  // Each object: emoji, a short trait word, and roughly where it sits (percent of room).
  objects: [
    { emoji: "🎃", trait: "carve",  top: "12%", left: "10%" },
    { emoji: "👻", trait: "haunt",  top: "18%", left: "70%" },
    { emoji: "🕸️", trait: "linger", top: "55%", left: "6%"  },
    { emoji: "🧙", trait: "conjure", top: "62%", left: "78%" },
    { emoji: "🦇", trait: "flit",   top: "38%", left: "42%" },
    { emoji: "💀", trait: "reckon", top: "78%", left: "38%" },
  ],

  // Sentence fragments, keyed by trait, joined in the order they were clicked.
  lines: {
    carve:   "carving something out of the dark until it grins back",
    haunt:   "haunting the parts of the story you haven't let go of",
    linger:  "letting things linger a little longer than they should",
    conjure: "conjuring what you need out of nothing",
    flit:    "flitting toward the shadow before you've named it",
    reckon:  "sitting with the bones of it until it makes sense",
  },

  resultTitle: "what your order conjures",
};
