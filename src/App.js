import { Button, createTheme, MantineProvider, Checkbox } from "@mantine/core";

import "@mantine/core/styles.css";
import Home from "./Pages/Home";
const theme = createTheme({
  /** Put your mantine theme override here */
});
function App() {
  return (
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  );
}

export default App;
