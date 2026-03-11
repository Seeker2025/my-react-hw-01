import PropTypes from "prop-types";

export function Section({title}){
    // console.log(title);
    
    return <div>{title  &&  <h1>{title}</h1>}
       
    </div>
};

Section.propTypes = {
    title: PropTypes.string,
};