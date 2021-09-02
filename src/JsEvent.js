function JsEvent() {
    let msg = 'In react';
    let number = 1;

    const printConsole = () => {
        console.log('hello world');
    }

    const add = () => {
        number += 1;
        console.log(number);
    }

    const sub = () => {
        number -= 1;
        console.log(number);
    }

    return(
        <>
        <div>
            <button type="button" onClick={printConsole}>
            print {msg}
            </button>
        </div>
        <div>
        <div>{number}</div>
        <button type="button" onClick={add}>ADD</button>
        <button type="button" onClick={sub}>SUB</button>
        </div>
        </>
    );
}

export default JsEvent;