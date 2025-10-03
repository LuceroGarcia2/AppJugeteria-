
import apiClient from "./apiClient";

// Obtener todos los juguetes
export const getAllToys = async () => {
  const res = await apiClient.get("/Toys/allToys");
  return res.data;
};

// Obtener todas las categorías
export const getCategories = async () => {
  const res = await apiClient.get("/Toys/categories");
  return res.data;
};

// Obtener un juguete por ID
export const getToyById = async (id: number) => {
  const res = await apiClient.get(`/Toys/${id}`);
  return res.data;
};

// Obtener juguetes por rango de precios
export const getToysByPriceRange = async (min?: number, max?: number) => {
  const res = await apiClient.get("/Toys/getToysByPriceRange", {
    params: { min, max },
  });
  return res.data;
};

// Buscar juguetes por nombre
export const getToyByName = async (name: string) => {
  const res = await apiClient.get("/Toys/getToyByName", {
    params: { name },
  });
  return res.data;
};

// Crear un juguete nuevo
export const createToy = async (toy: any) => {
  const res = await apiClient.post("/Toys/createToy", toy, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

// ✅ Actualizar un juguete existente (ajustado a tu API)
export const updateToy = async (toy: any) => {
  const res = await apiClient.put("/Toys/updateToy", toy, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

// Eliminar un juguete por ID
export const deleteToyById = async (id: number) => {
  const res = await apiClient.delete("/Toys/deleteToyById", {
    params: { id }, // ✅ tu API espera el ID como query param
  });
  return res.data;
};
