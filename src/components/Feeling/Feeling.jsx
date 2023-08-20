import { useDispatch } from 'react-redux';

function Feeling() {

    const [feeling, setFeeling] = useState(0);
    const dispatch = useDispatch();


    return(
        <div>
    <h1>How are you feeling today?</h1>
      <input type='number' placeholder='1-5' min={1} max={5}></input>
      </div>
    )
}

export default Feeling;