import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutation";
import { state } from "./state";

export const _day = {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
} 