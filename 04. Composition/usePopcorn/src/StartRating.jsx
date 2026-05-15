const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
};

const StarContainerStyle = {
    display: "flex",
    gap: "4px",
};

const textStyle = {
    lineHeight: "1",
    margin: "0",
};

function StartRating({ maxRating = 5 }) {
    return (
        <div style={containerStyle}>
            <div style={StarContainerStyle}>
                {Array.from({ length: maxRating }, (_, index) => (
                    <span>S{index + 1}</span>
                ))}
            </div>
            <p style={textStyle}>{maxRating}</p>
        </div>
    );
}

export default StartRating;
