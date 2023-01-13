// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Note from "../src/components/Note";
import CreateArea from "../src/components/CreateArea";


function App() {

  const [titleItems, setTitleItems] = useState([]);
  const [contentItems, setContentItems] = useState([]);
  const [items, setItems] = useState([]);

  function addItem(titleInput, contentInput) {
    //event.preventDefault();
    console.log("add item", titleInput, contentInput);
    setTitleItems((prevT) => [...prevT, titleInput]);

    setContentItems((prevC) => { return [...prevC, contentInput]; });

    setItems(preItems => [...preItems, {
      title: titleInput,
      content: contentInput
    }]);

    // console.log(titleItems, contentItems);
  }
  function deleteItem(id) {
    setItems(preItems => (preItems.filter((item, index) => id !== index)))
    console.log("delete item 2");
  }

  return (
    <div className="App">
      <Header />
      <CreateArea
        addItem={addItem} />

      {(items) && items.map((item, index) =>
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onChecked={deleteItem}
        />)}
      <Footer />
    </div>
  );
}

export default App;
