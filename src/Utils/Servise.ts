import axios from "axios";



const loginUser = async(value:{email: string, password: string}) => {
  try {
    await axios.post(
      ` http://${process.env.REACT_APP_URL}/login`,
      JSON.stringify( value)
    );
    
  } catch (error) {
    console.error(error);
  }
 
}
const addTodo = async (value: string) => {
  try {
    await axios.post(
      ` http://${process.env.REACT_APP_URL}`,
      JSON.stringify({ description: value, completed: false })
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteItem = async (id: string) => {
  try {
    await axios.post(` http://${process.env.REACT_APP_URL}/delete`, id);
  } catch (error) {
    console.error(error);
  }
};

const completedItem = async (id: string, checked: boolean) => {
  try {
    await axios.post(
      `http://${process.env.REACT_APP_URL}/checked`,
      JSON.stringify({ id, checked: !checked })
    );
  } catch (error) {
    console.error(error);
  }
};

const completedAllItem = async (checked: boolean) => {
  try {
    await axios.post(
      `http://${process.env.REACT_APP_URL}/completed`,
      JSON.stringify({ checked: checked })
    );
  } catch (error) {
    console.error(error);
  }
};

const deleteAllTasks = async () => {
  try {
    await axios.post(`http://${process.env.REACT_APP_URL}/deleteAllCompleted`);
  } catch (error) {
    console.error(error);
  }
};

const editItem = async (value: string, id: string) => {
  try {
    await axios.post(
      `http://${process.env.REACT_APP_URL}/edit`,
      JSON.stringify({ description: value, id })
    );
  } catch (error) {
    console.error(error);
  }
};

// ${process.env.REACT_APP_URL}
const getTodos = async () => {
  try {
    const result = await axios.get(`http://${process.env.REACT_APP_URL}`);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export {
  getTodos,
  addTodo,
  deleteItem,
  completedItem,
  completedAllItem,
  deleteAllTasks,
  editItem,
  loginUser 
  // doFetch,
};
