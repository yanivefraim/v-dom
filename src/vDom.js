
const createElement = (type, props, ...children) => {
  return {type, props: props || {}, children};
};

const createDOMElement = node => {
  if (!node.type) {
    return document.createTextNode(node);
  }
  return document.createElement(node.type);
};

export {createElement, createDOMElement};
