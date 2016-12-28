import 'jsdom-global/register';
import {expect} from 'chai';
import {h, createElement} from '../src/vDom';/*eslint no-unused-vars: 0*/

describe('vDom', () => {
  let cleanup;

  beforeEach(() => cleanup = require('jsdom-global')());

  afterEach(() => cleanup());

  it('should represent jsx as javascript (vDom) object', () => {
    /** @jsx h */
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
    /** @jsx h */
    const node = (<div/>);

    const domEl = createElement(node);

    expect(domEl.nodeName).to.equal('DIV');
  });
});

