
const h = (type, props, ...children) => {
  return {type, props: props || {}, children};
};

export {h};
