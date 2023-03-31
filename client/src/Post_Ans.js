import React from 'react'

export default function Post_Ans(props) {

  return (
    <div class="details">
      <div class="row">
        <div class="card">
          <p>Answerd By :</p>
          <h6 style={{ color: "#2292dd" }}>{props.ans.userName}</h6>
          <p>{props.ans.body}</p>
          <div class="row">
            <button style={{ backgroundColor: "#2292dd", width: "10%", padding: "4px", marginLeft:"10px", color:"white" }}>Delete</button>
            </div>
          <br />
        </div>
      </div>
      <br></br>
    </div>
  );
}
