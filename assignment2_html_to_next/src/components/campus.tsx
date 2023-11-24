import Image from "next/image";

const Campus = () => {
    return (
       

    <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="campus-col">
                <img src="img/Campus1.png" alt="">
                <div className="layer">
                    <h3>DELHI</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src="img/Campus2.png" alt="">
                <div className="layer">
                    <h3>HYDERABAD</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src="img/Campus3.png" alt="">
                <div className="layer">
                    <h3>MUMBAI</h3>
                </div>
            </div>
        </div>
    </section>
   
    )
}
export { Campus }