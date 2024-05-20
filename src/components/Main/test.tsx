import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    // Renderiza o Componente
    const { container } = render(<Main />);
    // Busca o element e verifica a existência
    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    // Check if background-color is correctly
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
