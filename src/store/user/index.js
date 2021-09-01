import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutation";
import { state } from "./state";

export const user = {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
} 