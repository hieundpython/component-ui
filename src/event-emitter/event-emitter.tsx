import React, { useContext, useEffect, useRef } from 'react';

const createSubscription = () => {
  const subscribers = new Set();
  const subscribe = (fn: Function) => subscribers.add(fn);
  const unsubscribe = (fn: Function) => subscribers.delete(fn);
  const emit = (...args: any[]) => subscribers.forEach((c) => (c as Function)(...args));
  return {
    subscribe,
    unsubscribe,
    emit
  };
};

const EmitterContext = React.createContext(createSubscription());

const createEmitterProvider = (subscription: any) =>
  function EmitterProvider(props: { children?: React.ReactNode }) {
    return <EmitterContext.Provider value={subscription}>{props.children}</EmitterContext.Provider>;
  };

export const useProvider = () => {
  const emitter = useRef(createSubscription());
  const Provider = createEmitterProvider(emitter.current);
  return Provider;
};

export const useEmit = () => {
  const { emit } = useContext(EmitterContext);
  return emit;
};

export const useSubscriber = (fn: Function, listenTo?: React.DependencyList | undefined) => {
  const { subscribe, unsubscribe } = useContext(EmitterContext);

  useEffect(() => {
    subscribe(fn);
    return () => {
      unsubscribe(fn);
    };
  }, [subscribe, fn, unsubscribe]);
};
