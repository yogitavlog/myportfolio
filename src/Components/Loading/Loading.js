import Lottie from "react-lottie";
import * as location from "../../Lottie/Loading.json";
import { Box, Stack } from "@mui/material";
const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Loader() {
  return (
    <Box height={"100vh"}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={"40vh"}
      >
        <Lottie options={defaultOptions1} height={200} width={200} />
      </Stack>
    </Box>
  );
}
export default Loader;
