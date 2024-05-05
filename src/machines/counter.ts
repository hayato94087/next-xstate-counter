import { createMachine, assign, setup } from 'xstate';

type Context = {
  count: number;
}

type Event =  { type: "SET"; value: number } | {type: "ADD"; value:number} | {type: "SUBTRACT"; value:number}| {type: "SET"; value:number};

type Input = {
  initialCount?: number
};

export const counterMachine = setup({
  types: {
    context:{} as Context,
    events: {} as Event,
    input: {} as Input,
  },
}).createMachine({
  context: ({ input }) => ({
    count: input.initialCount || 0
  }),
  on: {
    ADD: {
      actions: assign({
        count: ({ context, event }) => context.count + event.value,
      }),
    },
    SUBTRACT: {
      actions: assign({
        count: ({ context, event }) => context.count - event.value,
      }),
    },
    SET: {
      actions: assign({
        count: ({event}) => event.value,
      }),
    }
  },
});