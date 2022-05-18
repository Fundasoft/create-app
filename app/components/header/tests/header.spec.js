import React from 'react';
import { mount } from '@cypress/react';

import Component from '..';
const props = {};

describe('Header component', () => {
  it('Should render component correctly', () => {
    const wrapper = mount(<Component {...props} />);
    cy.get('[data-testid=todo-list]').should('exist');
    // snapshot here
  });

  // Example: pure js test
  it('Should add correctly two numbers', () => {
    const a = 2;
    const b = 3;

    expect(a + b).toEqual(5);
  });
});
