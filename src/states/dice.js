import { Machine } from "xstate";

export const diceMachine = Machine({
  id: "dice",
  initial: "wait",
  states: {
    wait: {
      on: {
        ROLLING: "rolling"
      }
    },
    rolling: {
      on: {
        LAY: "lay"
      }
    },
    lay: {
      on: {
        ROLLING: "rolling"
      }
    },
    end: { type: "final" }
  }
});
