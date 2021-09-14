import React from "react";
import { render } from "react-dom";

import {
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Progress,
  MarkdownSlideSet,
} from "spectacle";

// SPECTACLE_CLI_MD_START
import mdContent from "./slides.md";
// SPECTACLE_CLI_MD_END

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: "white",
    secondary: "#c5c8c6",
  },
  // fonts: {
  //   header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  // },
  // fontSizes: {
  //   h1: "72px",
  //   h2: "64px",
  // },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <MarkdownSlideSet backgroundColor="#0A51A1">{mdContent}</MarkdownSlideSet>
  </Deck>
);

render(<Presentation />, document.getElementById("root"));
