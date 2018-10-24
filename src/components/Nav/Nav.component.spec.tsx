import { mount } from 'enzyme';
import 'jest';
import * as React from 'react';
import { Nav } from './Nav.component';

describe('Nav Component', () => {

  const setup = () => {
    return mount(<Nav />)
  };

  it('should be defined', () => {
    const component = setup();
    expect(component).toBeDefined();
  });
});