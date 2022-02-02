import { Header } from './components/header/header';
import { Provider } from 'react-redux';
import { Users } from './components/users/users';
import generateStore from './redux/store';

function App() {

  const store = generateStore();

  return (
    <>
      <Header />
      <Provider store={store}>
        <Users />
      </Provider>
    </>
  );
}

export default App;

