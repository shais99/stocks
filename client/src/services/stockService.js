import axios from "axios";

const serverUrl = "http://localhost:3000/stocks";

const addStock = async (stock) => {
  const response = await axios.post(serverUrl, stock);

  return response.data;
};

const getStocks = async (username) => {
  const response = await axios.get(`${serverUrl}/${username}`);

  return response.data;
};

const deleteStock = async (id) => {
  const response = await axios.delete(`${serverUrl}/${id}`);

  return response.data;
};

const searchStocks = async (query) => {
  const response = await axios.get(`${serverUrl}/search/${query}`);

  return response.data;
};

const getStockQuote = async (id, username) => {
  const response = await axios.get(`${serverUrl}/quote/${id}/${username}`);

  return response.data;
};

export { addStock, getStocks, deleteStock, searchStocks, getStockQuote };
