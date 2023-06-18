export const changeData = (value) => {

    let userData = JSON.parse(localStorage.getItem('id'));
    let useType = localStorage.getItem('useType');

    const data = JSON.parse(localStorage.getItem(useType));
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === userData.email) {
            data[i].name = value.name;
            data[i].email = value.email;
            localStorage.setItem(useType, JSON.stringify(data));
            localStorage.setItem('id', JSON.stringify(data[i]));
            return;
        }

    }


}

export const updateProduct = (value, mode, i) => {

    const data = JSON.parse(localStorage.getItem(mode));
    data[i].name = value.name;
    data[i].price = value.price;
    data[i].img = value.img;
    localStorage.setItem(mode, JSON.stringify(data));
    return;


}

export const handelDeleteItem=(i,mode,isChange)=>{
    const data = JSON.parse(localStorage.getItem(mode));
        data[i].name = '';
        localStorage.setItem(mode, JSON.stringify(data));
        return isChange;
}

