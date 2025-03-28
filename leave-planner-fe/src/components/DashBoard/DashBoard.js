import React from "react";

function DashBoard() {

    const items = [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
    ];
    const listItems = items.map((item, index) => <li key={index}>{item.text}</li>);
    return <ul>{listItems}</ul>;

    return <> Dashbooard :
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</>

}


export default DashBoard;