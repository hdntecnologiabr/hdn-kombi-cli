import { apiClient } from "~/clients";
import { TodoModel } from "~/data/models";

const API_PATH = "/todos";

const findAll = async (params?: object) => {
  const { data } = await apiClient.get<TodoModel[]>(API_PATH, { params });
  return data;
};

const find = async (id?: string, params?: object) => {
  const { data } = await apiClient.get<TodoModel>(`${API_PATH}/${id}`, {
    params,
  });
  return data;
};

const create = async (body?: TodoModel) => {
  await apiClient.post(`${API_PATH}`, body);
};

const update = async (body?: TodoModel, id?: string) => {
  await apiClient.put(`${API_PATH}/${id}`, body);
};

const remove = async (id?: string) => {
  await apiClient.delete(`${API_PATH}/${id}`);
};

const TodoService = {
  findAll,
  find,
  create,
  update,
  remove,
};

export { TodoService };
