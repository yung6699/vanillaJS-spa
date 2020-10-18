export const eventHandler = (instance) => {
  document.body.addEventListener("click", e => {
    const elemTarget = e.target;

    if (elemTarget.matches("[data-link]")) {
      e.preventDefault();
      instance.navigateTo(elemTarget.href);
    }

    if ( elemTarget && elemTarget.dataset.action === "onClick" ) {

    }
  }, false);
};
