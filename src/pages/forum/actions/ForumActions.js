const handleChangeIdPost = (value, setItemSelected, setIsPost) =>{
  setItemSelected(value);
  setIsPost(value.id);
};

export const renderAllPost = (dataForum, setItemSelected, setIsPost) => {
  return (
    dataForum?.map((item, index) => (
      <div className="post-item" key={index} onClick={() => handleChangeIdPost(item, setItemSelected, setIsPost)} >
        <img src={item.photo}></img>
        <div className="title">{item.title}</div>
      </div>
    ))
  )
};