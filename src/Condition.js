import Hello from './Hello';
import Hello2 from './Hello2';

function Condition() {
    let isLogin = true;
    
    if(isLogin){
        return(
        <Hello /> 
        );
    } else {
      return ( 
      <Hello2 /> 
      );
    }

}

export default Condition;