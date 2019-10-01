import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Square from '../src/components/Square'

configure({ adapter: new Adapter() });

describe('React Enzyme Tests', () => {
  describe('Square Component', () => {
    let wrapper;
    let placeMarker;

    const props = {
      val: 'X',
      index: 4,
      placeMarker: { placeMarker }
    }

    beforeAll(() => {
      placeMarker = jest.fn();
      wrapper = shallow(<Square {...props} placeMarker={placeMarker} />)
    });

    it('renders a <button> tag with text', () => {
      expect(wrapper.type()).toEqual('button');
      expect(wrapper.text()).toEqual('X');
    });

    it('should be invoked by on click', () => {
      wrapper.find('button').simulate('click');
      expect(placeMarker).toHaveBeenCalledTimes(1);
    });
  });
})