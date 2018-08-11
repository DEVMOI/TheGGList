<template>
    <div class="mx-auto">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src :src="profileImage" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{displayName}}</h5>
            <p class="card-text">ID: {{id}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

const url = "https://api.twitch.tv/helix/users?login=";
const clientID = "dodtr73g0wvdjl1qfd3mrde56t7oib";

export default {

    name:"stream",
    props:{
        stream: String,
    },
    watch: {
        stream() {
            this.streamName = this.stream;
            const apiCall = url + this.streamName
            console.log(apiCall)

            axios({
                    method: 'get',
                    url: apiCall,
                    headers: {
                        "Client-ID": clientID
                    }
                    
                })
                .then(res => { 
                    this.id = res.data.data[0].id;
                    this.displayName = res.data.data[0].display_name;
                    this.profileImage = res.data.data[0].profile_image_url;
                    console.log(this.id)
                    console.log(this.displayName);
                    console.log(this.profileImage);
                })
                .catch(error => console.log(error))
        }
    },
    data(){
        return {
            streamName: null,
            id: null,
            displayName: null,
            profileImage: null
        }
    },
    computed: {}
}
</script>
