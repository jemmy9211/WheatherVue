<script>
 export default {
    props: ['forcastdata'],
    data(){
        return{
            data:[],
            stime:[],
            etime:[],
            MaxT:[],
            MinT:[],
            PoPL:[],
            Wx:[]
        }
    },
    created(){
        this.data=this.forcastdata.split(',');
        this.Wx=this.data[5]
        this.MaxT=this.data[4]
        this.MinT=this.data[3]
        this.PoPL=this.data[2]
        this.etime=this.data[1][11]+this.data[1][12]
        this.stime=this.data[0][11]+this.data[0][12]
    }
  }
</script>

<template>
    <div class="shadow-lg col-lg-4 d-grid gap-1 bg-opacity-25 bg-dark text-white p-3 border border-light border-3">
        <h5>{{ stime }}點~{{ etime }}點</h5>
        <h4><strong>{{ Wx }}</strong></h4>
        最高溫:{{ MaxT }}
        <div class="progress">
            <div class="progress-bar bg-danger" v-bind:style="{'width': parseInt(MaxT)*2 +'%'}"></div>
        </div>
        最低溫:{{ MinT }}
        <div class="progress">
            <div class="progress-bar bg-success" v-bind:style="{'width': parseInt(MinT)*2 +'%'}"></div>
        </div>
        <h5>降雨機率 {{ PoPL }}%</h5>
        <div class="progress">
            <div class="progress-bar bg-info" v-bind:style="{'width': parseInt(PoPL) +'%'}"></div>
        </div>
    </div>
</template>

<style>

</style>
