import React, { useRef, useEffect } from 'react'

const Star = props => {
  
  const canvasRef = useRef(null)
  const canvasProps = {
    height: 100,
    width: 100
  }

  const finishedColoredArea = props.isPart ? +`0.${props.fill}` : props.fill;
  
  useEffect(() => {
    const canvas = canvasRef.current

    const ctx = canvas.getContext('2d')

    let grad = ctx.createLinearGradient(0, 0, 100, 0);
    grad.addColorStop(0, "yellow");
    grad.addColorStop(finishedColoredArea || 0, "yellow");

    grad.addColorStop(finishedColoredArea || 0, "white");
    grad.addColorStop(1, "white");

    ctx.moveTo(0, 30);
    ctx.lineTo(30, 30);
    ctx.lineTo(50, 0);
    ctx.lineTo(70, 30);
    ctx.lineTo(100, 30);
    ctx.lineTo(100, 30);
    ctx.lineTo(70, 60);
    ctx.lineTo(90, 100);
    ctx.lineTo(50, 75);
    ctx.lineTo(10, 100);
    ctx.lineTo(30, 60);
    ctx.lineTo(0, 30);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.stroke();
  }, [props])
  
  return <canvas ref={canvasRef} {...canvasProps}/>
}

export default Star
