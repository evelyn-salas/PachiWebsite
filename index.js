/*
 * Evelyn Salas
 *
 * This is the JS to implement the UI for my bird's website. It allows for the user to click on an
 * image of Pachi from the gallery to see a surprise.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up event listeners for the image to flip
   */
  function init() {
    let cards = qsa("#gallery > section");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", flipImage);
    }
  }

  /**
   * flips the image on click for a fun caption on the otherside.
   * @param {object} event - clicking an image in the gallery
   */
  function flipImage(event) {
    if (!event.currentTarget.classList.contains("flipped")) {
      event.currentTarget.querySelector("img").classList.add("flipped");
      event.currentTarget.querySelector("img").src = "img/card-back.jpg";
      let caption = document.createElement("p");
      caption.textContent = "Peekaboo!";
      event.currentTarget.appendChild(caption);
    }
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();