# DoGANa: A Venice CUT model

***Note**: The code in this project borrows heavily from the [PyTorch implementation of CUT](https://github.com/taesungp/contrastive-unpaired-translation)*

The purpose of this project is to transform the different ways we visualize Venice. We propose four implementations in this project:

- Photorealistic Venice:
  - Monochrome drawings -> photos (model name: `bwdraw`)
  - Monochrome paintings -> photos (model name: `bwpaint`)
  - Colour paintings -> photos (model name: `cpaint`)
- Underwater Venice:
  - Photos -> underwater rendering of the photos (model name: `underwater`)

Here are some input/output pairs of each of the models:
  
[TODO examples]
  
## Getting started

### Prerequisites

- Linux or macOS
- Python 3
- CPU or NVIDIA GPU + CUDA CuDNN

### Requirements

#### Using Conda

Run the following command to set up the requirements in `Model/`:

```
conda env create -f environment.yml
```

You can now activate the environment by running `conda activate dogana`. Deactivate the environment using `conda deactivate`.

#### Using pip

Run the following command to set up the requirements in `Model/`:

```
pip install -r requirements.txt
```

#### Preparing data

[TODO]

- remove watermarks
- crop out frames

### Data directory format
<a name="dataformat"></a>

First, prepare your training data in a directory, in the following structure (the image names do not matter, as long as images are in a jpg/png format):

```
DATA_DIR
├── trainA            # contains input images
│   ├── img1.jpg 
│   ├── img2.jpg 
│   └── ...
└── trainB            # contains output images
    ├── img300.jpg 
    ├── img301.jpg 
    └── ...
```

You can use the same directory for training or testing. Alternatively, you can prepare a separate directory to test, in the same folder structure as specified above.

### Training

To train a model, simply run `python train.py --dataroot [DATA_DIR]`. To access modifiable training parameters, run `python train.py --help`.

The training script including modified parameters used for `cpaint`/`bwpaint`/`bwdraw` models is the following:

```
python train.py --dataroot [DATA_DIR] --name [MODEL_NAME] --CUT_mode CUT --n_epochs 200 --n_epochs_decay 400 --batch_size 4 --selfAttn True --normG spectral --edgeLoss 0.4 --canny1 250 --canny2 350
```

The training script including modified parameters used for `underwater` model is the following:

[TODO]

### Testing

To test the models, first prepare the test data input in a directory `DATA_DIR`, as specified in the [Data format section](#dataformat).

To test a model, run:

```
python test_dogana.py --dataroot [DATA_DIR] --results_dir [RESULTS_DIR] --name [MODEL_NAME]
```

If you do not specify `results_dir`, the output results will be saved in `results/`.

The parameter `name` specifies which of the four models you would like to test. The options are: `bwpaint`, `bwdraw`, `cpaint`, `underwater`.

To access more testing parameters, run `python test_dogana.py --help`.
