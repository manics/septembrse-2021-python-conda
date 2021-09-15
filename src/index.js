import React from "react";
import { render } from "react-dom";

import {
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  Link,
  ListItem,
  MarkdownSlide,
  Notes,
  OrderedList,
  Progress,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: "#0a51a1",
    // headings
    secondary: "#1e2852",
    // background-color
    tertiary: "#f0f0f0",
    // tertiary: "",
    // hyperlinks
    quaternary: "#01d17c",
    // quinary:
  },
  // fonts: {
  //   header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  // },
  fontSizes: {
    //   h1: "72px",
    //   h2: "64px",
    text: "40px",
  },
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
      <Progress color={theme.colors.primary} />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <Heading>SeptembRSE Python showdown</Heading>
      <FlexBox alignContent="center">
        <Image src="images/Conda_logo.svg" width={500} />
      </FlexBox>

      <FlexBox
        justifyContent="right"
        position="absolute"
        bottom={100}
        right={20}
      >
        <FlexBox justifyContent="right" backgroundColor="white" padding={10}>
          <Heading fontSize="h2">Simon Li</Heading>
          <Image src="images/Health_Informatics_Centre_RGB.png" width={500} />
        </FlexBox>
      </FlexBox>
    </Slide>

    <MarkdownSlide>
      {`
      ### Who am I?

      Software/systems/infrastructure/Research engineer at University of Dundee

      - [Health Informatics Centre](https://www.dundee.ac.uk/hic) working on Trusted Research Environments in the cloud
      - Previously [Open Microscopy Environment](https://www.openmicroscopy.org/), Image Data Resource https://idr.openmicroscopy.org/
      - JupyterHub maintainer (including https://mybinder.org/)
      `}
    </MarkdownSlide>

    <MarkdownSlide>
      {`
      ### What is it?

      A general package manager, _not just for Python_

      - This is a big difference from other Python environments
      - Key to its strengths and weaknesses
      `}
    </MarkdownSlide>

    <Slide>
      <Heading fontSize="h3">Self contained</Heading>
      <Grid gridTemplateColumns="70% 30%">
        <Box alignItems="center" justifyContent="center">
          <Text>Install multiple versions of Python</Text>
          <Text>No external libraries needed</Text>
          <Text>
            Install any software that's been packaged in Conda such as R, Git,
            Terraform, C/C++/Fortran compilers
          </Text>
        </Box>
        <Box>
          <Box padding={10}>
            <Image src="images/python-logo-generic.svg" width={220} />
          </Box>
          <Box padding={10}>
            <Image src="images/LLVM-Logo-Derivative-1.png" width={100} />
            <Image src="images/Rlogo.svg" width={100} />
          </Box>
          <Box padding={10}>
            <Image src="images/RStudio-Logo.svg" width={220} />
          </Box>
          <Box padding={10}>
            <Image src="images/terraform-logo.svg" width={220} />
          </Box>
          <Box padding={10}>
            <Image src="images/Git-Logo-2Color.png" width={200} />
          </Box>
        </Box>
      </Grid>
      <Notes>
        Pytables used to require installation of libhdf5 (it might have a wheel
        now that includse HDF5?). Upgrading HDF5 breaks pytables. With Conda
        everything remains consistent.
      </Notes>
    </Slide>

    <MarkdownSlide>
      {`
      ### Multiple channels available

      - Anaconda (the original developers of Conda) have some default packages
      - [**conda-forge**](https://conda-forge.org/) is one of the big community supported channels, this is what I normally use (15433 packages)
      - [**bioconda**](https://bioconda.github.io/) specialised in bioinformatics packages (8791 packages)
      - Anyone can create their own channel for distributing a curated set of packages
      `}
    </MarkdownSlide>

    <MarkdownSlide>
      {`
      ### Reproducible environments

      You can export an environment file with a full list of packages and versions (including non-Python applications)
      `}
    </MarkdownSlide>

    <MarkdownSlide>
      {`
      ### Example

      - Download and install either [Anaconda](https://www.anaconda.com/products/individual) (bundles several data science packages) or [Miniconda](https://docs.conda.io/en/latest/miniconda.html) (minimal distribution), setup your shell
      - I recommend Miniconda
      `}
    </MarkdownSlide>

    <Slide>
      <Heading fontSize="h3">Create environment</Heading>
      <CodePane showLineNumbers={false} language="sh">
        {`
        conda create -n demo python=3.8 jupyterlab("d")
        conda activate demo
        jupyter-lab
        `}
      </CodePane>

      <Heading fontSize="h3">Update environment</Heading>
      <CodePane showLineNumbers={false} language="sh">
        {`
        conda install -n demo tensorflow
        `}
      </CodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Create another environment</Heading>
      <CodePane showLineNumbers={false} language="sh">
        {`
        conda create -n demo2 -c conda-forge python=2.7 nodejs=10
        conda activate demo2
        `}
      </CodePane>
    </Slide>

    <MarkdownSlide>
      {`
      ### Disadvantages

      - Size: self contained means you duplicate a lot of your operating system libraries
      - Slow installation: resolving package dependencies can be slow (mamba is a faster drop-in replacement)
      - Python packages need to be repackaged for conda (though can still use pip)
      - Binaries may not be optimised for your system
      `}
    </MarkdownSlide>

    <Slide>
      <Heading fontSize="h3">
        Example use case: Trusted Research Environment
      </Heading>
      <Text>
        Can create portable environments for Windows systems with limited
        network access
      </Text>
      <OrderedList paddingLeft={100}>
        <ListItem>
          Use <Link href="https://conda.github.io/conda-pack/">conda-pack</Link>{" "}
          to archive the environment as a zip
        </ListItem>
        <ListItem>Review for security/malware</ListItem>
        <ListItem>Copy to a potentially air-gapped system and unzip</ListItem>
      </OrderedList>
    </Slide>

    <MarkdownSlide>
      {`
      ### Example use case: Compiled Python packages

      [OMERO.py](https://omero-guides.readthedocs.io/en/latest/python/docs/setup.html) requires [zeroc-ice](https://pypi.org/project/zeroc-ice/) Python library

      - zeroc-ice requires openssl so standard Linux PyPI wheels aren't available: you normally have to compile it yourself on Linux
      - Available pre-compiled on conda
      `}
    </MarkdownSlide>

    <Slide>
      <Heading fontSize="h3">
        Use case: Reproducible notebook environments in the cloud
      </Heading>

      <FlexBox
        alignContent="left"
        alignItems="left"
        verticalAlign="bottom"
        width={1000}
      >
        <Link href="https://mybinder.org" textAlign="left">
          https://mybinder.org
        </Link>
        <Box
          backgroundColor="white"
          width={200}
          padding={0}
          alignContent="left"
        >
          <Image src="images/mybinder.svg" width={200} />
        </Box>
      </FlexBox>
      <Text>
        Pass in a Git repository URL which includes versioned dependencies, get
        a reproducible Jupyter based environment in the cloud
      </Text>
    </Slide>

    <MarkdownSlide>
      {`
      ### When should you consider it?

      - Your Python packages have complex dependencies
      - You want a single way to install other software
      - You need multiple versions of Python
      - Exact reproducibility
      - You're on Windows
      `}
    </MarkdownSlide>

    <Slide>
      <Heading fontSize="h3">What do I use day to day?</Heading>
      <FlexBox>
        <Box>
          <Text>Windows: Conda for everything</Text>
          <Text>
            Linux: Conda for base Python environments with some dependencies,
            then pip for other development dependencies
          </Text>
          <Text>Why not _X_? Too many other options!</Text>
        </Box>
        <Link href="https://xkcd.com/1987/">
          <Image src="images/xkcd-python_environment.png" />
        </Link>
      </FlexBox>
    </Slide>
  </Deck>
);

render(<Presentation />, document.getElementById("root"));
