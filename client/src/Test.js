import React, {useState} from 'react'

function Test() {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);
  const onSubmit = () => {
    let tempArr = [...ContentList]; //배열은 카피 후 추가해야함.
    tempArr.push(Content);
    setContentList([...tempArr]); //디카피
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
      {ContentList.map((content, idx) => {
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
  );
}

export default Test
