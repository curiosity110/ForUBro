
const Quote = ({quote}) => {
    console.count("-> Quote component re-rendered");
    return (
        <div>
            {quote}
        </div>
    );
};


export default Quote;