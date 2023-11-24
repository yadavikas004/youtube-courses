import React from "react";

function Header({name,title}) {
    return (
        <div>
            <h1>{title}</h1>
            <h1>{name}</h1>
            <p>This is header componet</p>
        </div>
    );
}
export default Header;