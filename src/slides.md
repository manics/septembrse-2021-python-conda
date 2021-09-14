---
# Conda

## SeptembRSE Python showdown
---

# Who am I?

Software/systems/infrastructure/Research engineer at University of Dundee

- [Health Informatics Centre](https://www.dundee.ac.uk/hic) working on Trusted Research Environments in the cloud
- Previously [Open Microscopy Environment](https://www.openmicroscopy.org/), Image Data Resource https://idr.openmicroscopy.org/
- JupyterHub maintainer (including https://mybinder.org/)

---

# What is it?

A general package manager, _not just for Python_

- This is a big difference from other Python environments
- Key to its strengths and weaknesses

---

## Self contained

- You can use it to install multiple versions of Python.
- No external libraries needed for compiled Python modules
- You can install any software that's been packaged in Conda such as R, Git, Terraform, C/C++/Fortran compilers

---

## Multiple channels available

- Anaconda (the original developers of Conda) have some default packages
- [**conda-forge**](https://conda-forge.org/) is one of the big community supported channels, this is what I normally use (15433 packages)
- [**bioconda**](https://bioconda.github.io/) specialised in bioinformatics packages (8791 packages)
- Anyone can create their own channel for distributing a curated set of packages

---

# Reproducible environments

You can export an environment file with a full list of packages and versions (including non-Python applications)

---

# Example

- Download and install either [Anaconda](https://www.anaconda.com/products/individual) (bundles several data science packages) or [Miniconda](https://docs.conda.io/en/latest/miniconda.html) (minimal distribution), setup your shell
- I recommend Miniconda

---

# Create environment

```sh
conda create -n demo python=3.8 jupyterlab
conda activate demo
jupyter-lab
```

Update environment

```sh
conda install -n demo tensorflow
```

---

# Create another environment

```sh
conda create -n demo2 -c conda-forge python=2.7 nodejs=10
conda activate demo2
```

---

# Disadvantages

- Size: self contained means you duplicate a lot of your operating system libraries
- Slow installation: resolving package dependencies can be slow (mamba is a faster drop-in replacement)
- Python packages need to be repackaged for conda (though can still use pip)
- Binaries may not be optimised for your system

---

# Example use case: Trusted Research Environment

Can create portable environments for Windows systems with limited network access

1. Use `conda-pack` to archive the environment as a zip
2. Review for security/malware
3. Copy to a potentially air-gapped system and unzip

---

# Example use case: Compiled Python packages not available as PyPI wheels

OMERO.py requires zeroc-ice Python module

- zeroc-ice requires openssl so standard Linux PyPI wheels won't work: you normally have to compile it yourself on Linux
- Available pre-compiled on conda

---

# Example use case: Reproducible notebook environments in the cloud

https://mybinder.org

- Pass in a Git repository URL, get a reproducible Jupyter based environment in the cloud

---

# When should you consider using it?

- You're installing more than just simple Python packages
- You need multiple versions of Python
