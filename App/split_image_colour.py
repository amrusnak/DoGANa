import argparse
import numpy as np
import cv2

def split_images(top: np.ndarray, bottom: np.ndarray, frac: float) -> np.ndarray:
    assert top.shape == bottom.shape, 'images need to have the same shape'

    height, width = top.shape
    cutoff = int(height * frac)

    # wavy split
    out = np.zeros(top.shape)
    for w in range(width):
        c = cutoff + int(np.sin(np.pi * 0.05 * w) * 4)
        out[:, w] = np.concatenate((top[:c, w], bottom[c:, w]))

    return out



def split_images_colour(top: np.ndarray, bottom: np.ndarray, frac: float) -> np.ndarray:
    assert top.shape == bottom.shape, 'images need to have the same shape'

    #height, width = top.shape
    height, width, colour = top.shape
    cutoff = int(height * frac)

    # wavy split
    out = np.zeros(top.shape)


    for w in range(width):
        c = cutoff + int(np.sin(np.pi * 0.05 * w) * 4)
        out[:, w,:] = np.concatenate((top[:c, w,:], bottom[c:, w,:]))

    return out.astype(int)


    # clean split
    # top_split = top[:cutoff, :]
    # bottom_split = bottom[cutoff:, :]
    # return np.vstack((top_split, bottom_split))

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--path_top', type=str, default='image_top.png',
                        help='path to top image')
    parser.add_argument('--path_bottom', type=str, default='image_bottom.png',
                        help='path to bottom image')
    parser.add_argument('--output', type=str, default='image_output.png',
                        help='output image path')
    parser.add_argument('--frac', type=float, default=0.5,
                        help='split fraction')
    args = parser.parse_args()

    # read images
    img_top = cv2.imread(args.path_top)
    img_bottom = cv2.imread(args.path_bottom)

    img_res = split_images(img_top, img_bottom, args.frac)

    cv2.imwrite(args.output, img_res)