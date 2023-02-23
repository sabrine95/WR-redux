
import { connect } from 'react-redux';
import {INCRIMENT,DECRIMENT} from './redux/Actions/type'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>props.MunBtn()}> - </button>
        {props.count}
        <button onClick={()=>props.plsBtn()}> + </button>
      </header>
    </div>
  );
}


const mapStateToProps= (state) => {
    return {count : state.CountReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    plsBtn : () => dispatch({type:INCRIMENT}),
    MunBtn : () => dispatch({type :DECRIMENT})
  }
}

export default connect(mapStateToProps , mapDispatchToProps )(App) ;
