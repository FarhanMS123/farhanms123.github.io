import '@styles/App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '@utils/router';
import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';

function App() {
  return (
    <FluentProvider theme={teamsDarkTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  )
}

export default App;
