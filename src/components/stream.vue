<template>
    <div class="row mt-4">
        <!-- STREAMER CARD -->
        <div class="mx-auto" :style="{display:errorDisplay}"><p>{{errorMsg}}</p></div>
        <div class="streamer-card card mx-auto " style="width: 50vw;" :style="{display:cardDisplay}">
        <img class="card-img-top" :src="profileImage" :alt="displayName">
        <div class="card-body">
            <h5 class="card-title "><span class="font-weight-bold">Display Name: </span>{{displayName}}</h5>
            <p class="card-text lead"><span class="font-weight-bold">Login: </span>{{login}}</p>
            <p class="card-text"><span class="font-weight-bold">ID: </span>{{id}}</p>
            <a :href="url" target="_blank" class="btn btn-primary">Visit</a>
        </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
// TWITCH URL AND CLIENT ID
const url = "https://api.twitch.tv/helix/users?login=";
const clientID = "dodtr73g0wvdjl1qfd3mrde56t7oib";

export default {
    name:"stream",
    props:{
        stream: String,
    },
    watch: {
        stream() {
            // SETS API CALL
            this.streamName = this.stream;
            const apiCall = url + this.streamName;
            // GETS TWITCH DATA
            axios({
                    method: 'get',
                    url: apiCall,
                    headers: {
                        "Client-ID": clientID
                    }
                    
                })
                // SETS TWITCH DATA AND INIT CARD
                .then(res => {
                    res = res.data.data[0]
                    this.profileImage = res.profile_image_url; 
                    this.displayName = res.display_name;
                    this.login = res.login;
                    this.id = res.id;
                    if(this.cardDisplay=="none"){
                        setTimeout(()=>{
                            this.errorDisplay = "none"
                            this.cardDisplay = "block";
                        },125);
                    }
                    this.url = "https:www.twitch.tv/" + this.login;
                })
                // SET ERROR MESSAGE
                .catch((error) => {
                    if( this.errorDisplay == "none" ){ 
                        this.errorDisplay = "block"
                        this.cardDisplay = "none";
                        this.errorMsg = "User Not Found, Please Search Again :)";
                    }
                })
        }
    },
    data(){
        return {
            streamName: null,
            id: null,
            displayName: null,
            profileImage: null,
            login: null,
            url:null,
            errorMsg:null,
            errorDisplay: "block",
            cardDisplay: "none",
            
        }
    }
}
</script>
<style>
.streamer-card{
    min-width: 275px;
    max-width: 350px;
}
</style>
