import React, {useState} from 'react'

function Upload(props) {
    const [Content, setContent] = useState("");

    const onSubmit = () => {
        let tempArr = [...props.ContentList]; //배열은 카피 후 추가해야함.
        tempArr.push(Content);
        props.setContentList([...tempArr]); //디카피
        setContent("");
    }

  return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        }}
    >
      <input 
        type='text'
        value={Content}
        onChange={(e) => {
          // console.log(e.currentTarget.value)
          setContent(e.currentTarget.value);
        }}
      />
      <button 
        onClick={() => {
          onSubmit();
        }}
        style={{marginTop: '10px'}}
      >
        제출!
      </button>
    </div> 
  )
}


export default Upload
