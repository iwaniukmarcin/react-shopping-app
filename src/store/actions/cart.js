export const actionTypes = {
    AddItem: 'ADD_ITEM',
    DeleteItem: 'DELETE_ITEM',
}

const cart = {
    addItem: (item) => ({ type: actionTypes.AddItem, payload: item }),
    deleteItem: (id) => ({ type: actionTypes.DeleteItem, payload: id }),
}

export default cart;
