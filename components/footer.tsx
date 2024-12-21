import React from "react";

export default function Footer() {
  return (
    <footer
      // className="mb-10 px-4 text-center text-gray-500"
      style={{
        height: "150px",
        backgroundColor: "#313243",
        display: "flex"
      
      }}
    >

      <div className="container" style={{display:"flex", alignItems:"center",justifyContent: "space-between", margin:"0 auto" }}>
    
      <div className="containerFooter" style={{width:"800px", display:"flex", alignItems: "center"}}>
        <p style={{width:"240px"  }}>Наши контакты</p>
        <p style={{  width:"240px"}}>+7 (988) 323-77-84</p>
        <p style={{width:"240px"}}>
          Если у вас возникли вопросы или предложения, напишите нам:
          snk@kiber-one.com
        </p>

      </div>
      <img
        style={{ width: "90px", marginRight: "-140px", height:"90px", }}
         src="./kiber.png" alt="" />
      </div>
    </footer>
  );
}
