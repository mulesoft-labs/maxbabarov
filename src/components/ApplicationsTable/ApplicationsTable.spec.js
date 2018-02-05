import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ApplicationsTable from './ApplicationsTable';

describe('MuleSoftHero unit tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ApplicationsTable />);
    expect(wrapper).toBeTruthy();
  });
});
