import { Col } from "antd";
import { ShortMe } from "../../components/shortMe";

export function WelcomePage(props) {
    return(
        <div style={{display:'flex',height:'100vh',width:'100vw',justifyContent:'center',alignItems:'center'}}>
            <ShortMe/>
        </div>
    )
}