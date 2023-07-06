import { deleteProduct, updateMyProduct } from "../services/product.service";

export const changeData = (value) => {

    let userData = JSON.parse(localStorage.getItem('id'));
    let useType = localStorage.getItem('useType');

    const data = JSON.parse(localStorage.getItem(useType));
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === userData.email) {
            data[i].name = value.name;
            data[i].email = value.email;
            localStorage.setItem(useType, JSON.stringify(data));
            localStorage.setItem('id', JSON.stringify(value));
            return;
        }

    }


}

export const updateProduct = async (value, id) => {

    // const data = JSON.parse(localStorage.getItem(mode));
    // data[i].name = value.name;
    // data[i].price = value.price;
    // data[i].img = value.img;
    // localStorage.setItem(mode, JSON.stringify(data));
    try {
        await updateMyProduct(value,id)
    } catch (error) {
        console.log(error)
    }
    return;


}

export const handelDeleteItem = async (id, isChange) => {
    // const data = JSON.parse(localStorage.getItem(mode));
    //     data[i].name = '';
    //     localStorage.setItem(mode, JSON.stringify(data));
    try {
        await deleteProduct(id);
        return isChange;
    } catch (error) {
        console.log(error);
    }

}

