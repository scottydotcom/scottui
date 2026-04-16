import { Grid, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Grid
      templateColumns={["1fr", "300px 1fr"]}
      gap={10}
      maxW="1200px"
      mx="auto"
      p={10}
    >
      <Box position="sticky" top="4rem" h="fit-content">
        <Sidebar />
      </Box>

    </Grid>
  );
}