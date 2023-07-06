import { useNavigate } from 'react-router-dom';
import './index.css';
import { Button, Form, Checkbox, Input } from 'antd';
import CloseIcon from '@mui/icons-material/Close';
import { updateProduct, handelDeleteItem } from '../../utils/changeData';
import addItem from '../../utils/addItem';
import { addProduct } from '../../services/product.service';
import { useSelector } from 'react-redux';

function AddProduct({ setIsChange, isChange, index, setIsUpdate, item }) {
    console.log(item);
    const currentUser = useSelector((state) => state.auth.userData);
    console.log(currentUser)
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const mode = values?.isDraft ? true : false;
        if (item?.name ) {
            const data = { ...values, isDraft: mode }
            // const flag = item.isDraft ? "draft" : "products";
            // if(flag===mode)
            // {
            //     console.log(flag,mode);
            //  
            // }
            // else
            // {
            //     let data = JSON.parse(localStorage.getItem(mode));
            //     localStorage.setItem(mode, JSON.stringify([...data, values]));
            //     setIsChange(!handelDeleteItem(index,flag,isChange))
            // }
            console.log("update is working")
            updateProduct(data,item._id);
            setIsUpdate(false);
            setTimeout(() => {
                setIsChange(!isChange);
            }, 400);
        }
        else {
            const data = { ...values, isDraft: mode, ownerId: currentUser._id }
            console.log(data)
            try {
                const res = await addProduct(data);
                console.log(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        navigate('/home');
        setIsChange(!isChange);
        onReset()
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        // const mode = item.draft ? "draft" : "products";
        // let data = JSON.parse(localStorage.getItem(mode));
        form.setFieldsValue({
            name: item.name,
            price: item.price,
            img: item.img,
            draft: item.isDraft
        })
    }
    if (item?.name) {

        onFill();
    }

    return (
        <div className='formBox'>
            {
                item?.name ? (<div className='myicon' onClick={() => setIsUpdate(false)} ><CloseIcon /></div>) : ""
            }
            <h2>Enter Product Details</h2>
            <div className='form'>
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="Product Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="img"
                        label="Image Url"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Product Price"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="isDraft"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Save As Draft</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button className='saveButton' type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default AddProduct
