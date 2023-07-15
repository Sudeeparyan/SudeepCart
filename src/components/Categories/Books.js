import React from 'react'
import BooksCards from '../../pages/Books/BooksCards'
import list from '../../pages/Books/BooksData'
function Books({handleClick}) {
  return (
    <section>
        {
            list.map(item=>(
                <BooksCards data-testid="addtocartbutton" item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Books
