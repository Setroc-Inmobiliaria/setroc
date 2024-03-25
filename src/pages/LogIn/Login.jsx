import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { auth } from "../../firebase"; // Importa tu instancia de Firebase Authentication
import TextFieldComponent from "../../components/styledComponents/textfield/TextfieldComponent";
import setroc from '../../assets/inmobiliaria.png';
import { goToTop } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../../components/pageComponents/Loader/Loader";

// eslint-disable-next-line react/prop-types
const LoginComponent = ({ setLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        goToTop()
        localStorage.getItem('auth')

    }, [])

    const handleSignIn = async () => {
        setIsLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password).then((res) => {
                console.log(res);
            })
            setLoggedIn(true);
            localStorage.setItem('auth', true)
            navigate("/admin/dashboard");
            setIsLoading(false)
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setError(error.message)
            setLoggedIn(false);
            setIsLoading(false)
        }
    };

    return (
        <div className="flex flex-col w-full justify-center items-center h-100 p-10 md:p-20 gap-10">
            <img src={setroc} alt="setroc" className="w-52 md:w-72"/>
            <div className="flex flex-col w-full md:w-[50%] gap-12 md:p-24">
                {isLoading ? <div className="flex w-full justify-center items-center"><Loader/></div>: null}
                <TextFieldComponent placeholder="Correo electrónico" setData={setEmail} value={email}/>
                <TextFieldComponent placeholder="Contraseña" type="password" setData={setPassword} value={password}/>
                {error.length > 0 ? <div>{error}</div> : null}
                <Button
                    onClick={handleSignIn}
                    sx={{
                        background : '#276296',
                        color: 'white',
                        '&:hover':{
                            color: 'white',
                            background: '#67ADD4'
                        }
                    }}
                >
                    Iniciar Sesión
                </Button>
            </div>
        </div>
    );
};

export default LoginComponent;
