import{af as r}from"./index-LDda3MFB.js";const a=r("settings",{state:()=>({alarms:[{id:1,name:"鬧鐘",file:new URL(""+new URL("alarm-BgEXsNyQ.mp3",import.meta.url).href,import.meta.url).href},{id:2,name:"歡呼聲",file:new URL(""+new URL("yay-BvpvSbeL.mp3",import.meta.url).href,import.meta.url).href}],selectedAlarm:1}),getters:{selectedAlarmFile(){const e=this.alarms.findIndex(t=>t.id===this.selectedAlarm);return this.alarms[e].file}},persist:{key:"pomodoro-settings",paths:["selectedAlarm"]}});export{a as u};
