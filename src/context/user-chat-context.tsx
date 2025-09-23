"use client";

import { createContext, useContext, useState } from "react";

type ChatInitialValuesProps = {
  realtime: boolean;
  setRealTime: React.Dispatch<React.SetStateAction<boolean>>;
  chatroom: string | undefined;
  setChatRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
  chats: {
    message: string;
    id: string;
    role: "assistant" | "user" | null;
    createdAt: Date;
    seen: boolean;
  }[];
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        id: string;
        role: "assistant" | "user" | null;
        createdAt: Date;
        seen: boolean;
      }[]
    >
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatInitialValues: ChatInitialValuesProps = {
  chatroom: undefined,
  chats: [],
  setChats: () => undefined,
  loading: false,
  setLoading: () => undefined,
  realtime: false,
  setRealTime: () => undefined,
  setChatRoom: () => undefined,
};

const chatContext = createContext(ChatInitialValues);
const { Provider } = chatContext;

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState(ChatInitialValues.chats);
  const [loading, setLoading] = useState(ChatInitialValues.loading);
  const [chatroom, setChatRoom] = useState(ChatInitialValues.chatroom);
  const [realtime, setRealTime] = useState(ChatInitialValues.realtime);

  const values = {
    chats,
    setChats,
    loading,
    setLoading,
    chatroom,
    setChatRoom,
    realtime,
    setRealTime,
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useChatContext = () => {
  const state = useContext(chatContext);
  return state;
};
