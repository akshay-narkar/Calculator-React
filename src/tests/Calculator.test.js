import renderer from 'react-test-renderer';
import App from '../components/App';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<App />).toJSON();

  expect(elem).toMatchSnapshot();
});
