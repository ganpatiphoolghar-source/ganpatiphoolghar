# Product images

Add your photo files to this folder using **exactly these filenames**
(the code in js/products.js already points to these paths). If a file is
missing, that product just shows a drawn icon instead — nothing breaks.

| Filename                      | Product             |
| ----------------------------- | ------------------- |
| marigold-garland.jpg          | Marigold Garland    |
| rose-garland.jpg              | Rose Garland        |
| marigold-rose-mix-garland.jpg | Marigold & Rose Mix |
| loose-marigold.jpg            | Loose Marigold      |
| loose-rose-petals.jpg         | Loose Rose Petals   |
| lotus-flowers.jpg             | Lotus Flowers       |
| durva-grass.jpg               | Durva Grass Bunch   |
| bel-patra.jpg                 | Bel Patra           |
| flower-rangoli-kit.jpg        | Flower Rangoli Kit  |
| marigold-toran.jpg            | Marigold Toran      |

Tips:

- Use .jpg or .png — if you use a different extension, update the
  `image:` path for that product in js/products.js to match.
- Roughly square photos (e.g. 600x600px) look best in the grid.
- Keep each file under ~300KB so the site loads quickly — resize/compress
  large phone photos before adding them.
- To add a brand-new product, add a new entry in js/products.js with its
  own `image` path, then drop the matching file in this folder.
