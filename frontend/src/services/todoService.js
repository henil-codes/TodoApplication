const API_BASE_URL = "/api/v1/todos";

export const getTodos = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }

    const data = response.json();

    return data;
  } catch (error) {
    console.error("Error in getTodos:", error);
    throw error;
  }
};

export const addTodo = async (newTodo) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) {
      console.log("error fetching data");
      throw new Error(`Faild to add Todo: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in addTodo:", error);
    throw error;
  }
};

export const toggleTodo = async (id, updateFields) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateFields),
    });
    if (!response.ok) {
      throw new Error(`Failed to update Todo: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in toggleTodo:", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to Delte TODO: ${response.statusText}`);
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error in DeleteTodo", error);
    throw error;
  }
};
