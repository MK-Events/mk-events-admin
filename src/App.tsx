import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "@mk/theme";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import { router } from "./router";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme} defaultColorScheme={"dark"}>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  );
}

export default App;
