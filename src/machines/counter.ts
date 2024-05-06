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
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYgEEARCgbQAYBdRUABwHtZcAXXV-JkAB6IATAEYAbADoAnAGZpAdgCsS2gBZZspaIAcAGhABPEcLWTZ44cIWjRy6To1KAvs4NoseQqQDKAVQAhABUAJTIAYSC6RiQQNg5uXn4hBABaXSVJUTVhTVodVR0dK2EDYwQxHUlhcS1xUUUlBTVaJTVXdwwcAmISHwBRKIZ+eK4ePliU20laWnlaS3ElHVlTBTLEWUcs4q1pVV1aUSVxVzcQfFYIOH4Pbu8R9jGkycQ7SXE1NSVZW3FaYTFJSKDYIWQAyQKJb-Jo2YRyZpnZxAA */
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

  id: "(machine)"
});