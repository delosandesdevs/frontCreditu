import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTest } from '../../redux/action';

const User = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const changer = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form>
        <input type="text" onChange={changer} name="test" />
        <label>nombre</label>
        <input
          type="button"
          value="enviar"
          onClick={() => dispatch(addTest(data))}
        />
      </form>
    </div>
  );
};

export default User;
