/* eslint-disable linebreak-style */
import Todo from '../models/todoModel';
import logger from '../helpers/logger';

export const create = async (req, res) => {
  try {
    const newTodo = new Todo({
      content: req.body.content,
    });
    const result = await newTodo.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
    logger.error(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json(error);
    logger.error(error);
  }
};

export const get = async (req, res) => {
  try {
    const todos = await Todo.find({ _id: req.params.id });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json(error);
    logger.error(error);
  }
};

export const update = async (req, res) => {
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json(error);
    logger.error(error);
  }
};

export const remove = async (req, res) => {
  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(500).json(error);
    logger.error(error);
  }
};
