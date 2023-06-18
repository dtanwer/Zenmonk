const addItem=(values,mode)=>{
    if (!localStorage.getItem(mode)) {
        const mydata = [values,];
        localStorage.setItem(mode, JSON.stringify(mydata))
    }
    else {
        let data = JSON.parse(localStorage.getItem(mode));
        localStorage.setItem(mode, JSON.stringify([...data, values]));
    }
}

export default addItem