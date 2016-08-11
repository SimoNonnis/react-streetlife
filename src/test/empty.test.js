import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './../components/app';

describe('Testing App component', () => {
    it('Should have an h1', () => {
      var wrapper = shallow(<App />);
      var h1 = wrapper.find('h1');

      expect(h1).to.have.length(1);
    });
    it('Should have a <p>', () => {
      var wrapper = shallow(<App />);
      var p = wrapper.find('p');

      expect(p).to.have.length(1);
    });
});
