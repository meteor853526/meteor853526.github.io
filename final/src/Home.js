import Home1 from './images/Home1.png';
import Home2 from './images/Home2.png';
import Home3 from './images/Home3.png';
import drink1 from './images/drink1.png';
import drink2 from './images/drink2.png';
import order1 from './images/order1.png';
import order2 from './images/order2.png';
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
      <div className="Home">
        <div className="fixed-top">
              <div className="content">
                  <div className="col1">來點貓貓</div>
              </div>
        </div>
        <div className="content1">
            <div className="container1">STARBUCKS® REWARDS</div>
            <div className="col2">
                <div className="card" > 
                    <img className="card-img-top"src={Home1} alt="Background" />
                        <div className="card-body">
                            <p className="card-text">Let us treat you—earn and redeem Stars for free drinks, food and more.</p>
                        </div>
                </div>
                <div className="card" > 
                    <img className="card-img-top"src={Home2} alt="Background" />
                        <div className="card-body">
                            <p className="card-text">Customize your order in the app and pick it up when it’s ready.</p>
                        </div>
                </div>
                <div className="card" > 
                    <img className="card-img-top"src={Home3} alt="Background" />
                        <div className="card-body">
                            <p className="card-text">Stop in on your birthday for a special treat on the house.</p>
                        </div>
                </div>
            </div> 
            <div className="Homebuttom">
                <Link to="#" className="btn2"><button className="Homebuttom btn2">Join Now</button></Link>
                <Link to="#" className="btn1"><button className="Homebuttom btn1">Learn more</button></Link>
            </div>
            
            <div className="space">
                <div className="card sec border">
                    <div className="card-header card1">
                    Answer a few questions to find something new
                    </div>
                    <div className="card-body">
                        <p className="card-text card1">What type of drink are you looking for?</p> 
                        <div className="ins1">
                            <img className="drink1"src={drink1} alt=""></img>
                            <p className="cot cot1">Iced</p>
                            <p className="cot cot2">Cool off and uplife</p>
                        </div> 
                    </div>
                    <div className="card-body">
                        <div className="ins2">
                            <img className="drink2"src={drink2} alt=""></img>
                            <p className="cot2 cot1">Hot</p>
                            <p className="cot2 cot2">Warm and get going</p>
                        </div> 
                    </div>


                    
                </div>
                <div className="card sec2 border">
                    <img className="order1" src={order1} alt=""></img>
                    <div class="card-body1">
                        <h5 class="card-title1">Order on the way</h5>
                        <p class="card-text3">Order ahead and pick up your order at the counter when you arrive.</p>
                        <button className="Cardbtn1">Order Now</button>
                    </div>
                </div>
                <div className="card sec2 border">
                    <img className="order1" src={order2} alt=""></img>
                    <div class="card-body1">
                        <h5 class="card-title1">Have a Starbucks Card?</h5>
                        <p class="card-text3">Add a Starbucks Card to order ahead and start earning more.</p>
                        <button className="Cardbtn1">Register Now</button>
                    </div>
                </div>
                
            </div>
        </div>
        
      </div>
     );
}
 
export default Home;