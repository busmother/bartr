import { setStatus, logout, addUser } from "./user";
import { fetchOrders, closeOrder, clearOrders } from "./order";
import { fetchItems, addItem, removeItem, clearItems } from "./item";
import { fetchProducts } from "./fetchProducts"

const allActions = {
    setStatus,
    logout,
    addUser,
    fetchOrders,
    closeOrder,
    clearOrders,
    fetchItems,
    addItem,
    removeItem,
    clearItems,
    fetchProducts
}

export default allActions