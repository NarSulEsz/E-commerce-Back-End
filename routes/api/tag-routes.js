const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          as: 'tag_belonging_to_product'
        }
      ]
    });
    res.status(200).json(tags);
  } catch (err) {
    console.log(err);  //add this console log, restart server and rerun the request
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      // JOIN with Product, using the ProductTag through table
      include:
        [{ model: Product, through: ProductTag, as: 'products' }//Include the Product model using the ProductTag through table
        ]
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const create = await Create.create(req.body);

    if (req.body?.productIds?.length) {
      await tag.setProdutcs(req.body.productIds);
      await tag.save();
    }

    const tagWithProducts = await Tag.findByPk(
      tag.id,
      { include: [Product] },
    );

    return res.status(200).json(tagWithProducts);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);

    if (req.body?.productIds?.length) {
      await tag.setProducts(req.body.productIds);
    }

    await tag.update(req.body);
    await tag.save();

    const tagWithProducts = await Tag.findByPk(
      tag.id,
      { include: [Product] },
    );

    return res.status(200).json(tagWithProducts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
