import React, { useState } from "react";

function CreateArea({ addItem }) {

    const [titleInput, setTitleInput] = useState("");

    const [contentInput, setContentInput] = useState("");



    function handleTitleChange(e) {
        let newValue = e.target.value;

        setTitleInput(newValue);
    }

    function handleContentChange(e) {
        let newValue = e.target.value;

        setContentInput(newValue);
    }

    function handleClick(event) {

        event.preventDefault();
        addItem(titleInput, contentInput);
        // console.log("onclick", titleInput)
        setContentInput("");
        setTitleInput("");
    }



    return (
        <div>
            <form>
                <input
                    name="title"
                    placeholder="Title"
                    value={titleInput}
                    onChange={handleTitleChange}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={contentInput}
                    onChange={handleContentChange}
                />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
