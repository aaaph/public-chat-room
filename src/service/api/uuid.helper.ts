const validateUUID = (str: string): boolean => {
   // eslint-disable-next-line no-useless-escape
   return /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/.test(
      // validate by regex
      str,
   );
};
export { validateUUID };
