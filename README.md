# 3d-image-rotate
3D image rotate  
JS script for a 3D image rotation effect when the cursor is hovered over.
There are two versions of the **block_version.js** and **img_version.js**
___
### What is the difference?

#### block_version.js
The image is inserted into the block upon hovering over which changes occur, which makes the effect stable, but the cursor is not always on the image

#### img_version.js
This version runs the script only when the cursor is on the image, which can cause problems when the image is jerky. **Why does this happen?** The image changes its size, so the places where the effect used to work may become inactive
