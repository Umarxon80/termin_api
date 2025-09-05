import jwt from "jsonwebtoken";
import config from "config";

class JwtService{
    constructor(accessKey,refreshKey,accessTime,refreshTime){
        this.accessKey=accessKey;
        this.refreshKey=refreshKey;
        this.accessTime=accessTime;
        this.refreshTime=refreshTime;
    }
    generateTokens(payload){
    
        console.log(config.get("access_time"));
        
        const accessToken=jwt.sign(payload,this.accessKey,{expiresIn:this.accessTime})
        const refreshToken=jwt.sign(payload,this.refreshKey,{expiresIn:this.refreshTime})
        return{
            accessToken,
            refreshToken
        }
    }
    async verifyAccessToken(token){
        return jwt.verify(token,this.accessKey)
    }
    async verifyRefreshToken(token){
        return jwt.verify(token,this.refreshKey)
    }
}


export default new JwtService(
    config.get("access_key"),
    config.get("refresh_key"),
    config.get("access_time"),
    config.get("refresh_time")
)