import { render, screen } from '@testing-library/react';
import Layout from '.';

describe('<BaseTemplate />', () => {
  it('renders correctly', () => {
    render(<Layout sampleTextProp="renders correctly" />);
    expect(screen.getByText(/renders correctly/i)).toBeInTheDocument();
  });
});
