import Input from "./Input";
import Button from "./Button";

export default function Login(props) {
    return ( 
        <div>
            <form method="" action="">
                <h1 className="login-title">Please {props.isLogin ? "Login" : "Register"}</h1>
                <Input type="text" name="username" placeholder="Username" />
                <Input type="password" name="password" placeholder="Password" />
                {(props.isLogin ===false)&& <Input type="password" name="confPassword" placeholder="Confirm Password" />}
                <Button btnName="register" btnText={props.isLogin ? "Login" : "Register"}/>
            </form>
        </div> 
    );
}