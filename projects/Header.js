import logo from "../asserts/images/logoo.png"
export default function Header(){
    const mainStyle = {
        backgroundColor:"#8EAF6C",
        display:"flex",
        justifyContent: "space- arround",
        alignItems:"center",
    };
    const logostyle={
        heigth:"50px",
        width:"80px",
    };
    const headerStyle={
        color:"black",
        fontFamily:" black,san-serif ",
        paddingLeft:"450px",
    };
    return (
        <div style={mainStyle}>
            <div>
            <img src={logo} alt="Logo" style={logostyle} />
            </div>
            <div>
            <h1 style={headerStyle}><strong>DIET TRACKER</strong></h1>
            </div>
        </div>
    );
}




