import { Request, Response } from "express";
import User from "../models/user.mode";
import handleResponse from "../lib/handleResponse";
import handleError from "../lib/handleError";

export const getUsers_c = async (req: Request, res: Response) => {
  let users = await User.find({});
  handleResponse(res, users);
};

export const getUser_c = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let selectedUser = await User.findById(id);
    if (!selectedUser) {
      handleResponse(res, "User was not found", 404);
      return;
    }
    handleResponse(res, selectedUser, 200);
  } catch (error) {
    handleError(res, error);
  }
};

export const createUser_c = async (req: Request, res: Response) => {
  try {
    const values = await req.body;
    const newUser = new User(values);
    await newUser.save();
    handleResponse(res, "new user was created successfully", 201);
  } catch (error) {
    handleError(res, error);
  }
};

export const editUser_c = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const values = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, values);
    if (!updatedUser) {
      handleResponse(res, "User was not found", 404);
      return;
    }
    handleResponse(res, "user data was updated successfully", 200);
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteUser_c = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      handleResponse(res, "User was not found", 404);
      return;
    }
    handleResponse(res, "user was deleted successfully", 200);
  } catch (error) {
    handleError(res, error);
  }
};
