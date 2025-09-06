import { Description } from "../models/description.js";
import { Dictionary } from "../models/dictionary.js";
import { Synonym } from "../models/synonym.js";

export const GetAllSynonyms = async (req, res) => {
  try {
    const Synonyms = await Synonym.findAll({include:[{model:Description},{model:Dictionary}]});

    res.status(200).send({
      message: "All Synonyms",
      data: Synonyms,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error getting Synonyms" });
  }
};

export const GetOneSynonym = async (req, res) => {
  try {
    let { id } = req.params;
    const Synonyms = await Synonym.findByPk(id);

    res.status(200).send({
      message: "Synonym",
      data: Synonyms,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error getting Synonym" });
  }
};

export const AddSynonym = async (req, res) => {
  try {
    const { descriptionId, dictionaryId } = req.body;
    const NewSynonym = await Synonym.create({
      descriptionId,
      dictionaryId,
    });
    res.status(201).send({
      message: "New Synonym is added",
      data: NewSynonym,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error adding Synonym" });
  }
};

export const PatchSynonym = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Synonym.findOne({ where: { id } });
    if (!check) {
      return res.status(403).send({ message: "Such Synonym doesn't exists" });
    }
    const fSynonym = await Synonym.update(req.body, {
      where: { id },
      returning: true,
    });
    res.status(201).send({
      message: "Synonym is updated",
      data: fSynonym[1][0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error updating Synonym" });
  }
};

export const DeleteSynonym = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Synonym.findOne({ where: { id } });
    if (!check) {
      return res.status(403).send({ message: "Such Synonym doesn't exists" });
    }
    const fSynonym = await Synonym.destroy({
      where: { id },
    });
    res.status(201).send({
      message: "Synonym is deleted",
      data: id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error deleted Synonym" });
  }
};
