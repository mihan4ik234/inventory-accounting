import { useState } from 'react'
import './Filter.css'

function Filter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='all'>
                <div className='filter'>
                    <div className='Name'>
                        <p id='name'>Сортировать по:</p>
                    </div>
                    <div className='variant'>
                        <p id='variant'>А-Я</p>
                        <p id='variant'>дата преобретения</p>
                        <p id='variant'>Статья закупки</p>
                        <p id='variant'>Самые старые</p>
                        <p id='variant'>Самые дорогие</p>
                        <p id='variant'>Самые дешёвые</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Filter