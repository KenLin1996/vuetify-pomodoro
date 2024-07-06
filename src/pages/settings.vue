<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">鈴聲設定</h1>
            </v-col>
            <v-col cols="12">
                <v-table theme="light"
                :style="{boxShadow:'0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12))'}"
                class="d-flex justify-space-between"
                >
                    <thead class='text-center' :style="{backgroundColor:'#F3E5F5'}">
                        <tr>
                            <th class='text-center'>名稱</th>
                            <th class='text-center'>試聽</th>
                            <th class='text-center'>選擇</th>
                        </tr>
                    </thead>
                    <tbody class='text-center'>
                        <tr v-for='alarm in alarms' :key="alarm.id">
                            <td>{{ alarm.name }}</td>
                            <td class="d-flex align-center justify-center">
                                <audio :src="alarm.file" controls :style="{ padding:' 5px 0px'}"></audio>
                            </td>
                            <td>
                                <v-row justify="center">
                                    <v-col cols="auto">
                                        <v-radio-group v-model="selectedAlarm">
                                            <v-radio :value="alarm.id"></v-radio>
                                        </v-radio-group>
                                    </v-col>
                                </v-row>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { definePage } from 'vue-router/auto'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

definePage({
  meta: {
    title: '番茄鐘 | 設定'
  }
})
const settings = useSettingsStore()
const { alarms, selectedAlarm } = storeToRefs(settings)
</script>

<style scoped lang='scss'>
:deep(.v-input__details){
    display: none;
}
</style>
