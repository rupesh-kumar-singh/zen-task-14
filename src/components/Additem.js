import React from "react";

import { RiDeleteBin3Fill, RiImageEditFill } from "react-icons/ri";
const Additem = (props) => {
  const { itemlist, deletebtn, updatebtn } = props;

  return (
    <div className="additem">
      {itemlist?.length !== 0 ? (
        itemlist.map((item) => {
          return (
            <div className="item" key={item.id}>
              <h2>{item.itemName}</h2>

              <div className="btn btn-del" onClick={() => deletebtn(item.id)}>
                <RiDeleteBin3Fill />
              </div>
              <div
                className="btn btn-update"
                onClick={() => updatebtn(item.id)}
              >
                <RiImageEditFill />
              </div>
            </div>
          );
        })
      ) : (
        <h2>Your To Do List is empty</h2>
      )}
    </div>
  );
};

export default Additem;
