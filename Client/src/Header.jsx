import { useState } from 'react'
import './Header.css'

function Header() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='navbar'>
                <p id='name'> ГБОУ “ОРЕНУБРГСКАЯ КАДЕТСКАЯ
                    ШКОЛА-ИНТЕРНАТ” </p>
                <p id='butt'>Актуальные</p>
                <p id='name'>Учёт товарно-материальных ценностей</p>
                <p id='butt'>Списанные</p>
                <p id='button'>Добавить товар</p>

            </div>
        </>
    )
}

export default Header