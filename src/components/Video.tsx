import { useState, useRef } from 'react';

import './Video.css'

function Video({ title, url }: { title: string; url: string}) {
    const [counter, setCounter] = useState(0);
    const inputRef = useRef<HTMLVideoElement>(null);

    return (
        <video ref={inputRef} id={title} className='video' width={600} height={600} autoPlay onEnded={() => {
            if (counter < 1) {
                inputRef.current?.play();
                setCounter(x => x + 1);
            }
        }}>
            <source src={url} type="video/mp4" />
        </video>
    )
  }
  
export default Video
  