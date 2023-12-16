

export default function MyButton(props:any) {
  return (
    <div>
      <button onClick={props.button_function}  style={{background: "red", borderRadius:"4px", padding:"20px", margin:" 5px", fontWeight:"bold", border:"5px Solid black"}}>
              Button to {props.button_title}
              
      </button>
    </div>
  );
}
