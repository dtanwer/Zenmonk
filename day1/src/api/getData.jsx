import data from '../data/mocData.json';
export const getProductData = (name) => {
    if (!name)
        return data;
    else {

        const filterData = data.filter((item) => {
            return item.name.toLowerCase().indexOf(name.toLowerCase())!==-1;
        });
        return filterData;
    }

}
