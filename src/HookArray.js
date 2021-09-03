function ListItem({car, removeText}) {
    return(
        <li>
        <sapn>{car.carname} : {car.color}</sapn>
        <button type="button" onClick={function(){return(removeText(car.id));}}>삭제</button>
        </li>
    );
}



function HookArray({carArray, removeText}) {

    return(
        <ul>
            {/* map함수가 데이터를 가져와서 자동으로 동적 표시 */}
            {carArray.map(function(car){
                return(
                   <ListItem car={car} key={car.id} removeText={removeText}/>
                );
            })}
        </ul>
    );

}

export default HookArray;