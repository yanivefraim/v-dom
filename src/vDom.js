
const createElement = (type, props, ...children) => {
  return {type, props: props || {}, children};
};

const createDOMElement = node => {
  if (!node.type) {
    return document.createTextNode(node);
  }
  const domEl = document.createElement(node.type);

  node
    .children
    .map(createDOMElement)
    .forEach(el => domEl.appendChild(el));

  return domEl;
};

const render = (wrapper, node) => wrapper.appendChild(createDOMElement(node));

export {createElement, createDOMElement, render};
