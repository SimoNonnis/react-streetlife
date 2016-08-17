import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './../components/Header';

describe('Testing <Header />', () => {
    it('Should have an h1', () => {
      var wrapper = shallow(<Header />);
      var h1 = wrapper.find('h1');
    
      expect(h1).to.have.length(1);
    });
    it('Should have a <p>', () => {
      var wrapper = shallow(<Header />);
      var p = wrapper.find('p');

      expect(p).to.have.length(1);
    });
});
