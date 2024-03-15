import { atom } from "recoil";

interface SubscribeState {
    subscribeState: boolean;
  }
  
  export const subscribeState = atom<SubscribeState>({
    key: "subscribeState",
    default: {
      subscribeState: false,
    },
  });