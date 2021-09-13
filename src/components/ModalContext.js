import { createContext } from "react";

export const ModalContext = createContext(null);

// const ModalContext = () => {
//   const [modal, setModal] = useState(false);
//   return (
//     <AppContext.Provider value={{ modal, setModal }}>
//       <PostModal />
//       <PostDiv />
//     </AppContext.Provider>
//   );
// };
