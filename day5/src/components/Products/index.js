import React, { useEffect, useState } from 'react'
import './index.css'
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;
function Products() {
    const [add, setAdd] = useState(false);
    const [form] = Form.useForm();
    const [myProducts, setProducts] = useState([]);
    const [myDraft, setDraft] = useState([]);
    const [isDraft, setIsDraft] = useState(false);

    const useType = localStorage.getItem('useType');
    const onFinish = (values) => {
        if (isDraft) {
            if (!localStorage.getItem('draft')) {
                const mydata = [values,];
                localStorage.setItem('draft', JSON.stringify(mydata))
            }
            else {
                let data = JSON.parse(localStorage.getItem('draft'));
                localStorage.setItem('draft', JSON.stringify([...data, values]));

            }
            let data = JSON.parse(localStorage.getItem('products'));
            setDraft([...data]);
            setAdd(!add);
        }
        else {
            if (!localStorage.getItem('products')) {
                const mydata = [values,];
                localStorage.setItem('products', JSON.stringify(mydata))
            }
            else {
                let data = JSON.parse(localStorage.getItem('products'));
                localStorage.setItem('products', JSON.stringify([...data, values]));

            }
            let data = JSON.parse(localStorage.getItem('products'));
            setProducts([...data]);
            setAdd(!add);
        }
    };
    const onReset = () => {
        form.resetFields();
    };

    useEffect(() => {
        if (localStorage.getItem('products')) {

            let data = JSON.parse(localStorage.getItem('products'));
            let dummydraft = JSON.parse(localStorage.getItem('products'));
            setProducts([...data]);
            setDraft([...dummydraft]);
        }
    }, [])

    const handelDelete = (i) => {
        const data = JSON.parse(localStorage.getItem('products'));
        data[i].name = '';
        setProducts([...data]);
        console.log(data[i]);
        localStorage.setItem('products', JSON.stringify(data));
    }

    return (
        <div className='products'>
            {
                add === true ? (<div className="form">
                    <Form

                        form={form}
                        onFinish={onFinish}
                    >
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

                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button onClick={() => setIsDraft(true)}>
                                Add Draft
                            </Button>
                        </Form.Item>
                    </Form>
                    <Button onClick={() => setAdd(!add)} type="primary">Close</Button>
                </div>) : ("")
            }
            {
                add === false && useType !== 'user' ? (<Button onClick={() => setAdd(!add)} type="primary">Add</Button>) : ("")
            }

            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    {
                        useType === 'admin' ? (<th>Delete</th>) : ("")
                    }
                </tr>
                {
                    myProducts.map((item, i) => {
                        if (item.name !== '') {
                            return (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    {
                                        useType === 'admin' ? (<th><button onClick={() => handelDelete(i)}>Delete</button></th>) : ("")
                                    }

                                </tr>
                            )
                        }
                    }) 
                }
                {
                    myDraft.map((item, i) => {
                        if (item.name !== '') {
                            return (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    {
                                        useType === 'admin' ? (<th><button onClick={() => handelDelete(i,"draft")}>Delete Draft</button></th>) : ("")
                                    }

                                </tr>
                            )
                        }
                    })

                }
            </table>

        </div>
    )
}

export default Products