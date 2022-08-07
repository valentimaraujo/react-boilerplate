import { render, screen } from '@testing-library/react';

import Layout from '.';

describe('<BaseTemplate />', () => {
  it('renders correctly', () => {
    render(<Layout sampleTextProp="renders correctly">Any</Layout>);
    expect(screen.getByText(/renders correctly/i)).toBeInTheDocument();
  });
});
