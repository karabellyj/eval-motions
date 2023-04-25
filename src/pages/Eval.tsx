import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecord } from 'thin-backend';
import Video from '../components/Video';

function Eval() {
    const [counter, setCounter] = useState(0);
    // const [data, setData] = useState(json);
    const [data, setData] = useState(() => 
        Array.from(Array(11).keys()).flatMap(
            n => Array.from(Array(4).keys()).map(v => `${n}-${v}`)
        ).sort(() => Math.random() - 0.5)
    );
    const navigate = useNavigate();

    async function addEval(params: any) {
        const insertedEval = await createRecord('evals', params);
    }

    if (counter >= data.length) {
        return (
            <div>
                <div>
                    <h2>That's all, folks!</h2>
                </div>
                <div className="card">
                    <div className='card-item'>
                        <button onClick={() => navigate('/')}>
                            Go home
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h2>Which one of these looks more natural?</h2>
                <h4>{1 + counter}/{data.length}</h4>
            </div>
            <div className="card">
                <div className='card-item'>
                    <Video key={counter} title='first' url={`/motions/0-${data[counter]}.mp4`}/>
                    
                    <button onClick={() => {
                        addEval({
                            motion: data[counter],
                            result: 0
                        });
                        setCounter(x => x + 1)
                        }}>
                        This one!
                    </button>
                </div>
                
                <div className='card-item'>
                    <Video key={counter} title='second' url={`/motions/1-${data[counter]}.mp4`}/>

                    <button onClick={() => {
                        addEval({
                            motion: data[counter],
                            result: 1
                        });
                        setCounter(x => x + 1)
                        }}>
                        This one!
                    </button>
                </div>
            </div>
            <div>
                <button onClick={() => navigate('/')}>Stop this madness, let me out!!!</button>  
            </div>
        </div>
    )
}

export default Eval
