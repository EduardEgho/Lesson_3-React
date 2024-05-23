import {useDispatch, useSelector} from "react-redux";

const CounterComponent = () => {
    const counter = useSelector(state => state.counter)
  return (
      <span>{counter}</span>
  )
}

const ButtonComponent = ({sign}) => {
    const dispatch = useDispatch()
  return (
      <button
          onClick={() => {
              if (sign === '-') {
                  dispatch({ type: 'decrement' })
              } else {
                  dispatch({ type: 'increment' })
              }
          }}
      >{sign}</button>
  )
}

const ContainerComponent = () => {
    return (
        <div>
            <CounterComponent/>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <ButtonComponent sign="-"/>
            <ContainerComponent/>
            <ButtonComponent sign="+"/>
      </div>
          )
}

export default App