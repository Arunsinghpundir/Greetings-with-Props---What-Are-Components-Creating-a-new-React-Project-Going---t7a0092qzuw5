// write code for Welcome component here
import React from "react";
 const Welcome = (student)=>{
    return (
    <div>
        <h1>Hey !{student.name}</h1>
        <h2>{student.children}</h2>
    </div>
    )
}
export default Welcome;