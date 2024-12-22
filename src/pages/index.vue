<template>
  <v-container class="w-100 h-100 d-flex align-center justify-center">
    <v-row>
      <v-col cols="12" class="d-flex justify-center mb-4">
        <v-sheet
          :elevation="10"
          style="
            border-radius: 12px;
            width: 300px;
            background-color: rgba(242, 227, 245, 0.8);
          "
        >
          <h1 class="text-center" style="color: black">
            目前事項 {{ currentText }}
          </h1>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet
          color="#F3B4C4"
          elevation="4"
          class="mx-auto d-flex align-center justify-center flex-wrap text-center"
          style="max-width: 600px; border-radius: 12px"
        >
          <v-col cols="12" class="text-center">
            <h1
              :style="{
                color: $vuetify.theme.themes.light.secondary,
                fontSize: '24px',
              }"
            >
              剩餘時間
            </h1>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <div
              :style="{
                backgroundColor: '#FFFFFF',
                width: '100px',
                padding: '4px',
                fontSize: '24px',
                border: '1px solid black',
                borderRadius: '5px',
              }"
              class=""
            >
              {{ currentTime }}
            </div>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn
              icon="mdi-play"
              @click="startTimer"
              :disabled="
                status === STATUS.COUNTING ||
                (currentItem.length === 0 && items.length === 0)
              "
            ></v-btn>
            <v-btn
              icon="mdi-pause"
              @click="pauseTimer"
              :disabled="status !== STATUS.COUNTING"
              class="mx-3"
            ></v-btn>
            <v-btn
              icon="mdi-skip-next"
              @click="finishTimer"
              :disabled="currentItem.length === 0"
            ></v-btn>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { definePage } from "vue-router/auto";
import { useListStore } from "@/stores/list";
import { useSettingsStore } from "@/stores/settings";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import { useWebNotification } from "@vueuse/core";

definePage({
  meta: {
    title: "番茄鐘",
  },
});

const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2,
};

const status = ref(STATUS.STOP);

const list = useListStore();
const { currentItem, items, timeleft } = storeToRefs(list);
const { setCurrentItem, countdown, setFinishItem } = list;

const settings = useSettingsStore();
const { selectedAlarmFile } = storeToRefs(settings);

let timer = 0;
const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem();
  }

  status.value = STATUS.COUNTING;

  timer = setInterval(() => {
    countdown();
    if (timeleft.value === 0) {
      finishTimer();
    }
  }, 1000);
};

const pauseTimer = () => {
  status.value = STATUS.PAUSE;
  clearInterval(timer);
};

const finishTimer = () => {
  clearInterval(timer);
  status.value = STATUS.STOP;

  const audio = new Audio();
  audio.src = selectedAlarmFile.value;
  audio.play();

  const { show, isSupported } = useWebNotification({
    title: "事項完成",
    body: currentItem.value,
    icon: new URL("@/assets/pomodoroTechnique.png", import.meta.url).href,
  });

  if (isSupported.value) {
    show();
  }

  setFinishItem();

  if (items.value.length > 0) {
    startTimer();
  }
};

const currentText = computed(() => {
  if (currentItem.value.length > 0) {
    return currentItem.value;
  } else if (items.value.length > 0) {
    return "點擊開始";
  } else {
    return "無";
  }
});

const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60)
    .toString()
    .padStart(2, "0");
  const s = (timeleft.value % 60).toString().padStart(2, "0");
  return m + ":" + s;
});
</script>
