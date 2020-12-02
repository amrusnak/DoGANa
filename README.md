# DoGANa: A Venice CUT model

***Note**: The code in this project borrows heavily from the [PyTorch implementation of CUT](https://github.com/taesungp/contrastive-unpaired-translation)*

The purpose of this project is to transform the different ways we visualize Venice. We propose four implementations in this project:

- Photorealistic Venice:
  - Monochrome drawings $\rightarrow$ photos
  - Monochrome paintings $\rightarrow$ photos
  - Colour paintings $\rightarrow$ photos
- Underwater Venice:
  - Photos $\rightarrow$ underwater rendering of the photos

Here are some input/output pairs of each of the models:
  
[todo examples]
  
## Getting started

### Prerequisites

- Linux or macOS
- Python 3
- CPU or NVIDIA GPU + CUDA CuDNN

### Requirements

#### Using Conda

Run the following command to set up the requirements:

```
conda env create -f environment.yml
```

#### Using pip

Run the following command to set up the requirements:

```
pip install -r requirements.txt
```

#### Preparing data

[todo]

### Training

[todo add script and args for each model]

### Testing

[todo explain test script]
