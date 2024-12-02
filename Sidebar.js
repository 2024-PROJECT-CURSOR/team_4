import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar-box'>
      <div className='seperation-line'>
        <div className='sidebar-title'>My Todo list</div>
        <div className='sidebar-element'>Todo list 1</div>
        <div className='sidebar-element'>Todo list 2</div>
        <div className='sidebar-element'>Todo list 3</div>
      </div>

      <div className='seperation-line'>
        <div className='sidebar-title'>게시판</div>
        <div className='sidebar-element'>전체 게시판</div>
        <div className='sidebar-element'>인기글</div>
      </div>
    </div>
  )
}

export default Sidebar