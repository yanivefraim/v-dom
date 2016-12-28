
const h = (type, props, ...children) => {
  return {type, props: props || {}, children};
};

const createElement = node => document.createElement(node.type);

export {h, createElement};
