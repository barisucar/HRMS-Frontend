import axios from "axios"

export default class SystemPersonelService {
  

    updateSystemPersonel(values){
    
        
        return axios.post("ttp://localhost:8080/api/SystemPersonel/update",values)
    }
}
