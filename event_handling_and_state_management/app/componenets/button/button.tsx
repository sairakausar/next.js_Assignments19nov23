

export default function MyButton(props: any) {
  return (
    <div>
      <button onClick={()=>{props.funtionTitle}} style={{backgroundColor: "purple"}}>
        Button to {props.title}
      </button>
    </div>
  );
}
