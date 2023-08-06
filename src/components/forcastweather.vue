<script>
import axios from 'axios'
const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875';
export default {
  data() {
    return {
      wdata:[],
      MaxT:[],
      MinT:[],
      PoPL:[],
      Wx:[],
      totaldata:[]
    };
  },
  beforeCreate(){
    axios.get(url).then((res)=>{
      console.log(res.data)
      var tep=this.$route.query.userId;
        switch(tep){
        case '0' : tep=11;break;
        case '1' : tep=6;break;
        case '2' : tep=1;break;
        case '3' : tep=15;break;
        case '4' : tep=2;break;
        case '5' : tep=3;break;
        case '6' : tep=14;break;
        case '7' : tep=7;break;
        case '8' : tep=5;break;
        case '9' : tep=12;break;
        case '10' : tep=18;break;
        case '11' : tep=14;break;
        default:tep=14;break;
      };
      this.wdata=res.data.records.location[tep]
      this.MaxT=res.data.records.location[tep].weatherElement[4].time
      this.MinT=res.data.records.location[tep].weatherElement[2].time
      this.PoPL=res.data.records.location[tep].weatherElement[1].time
      this.Wx=res.data.records.location[tep].weatherElement[0].time
      for(var i=0;i<3;i++){
        this.totaldata[i]=this.Wx[i].startTime+" to "+this.Wx[i].endTime+"/降雨率:"+this.PoPL[i].parameter.parameterName+"/最低溫:"+this.MinT[i].parameter.parameterName+"/最高溫:"+this.MaxT[i].parameter.parameterName+"/描述:"+this.Wx[i].parameter.parameterName
      }
    })
  }
};
</script>

<template>
  <div class="shadow-lg p-3 mb-5 bg-body rounded">
    <h3>{{ wdata.locationName }} 未來36小時預報</h3>
  </div>
  <div class="shadow-lg p-3 mb-5 bg-body rounded">
    <div v-for="x in totaldata">{{ x }}</div>
  </div>
</template>

<style>

</style>
