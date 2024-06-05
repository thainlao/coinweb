import { useEffect, useRef } from "react";
import '../styles/matrix.css'
import tg from '../assets/tg.png';
import x from '../assets/x.png';

const Matrix = () => {
    const canvasRef: any = useRef(null);
    const fontSize = 20;
    const columns = window.innerWidth / fontSize;
  
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabetString = latin + nums;
    let rainDrops = [];
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
      }
  
      const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.08)';
        context.fillRect(0, 0, canvas.width, canvas.height);
  
        context.fillStyle = '#f200b2';
        context.font = fontSize + 'px monospace';
  
        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabetString.charAt(Math.floor(Math.random() * alphabetString.length));
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
  
          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      };
  
      const intervalId = setInterval(draw, 34);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);


    return (
        <div className="matrix_section" id='martix'>
        <canvas className="matrix" ref={canvasRef}></canvas>
          <div className='header'>
                <h2>
                  NOTHING TO $OMETHING
                </h2>

                <div>
                    <a>
                      <img src={tg} alt="tg"/>
                    </a>
                    <a>
                      <img src={x} alt="x"/>
                    </a>
                </div>
            </div>
      </div>
    )
}

export default Matrix;