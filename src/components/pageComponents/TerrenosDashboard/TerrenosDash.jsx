

// eslint-disable-next-line react/prop-types
const TerrenosDash = ({terrenosFB}) => {

    console.log(terrenosFB);
    const str = JSON.stringify(terrenosFB)


    return (
        <h1>{str}</h1>
    )
}

export default TerrenosDash