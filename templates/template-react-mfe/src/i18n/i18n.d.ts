export type MessageMap = {
  [key: string]: { [key: string]: string | MessageMap } | string;
};

export default MessageMap;
