import '../styles/body.css';
import '../styles/header.css'
import { ReactMatrixAnimation } from 'react-matrix-animation';
import tg from '../assets/tg.png';
import x from '../assets/x.png';
import { ReactTyped } from "react-typed";
import gif from '../assets/git1.gif';

const Body = () => {

    function spark(event: any) {
        let i = document.createElement("i");
        i.style.left = event.pageX + "px";
        i.style.top = event.pageY + "px";
      
        i.style.transform = `scale(${Math.random() * 2 + 1})`;
      

        i.style.setProperty("--x", getRandomTransitionValue());
        i.style.setProperty("--y", getRandomTransitionValue());
        document.body.appendChild(i);
      
        setTimeout(() => {
          document.body.removeChild(i);
        }, 2000);
      };
      
      function getRandomTransitionValue() {
        return `${Math.random() * 400 - 200}px`;
      }

      document.addEventListener("mousemove", spark);

    return (
        <div className='body'>
            <ReactMatrixAnimation 
            fontColor = "#f200b2"
            fadeFactor={0.05}
            />
            <div className='header'>
                    <section>
                        <h2>
                        NOTHING TO $OMETHING
                        </h2>
                        <img 
                        src={gif}
                        alt='git'
                        />
                    </section>

                    <div>
                        <a>
                        <img src={tg} alt="tg"/>
                        </a>
                        <a>
                        <img src={x}  alt="x"/>
                        </a>
                    </div>
            </div>

            <div className='centerbody'>
                <ReactTyped 
                strings={[
                    "fuck bitcoin",
                    "fuck putin",
                    "fuck not",
                    "fuck btc",
                    "new coin era",
                    "dota 2 pudge mid"
                ]}
                typeSpeed={70}
                backSpeed={80}
                loop
                />
            
            </div>
            <button>YOU SHOULD NEVER CLICK THIS</button>
        </div>
    )
}

export default Body;