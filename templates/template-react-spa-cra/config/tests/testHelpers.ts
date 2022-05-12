export const tick = async (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout));

export const mockUseStyles = (useStylesFn: jest.Mock, classesArray: string[]) => {
  useStylesFn.mockReturnValue(
    classesArray.reduce((classes: Record<string, string>, className) => {
      classes[className] = className;
      return classes;
    }, {})
  );
};

export const mockFormatMessage = (formatMessageFn: jest.Mock) => {
  formatMessageFn.mockReturnValue({ formatMessage: jest.fn().mockImplementation((obj) => obj.id) });
};
