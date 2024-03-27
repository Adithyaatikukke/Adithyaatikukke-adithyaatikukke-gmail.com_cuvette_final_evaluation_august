import Product from "../Model/Product.js";
import User from "../Model/User.js";

export const addToOrder = async (req, res) => {
  try {
    const { _id } = req.user;
    const { productId, deliveryAddress, paymentMethod } = req.body;

    if (_id && productId) {
      const user = await User.findById(_id);
      const product = await Product.findById(productId);

      if (product) {
        const addOrder = {
          id: product._id.valueOf(),
          title: product.title,
          image: product.image,
          price: product.price,
          colour: product.colour,
          useType: product.useType,
          quantity: product.quantity,
          description: product.description,
          deliveryAddress,
          paymentMethod,
        };
        await User.findByIdAndUpdate(
          _id,
          { $push: { orders: addOrder } },
          { new: true }
        );

        res.status(201).json({ message: "Added to order succesfully!" });
      } else {
        res.status(404).json({ message: "Product not found!" });
      }
    } else {
      res.status(400).json({ message: "All inputs required!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
export const addMultipleProductsToOrder = async (req, res) => {
  try {
    const { _id } = req.user;
    const { productIds, paymentMethod, deliveryAddress } = req.body;

    if (_id && productIds[0]) {
      const user = await User.findById(_id);
      if (user) {
        const products = await Promise.allSettled(
          productIds.map(async (id) => await Product.findById(id))
        );

        const newOrders = products.map(({ value }) => {
          const porduct = {
            id: value._id.valueOf(),
            title: value.title,
            image: value.image,
            price: value.price,
            colour: value.colour,
            useType: value.useType,
            quantity: value.quantity,
            description: value.description,
            paymentMethod,
            deliveryAddress,
          };
          return porduct;
        });

        newOrders.map(
          async (order) =>
            await User.findByIdAndUpdate(_id, {
              $push: {
                orders: { ...order },
              },
            })
        );

        await res
          .status(201)
          .json({ message: "All orders added to order succusefully!" });
      } else {
        res.status(404).json({ message: "User not found!" });
      }
    } else {
      res.status(400).json({ message: "All inputs required!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
