import {expect} from 'chai';
import {h} from '../src/vDom';/*eslint no-unused-vars: 0*/

describe('vDom', () => {

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
});

