//! For normal counter app
export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const reset = () => ({
  type: "RESET",
});

//! For persisted counter app
export const incrementPersist = () => ({
    type: "INCREMENT_PERSIST",
  });
  
  export const decrementPersist = () => ({
    type: "DECREMENT_PERSIST",
  });
  
  export const resetPersist = () => ({
    type: "RESET_PERSIST",
  });

//! For namespaced counter app
export const plus = data => ({
  type: `${data}@@@INCREMENT`
});

export const minus = data => ({
  type: `${data}@@@DECREMENT`
});

export const zero = data => ({
  type: `${data}@@@RESET`
});
