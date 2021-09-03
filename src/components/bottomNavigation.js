import { HomeOutlined,MenuOutlined,UserOutlined } from '@ant-design/icons'
export function BottomNavigation(props) {
    return(
        <div style={{position:'absolute',zIndex:1000,bottom:32,left:0,right:0,display:'flex',justifyContent:'center',alignItems:'center',padding:4}}>
            <div style={{flexDirection:'row',display:'flex',border:'1px solid black',borderRadius:24,padding:24,justifyContent:'space-around'}} className="bottomNav">
                <HomeOutlined style={{fontSize:24,cursor:'pointer'}}/>
                <MenuOutlined style={{fontSize:24,cursor:'pointer'}}/>
                <UserOutlined style={{fontSize:24,cursor:'pointer'}}/>
            </div>
        </div>
    )
}