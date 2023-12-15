'use client'


export default function Button() {

    const buttonForFunction = () => {
        alert("Checking")
    }
    


    return (
        <>
             <div>
        <button onClick={buttonForFunction} style={{ background: "gold" }}>
          {" "}
          This is Big Button
        </button>
      </div>
        
        <div>
          <button
            onClick={() => {
              alert("Checked from My Site");
            }}
          >
            Plus Button
          </button>
        </div>
      </>
    );
}
