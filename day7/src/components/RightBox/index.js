import React, { useEffect, useState } from 'react'
import './index.css'
import { useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons'
import Loading from '../Loading'
import Note from '../Note';
function RightBox() {
    let dummy = useSelector((state) => state.notes.myNotes);
    const [notes, setNotes] = useState(useSelector((state) => state.notes.myNotes))
    const [search, setSearch] = useState("");
    const handelOnChange = (e) => {
        setSearch(e.target.value)
        const myFilterData = dummy.filter((item) => {
            return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || item.body.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        const originalData = notes;
        setNotes([...myFilterData]);
    }
    const data = search === '' ? dummy : notes;
    return (
        <div className='rightBox'>
            <div className="navBox">
                <div className="search">
                    <SearchOutlined />
                    <input type="text" onChange={handelOnChange} placeholder='Search..' />
                </div>
            </div>
            {
                data.length === 0 ? (<div> <Loading /> </div>) :
                 (<div className="notes">
                    {

                        data?.map((note, i) => {
                            return (
                                <Note key={note.id} note={note} i={i} />
                            )
                        })
                    }
                </div>
                )
            }

        </div>
    )
}

export default RightBox