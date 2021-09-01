import Props from "./Props";

// 객체 : Props.children
// 구조 분해 방식 : {children}

function Section(props){
    return(
        <section className="section">
            {props.children}
        </section>
    );
}
export default Section;