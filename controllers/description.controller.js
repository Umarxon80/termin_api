import { Category } from "../models/category.js";
import { Description } from "../models/description.js";
import { Dictionary } from "../models/dictionary.js";

export const GetAllDescriptions = async (req, res) => {
  try {
    const Descriptions = await Description.findAll({include:[{model:Category},{model:Dictionary}]});

    res.status(200).send({
      message: "All Descriptions",
      data: Descriptions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error getting Descriptions" });
  }
};

export const GetOneDescription = async (req, res) => {
  try {
    let { id } = req.params;
    const Descriptions = await Description.findByPk(id);

    res.status(200).send({
      message: "Description",
      data: Descriptions,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error getting Description" });
  }
};

export const AddDescription = async (req, res) => {
  try {
    const { description,categoryId} = req.body;
    const check = await Description.findOne({ where: { description } });
    if (check) {
      return res
        .status(403)
        .send({ message: "Such Description already exists" });
    }
    const NewDescription = await Description.create({
      description,
      categoryId
    });
    res.status(201).send({
      message: "New Description is added",
      data: NewDescription,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error adding Description" });
  }
};

export const PatchDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Description.findOne({ where: { id } });
    if (!check) {
      return res
        .status(403)
        .send({ message: "Such Description doesn't exists" });
    }
    const fDescription = await Description.update(req.body, {
      where: { id },
      returning: true,
    });
    res.status(201).send({
      message: "Description is updated",
      data: fDescription[1][0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error updating Description" });
  }
};

export const DeleteDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Description.findOne({ where: { id } });
    if (!check) {
      return res
        .status(403)
        .send({ message: "Such Description doesn't exists" });
    }
    const fDescription = await Description.destroy({
      where: { id },
    });
    res.status(201).send({
      message: "Description is deleted",
      data: id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error deleted Description" });
  }
};
