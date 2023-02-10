import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
const handleChangeIdPost = (value, setItemSelected, setIsPost) => {
  setItemSelected(value);
  setIsPost(value.id);
};

export const renderAllPost = (dataForum, setItemSelected, setIsPost) => {
  return dataForum?.map((item, index) => (
    // <div className="post-item" key={index} onClick={() => handleChangeIdPost(item, setItemSelected, setIsPost)} >
    //   <img src={item.photo}></img>
    //   <div className="title">{item.title}</div>
    // </div>
    <div>
      <Card
        sx={{
          cursor: "pointer",
          width: "250px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        key={index}
        onClick={() => handleChangeIdPost(item, setItemSelected, setIsPost)}
      >
        <div>
          <CardMedia component="img" height="194" image={item.photo} />
          <div className="card-title">{item.title}</div>
        </div>
      </Card>
    </div>
  ));
};
