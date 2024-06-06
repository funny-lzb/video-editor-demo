import React, { useState, useRef } from 'react';
import { Rnd, RndResizeCallback, RndDragCallback } from 'react-rnd';

interface ClipProps {
  id: string;
  start: number;
  length: number;
  src: string;
  onDragStop: (id: string, start: number) => void;
  onResizeStop: (id: string, length: number) => void;
}

export const Clip: React.FC<ClipProps> = ({
  id,
  start,
  length,
  src,
  onDragStop,
  onResizeStop,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const positionRef = useRef({ x: start, y: 0 });

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDrag: RndDragCallback = (_e, d) => {
    positionRef.current = { x: d.x, y: 0 };
  };

  const handleDragStop: RndDragCallback = (_e, d) => {
    handleMouseUp();
    onDragStop(id, d.x);
  };

  const handleResizeStop: RndResizeCallback = (_e, _direction, ref) => {
    handleMouseUp();
    onResizeStop(id, parseFloat(ref.style.width));
  };

  // 计算帧的数量
  const frameCount = Math.floor(length / 10); // 每10%作为一帧
  const frames = Array.from({ length: frameCount }, (_, i) => (
    <img
      key={i}
      src={src}
      alt={`frame-${i}`}
      style={{
        width: `${100 / frameCount}%`,
        height: '100%',
        objectFit: 'cover',
      }}
    />
  ));

  return (
    <Rnd
      size={{ width: `${length}%`, height: '100%' }}
      position={positionRef.current}
      onDrag={handleDrag}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      bounds='parent'
      enableResizing={{ left: true, right: true }}
      dragHandleClassName='handle'
      disableDragging={!isDragging}
      style={{
        backgroundColor: 'gray',
        cursor: isDragging ? 'move' : 'pointer',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className='handle'
        style={{ width: '100%', height: '100%', display: 'flex' }}
      >
        {frames}
      </div>
    </Rnd>
  );
};
