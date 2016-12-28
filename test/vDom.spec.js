import 'jsdom-global/register';
import {expect} from 'chai';
import {createElement, createDOMElement, render} from '../src/vDom';/*eslint no-unused-vars: 0*/

describe('vDom', () => {
  let cleanup;

  beforeEach(() => cleanup = require('jsdom-global')());

  afterEach(() => cleanup());

  it('should represent jsx as javascript (vDom) object', () => {
    /** @jsx createElement */
    const a = (
      <ul class="list">
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    );

    expect(a).to.eql({type: 'ul', props: {class: 'list'}, children: [
      {type: 'li', props: {}, children: ['item 1']},
      {type: 'li', props: {}, children: ['item 2']}
    ]});
  });

  it('should create a div dom element', () => {
    /** @jsx createElement */
    const node = (<div/>);

    const domEl = createDOMElement(node);

    expect(domEl.nodeName).to.equal('DIV');
  });

  it('should create a textNode dom element', () => {
    /** @jsx createElement */
    const node = ('item');

    const domEl = createDOMElement(node);

    expect(domEl.nodeName).to.equal('#text');
    expect(domEl.textContent).to.equal('item');
  });

  it('should create dom elements recursively', () => {
    /** @jsx createElement */
    const node = (
      <div>
        <ul>
          <li>'item1'</li>
        </ul>
      </div>
    );

    const domEl = createDOMElement(node);
    expect(domEl.innerHTML).to.equal(`<ul><li>'item1'</li></ul>`);
  });

  it('should render virtual dom on real dom', () => {
    const root = document.createElement('div');
    /** @jsx createElement */
    const node = (<div>item 123</div>);

    render(root, node);
    
    expect(root.getElementsByTagName('div').length).to.equal(1);
    expect(root.getElementsByTagName('div')[0].textContent).to.equal('item 123');
  });

});

