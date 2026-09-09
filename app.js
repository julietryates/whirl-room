/* ------------------------------------------------------------------
   whirl room — mechanics. Edit config.js, not this file.
------------------------------------------------------------------- */

(function () {
  "use strict";

  var CONFIG = window.CONFIG;

  var titleEl = document.getElementById("title");
  var subtitleEl = document.getElementById("subtitle");
  var room = document.getElementById("room");
  var orderEl = document.getElementById("order");
  var resultEl = document.getElementById("result");
  var resultTitle = document.getElementById("result-title");
  var resultBody = document.getElementById("result-body");
  var resetBtn = document.getElementById("reset");

  titleEl.textContent = CONFIG.title;
  subtitleEl.textContent = CONFIG.subtitle;
  document.title = CONFIG.title;

  var picked = [];

  function renderRoom() {
    room.innerHTML = "";
    picked = [];
    CONFIG.objects.forEach(function (obj, i) {
      var el = document.createElement("button");
      el.type = "button";
      el.className = "obj";
      el.style.top = obj.top;
      el.style.left = obj.left;
      el.setAttribute("aria-label", obj.trait);
      el.innerHTML = obj.emoji + '<span class="badge" aria-hidden="true"></span>';
      el.addEventListener("click", function () {
        pick(i, el);
      });
      room.appendChild(el);
    });
  }

  function pick(index, el) {
    if (el.classList.contains("done") || picked.includes(index)) return;
    if (picked.length >= CONFIG.picksNeeded) return;

    picked.push(index);
    el.classList.add("spin");
    setTimeout(function () {
      el.classList.remove("spin");
    }, 700);
    el.classList.add("done");
    el.disabled = true;
    el.querySelector(".badge").textContent = picked.length;

    updateOrderText();

    if (picked.length === CONFIG.picksNeeded) {
      setTimeout(showResult, 400);
    }
  }

  function updateOrderText() {
    if (picked.length === 0) {
      orderEl.textContent = "";
      return;
    }
    orderEl.textContent = picked
      .map(function (i) {
        return CONFIG.objects[i].emoji;
      })
      .join("  →  ");
  }

  function showResult() {
    var sentence = picked
      .map(function (i) {
        return CONFIG.lines[CONFIG.objects[i].trait];
      })
      .join(", then ");

    resultTitle.textContent = CONFIG.resultTitle;
    resultBody.textContent = "You go " + sentence + ".";
    resultEl.classList.add("show");
    resetBtn.classList.add("show");
    resetBtn.focus();
  }

  function reset() {
    resultEl.classList.remove("show");
    resetBtn.classList.remove("show");
    orderEl.textContent = "";
    renderRoom();
  }

  resetBtn.addEventListener("click", reset);
  renderRoom();
})();
