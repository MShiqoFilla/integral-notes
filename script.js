function fitFormulas() {

  document
    .querySelectorAll('.card')
    .forEach(card => {
      const formula = card.querySelector('.formula');
      if (!formula) return;
      formula.style.transform = 'scale(1)';
      const math = formula.querySelector('mjx-container');
      if (!math) return;
      const formulaWidth = math.scrollWidth;
      const cardWidth = card.clientWidth - 56;
      if (formulaWidth > cardWidth) {
        const scale = cardWidth / formulaWidth;
        formula.style.transform = `scale(${scale})`;
      }
    });

}

window.addEventListener(
  'load',
  () => {
    setTimeout(fitFormulas, 500);
  }
);

window.addEventListener(
  'resize',
  fitFormulas
);