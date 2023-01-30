import React from 'react';
import Home from '.';
import { render, screen } from '../tests/customRender';
import generalTranslations from '../i18n/locales/en/general.json';

describe('Home', () => {
  it('should render the home page', () => {
    render(<Home />);

    expect(screen.getByText(generalTranslations.title)).toBeInTheDocument();
  });
});
