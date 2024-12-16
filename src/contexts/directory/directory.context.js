import { createContext } from "react";

import DIRECTORY_SECTIONS from "./directory.sections.data";

const DirectoryContext = createContext(DIRECTORY_SECTIONS);

export default DirectoryContext;