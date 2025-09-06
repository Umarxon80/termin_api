import { Category } from "../models/category.js";

export const GetAllCategorys = async (req, res) => {
  try {
    const Categorys = await Category.findAll({
      include: [
        {
          model: Category,
          as: "parent", 
        },
        {
          model: Category,
          as: "children",
        },
      ],
    });

    res.status(200).send({
      message: "All Categorys",
      data: Categorys,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error getting Categorys" });
  }
};

export const GetOneCategory = async (req, res) => {
  try {
    let { id } = req.params;
    const Categorys = await Category.findByPk(id);

    res.status(200).send({
      message: "Category",
      data: Categorys,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error getting Category" });
  }
};

export const AddCategory = async (req, res) => {
  try {
    const { name, parent_categoryId } = req.body;
    const check = await Category.findOne({ where: { name } });
    if (check) {
      return res.status(403).send({ message: "Such Category already exists" });
    }
    const NewCategory = await Category.create({
      name,
      parent_categoryId,
    });
    res.status(201).send({
      message: "New Category is added",
      data: NewCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error adding Category" });
  }
};

export const PatchCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Category.findOne({ where: { id } });
    if (!check) {
      return res.status(403).send({ message: "Such Category doesn't exists" });
    }
    const fCategory = await Category.update(req.body, {
      where: { id },
      returning: true,
    });
    res.status(201).send({
      message: "Category is updated",
      data: fCategory[1][0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error updating Category" });
  }
};

export const DeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Category.findOne({ where: { id } });
    if (!check) {
      return res.status(403).send({ message: "Such Category doesn't exists" });
    }
    const fCategory = await Category.destroy({
      where: { id },
    });
    res.status(201).send({
      message: "Category is deleted",
      data: id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error deleted Category" });
  }
};
