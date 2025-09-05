import { Author_social } from "../models/author_social.js";
import { Social } from "../models/social.js";

export const GetAllAuthor_socials = async (req, res) => {
  try {
    const Author_socials = await Author_social.findAll({include:Social});

    res.status(200).send({
      message: "All Author_socials",
      data: Author_socials,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error getting Author_socials" });
  }
};

export const GetOneAuthor_social = async (req, res) => {
  try {
    let { id } = req.params;
    const Author_socials = await Author_social.findByPk(id);

    res.status(200).send({
      message: "Author_social",
      data: Author_socials,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error getting Author_social" });
  }
};

export const AddAuthor_social = async (req, res) => {
  try {
    const {
      social_link,
      socialId,
      authorId
    } = req.body;
    const check = await Author_social.findOne({ where: { social_link } });
    if (check) {
      return res.status(403).send({ message: "Such Author_social already exists" });
    }
    const NewAuthor_social = await Author_social.create({
      social_link,
      socialId,
      authorId
    });
    res.status(201).send({
      message: "New Author_social is added",
      data: NewAuthor_social,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error adding Author_social" });
  }
};

export const PatchAuthor_social = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Author_social.findOne({ where: { id } });
    if (!check) {
      return res.status(403).send({ message: "Such Author_social doesn't exists" });
    }
    const fAuthor_social = await Author_social.update(req.body, {
      where: { id },
      returning: true,
    });
    res.status(201).send({
      message: "Author_social is updated",
      data: fAuthor_social[1][0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error updating Author_social" });
  }
};

export const DeleteAuthor_social = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Author_social.findOne({ where: { id } });
    if (!check) {
      return res.status(403).send({ message: "Such Author_social doesn't exists" });
    }
    const fAuthor_social = await Author_social.destroy({
      where: { id },
    });
    res.status(201).send({
      message: "Author_social is deleted",
      data: id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error deleted Author_social" });
  }
};
