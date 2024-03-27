import Product from "../Model/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getSignleProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (product) {
      res.status(200).json({ product });
    } else {
      res.status(404).json({ message: "Product not found!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getAllProductsByKeywordFilter = async (req, res) => {
  try {
    const { keyword } = req.query;

    if (keyword) {
      const products = await Product.find({
        title: { $regex: `^${keyword}`, $options: "i" },
      });
      res.status(200).json({ products });
    } else {
      res.status(400).json({ message: "Input required!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getAllProductsByColourFilter = async (req, res) => {
  try {
    const { colour } = req.query;

    if (colour) {
      const products = await Product.find({
        colour,
      });
      res.status(200).json({ products });
    } else {
      res.status(400).json({ message: "Input required!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
export const getAllProductsByCompanyFilter = async (req, res) => {
  try {
    const { company } = req.query;

    if (company) {
      const products = await Product.find({
        company,
      });
      res.status(200).json({ products });
    } else {
      res.status(400).json({ message: "Input required!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getAllProductsByUseTypeFilter = async (req, res) => {
  try {
    const { useType } = req.query;
    if (useType) {
      const products = await Product.find({
        useType,
      });
      res.status(200).json({ products });
    } else {
      res.status(400).json({ message: "Input required!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getAllProductsBySortAscFilter = async (req, res) => {
  try {
    const products = await Product.find().sort({ company: "asc" });
    res.status(200).json({ products });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
export const getAllProductsBySortDescFilter = async (req, res) => {
  try {
    const products = await Product.find().sort({ company: "desc" });
    res.status(200).json({ products });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getAllProductsByPriceFilter = async (req, res) => {
  try {
    const { minPrice, maxPrice } = req.body;
    console.log(maxPrice, minPrice);
    const products = await Product.find({
      price: { $lte: maxPrice, $gte: minPrice },
    });
    res.status(200).json({ products });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
