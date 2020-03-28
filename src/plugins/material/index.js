import Vue from "vue";
import {
  MdButton,
  MdContent,
  MdToolbar,
  MdCard,
  MdField
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

const elements = [MdButton, MdContent, MdToolbar, MdCard, MdField];

elements.forEach(element => Vue.use(element));
