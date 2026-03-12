import PropTypes from "prop-types";

export const Head =({title, children})=>{
    console.log(title);
    console.log(children);
    
    return (
        <>
            {children}
    <p>
        {title}
    </p>
        </>

    )
};

Head.propTypes = {
    title: PropTypes.string,
};