import React, {useState} from 'react'

function List(props) {
  return (
    <div>
      {props.ContentList.map((content, idx) => {
        return (
        <div 
          key={idx}
          style={{
            width: '100%',
            marginLeft: "10px"
          }}
          >
            내용: {content}
            <hr />          
          </div>
        );
      })}
    </div>
  )
}


export default List
