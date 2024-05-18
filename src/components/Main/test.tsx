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
});
