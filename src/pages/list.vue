<template>
  <v-container class="w-100 h-100 d-flex align-center justify-center">
    <v-row
      style="
        background-color: rgba(245, 245, 245, 0.85);
        border-radius: 12px;
        padding: 16px;
      "
    >
      <v-col cols="12" class="d-flex align-center justify-center">
        <h1 class="text-center">待辦事項</h1>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="新增事項"
          variant="outlined"
          clearable
          append-icon="mdi-plus"
          @keydown.enter="onInputSubmit"
          @click:append="onInputSubmit"
          v-model="newItem"
          :rules="[rules.required, rules.length]"
          ref="newItemTextField"
        ></v-text-field>
        <v-table
          class="mt-1"
          :style="{
            boxShadow:
              '0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12))',
          }"
        >
          <thead class="text-center" :style="{ backgroundColor: '#F3E5F5' }">
            <tr>
              <th class="text-center">名稱</th>
              <th class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="item.id">
              <td class="text-center py-2">
                <span v-show="!item.edit">{{ item.name }}</span>
                <v-text-field
                  v-show="item.edit"
                  v-model="item.model"
                  :rules="[rules.required, rules.length]"
                  autofocus
                  @keydown.enter="onEditInputSubmit(item.id, i)"
                  ref="editItemTextField"
                ></v-text-field>
              </td>
              <td class="text-center py-2">
                <template v-if="!item.edit">
                  <v-btn
                    icon="mdi-pencil"
                    @click="editItem(item.id)"
                    class="mr-3"
                  ></v-btn>
                  <v-btn icon="mdi-delete" @click="delItem(item.id)"></v-btn>
                </template>
                <template v-else>
                  <v-btn
                    icon="mdi-check"
                    @click="onEditInputSubmit(item.id, i)"
                  ></v-btn>
                  <v-btn
                    icon="mdi-undo"
                    @click="cancelEditItem(item.id)"
                  ></v-btn>
                </template>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12" class="mt-3">
        <h1 class="text-center">完成事項</h1>
      </v-col>
      <v-col cols="12">
        <v-table
          :style="{
            boxShadow:
              '0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12))',
          }"
        >
          <thead :style="{ backgroundColor: '#F3E5F5' }">
            <tr class="text-center">
              <th class="text-center">名稱</th>
              <th class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in finishedItems" :key="item.id">
              <td class="text-center py-2">{{ item.name }}</td>
              <td class="text-center py-2">
                <v-btn
                  icon="mdi-delete"
                  @click="delFinishItem(item.id)"
                ></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useListStore } from "@/stores/list";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    title: "番茄鐘 ｜ 清單",
  },
});

const list = useListStore();
const {
  addItem,
  editItem,
  delItem,
  cancelEditItem,
  confirmEditItem,
  delFinishItem,
} = list;
const { items, finishedItems } = storeToRefs(list);

const newItem = ref("");
const newItemTextField = ref(null);
const editItemTextField = ref([]);

const rules = {
  required: (value) => {
    return Boolean(value) || "欄位必填";
  },
  length: (value) => {
    return value.length >= 3 || "必須三個字";
  },
};

const onInputSubmit = async () => {
  const validate = await newItemTextField.value.validate();
  console.log(validate);
  if (validate.length > 0) return;
  addItem(newItem.value);
  newItemTextField.value.reset();
};

const onEditInputSubmit = async (id, i) => {
  const validate = await editItemTextField.value[i].validate();
  if (validate.length > 0) return;
  confirmEditItem(id);
};
</script>
