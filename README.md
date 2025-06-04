# nikhilchadha-demo

This repository contains a simple web app for a local clothing shop. Open `index.html` in your browser to see a small catalog and contact information.

Author: Nikhil Chadha (Student)

## Installation

Install the required Python packages with:

```bash
pip install -r requirements.txt
```

### Offline installation

If your environment does not have internet access, download the dependencies on
another machine using:

```bash
pip download -r requirements.txt -d /path/to/wheels
```

Then copy the wheel files to the target machine and install with:

```bash
pip install --no-index --find-links=/path/to/wheels -r requirements.txt
```
