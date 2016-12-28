
const createElement = (type, props, ...children) => {
  return {type, props: props || {}, children};
};

const createDOMElement = node => document.createElement(node.type);

export {createElement, createDOMElement};
