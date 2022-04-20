import { apiClient } from "~/clients";
import { TodoModel } from "~/data/models";

const API_PATH = "/todos";

const fetchFindTodos = async (params?: object) => {
  const { data } = await apiClient.get<TodoModel[]>(API_PATH, { params });
  return data;
};

const fetchFindTodo = async (id?: string, params?: object) => {
  const { data } = await apiClient.get<TodoModel>(`${API_PATH}/${id}`, {
    params,
  });
  return data;
};

const fetchCreateTodo = async (body?: TodoModel) => {
  await apiClient.post(`${API_PATH}`, body);
};

const fetchUpdateTodo = async (body?: TodoModel, id?: string) => {
  await apiClient.put(`${API_PATH}/${id}`, body);
};

const fetchDeleteTodo = async (id?: string) => {
  await apiClient.delete(`${API_PATH}/${id}`);
};

export {
  fetchFindTodos,
  fetchFindTodo,
  fetchCreateTodo,
  fetchUpdateTodo,
  fetchDeleteTodo,
};
