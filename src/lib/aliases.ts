import { addAlias } from "module-alias";

const registerAlieses = (root: string, folder: string[]): void => {
   folder.map(path => addAlias(path, `${root}/${path}`));
};
export { registerAlieses };
