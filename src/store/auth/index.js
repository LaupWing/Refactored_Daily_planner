import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutation";
import { state } from "./state";

export const auth = {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
} 