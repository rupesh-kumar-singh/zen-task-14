import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Additem from "./components/Additem";
import uuid from "react-uuid";

function App() {
  const [toggle, settoggle] = useState(false);
  const [itemid, setitemid] = useState("");
  const [item, setitem] = useState("");
  const [itemlist, setitemlist] = useState([]);
  const handleadd = () => {
    if (toggle) {
      const newlist = itemlist.map((itemdata) => {
        if (itemdata.id === itemid) {
          return { ...itemdata, itemName: item };
        }

        return itemdata;
      });
      setitemlist(newlist);
      settoggle(false);
      setitem("");
    } else {
      const data = { id: uuid(), itemName: item };

      setitemlist([...itemlist, data]);

      console.log(itemlist);
      setitem("");
      toast.success("Item added successsfully");
    }
  };

  const handleinput = (e) => {
    setitem(e.target.value);
  };

  const deletebtn = (id) => {
    console.log(id);
    const filterdata = itemlist.filter((data) => {
      return data.id !== id;
    });

    setitemlist(filterdata);
    toast.error("Item deleted successsfully");
  };
  const deleteall = () => {
    setitemlist([]);
    toast.error("All item deleted successsfully");
  };

  const updatebtn = (id) => {
    const updatedata = itemlist.find((data) => {
      return data.id === id;
    });

    setitem(updatedata.itemName);

    settoggle(true);
    setitemid(id);
  };

  return (
    <div className="App">
      <div className="crud-background">
        <h1>React To-Do List App</h1>
        <div className="crud-ope">
          <input placeholder="  To-Do..." onChange={handleinput} value={item} />
          <div>
            <button
              className="add-btn btn"
              onClick={handleadd}
              disabled={item.length > 2 ? false : true}
            >
              {toggle ? "Edit Item" : "Add Item"}
            </button>
          </div>

          <div>
            <button onClick={deleteall} className="delete-btn btn">
              Delete All
            </button>
            <ToastContainer />
          </div>
        </div>
        <Additem
          itemlist={itemlist}
          deletebtn={deletebtn}
          updatebtn={updatebtn}
        />
      </div>
    </div>
  );
}

export default App;
