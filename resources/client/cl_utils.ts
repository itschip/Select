export const NuiCallback = (event: string, cb: Function) => {
  RegisterRawNuiCallback(event, (data: any) => {
    const parsed = JSON.parse(data?.body);
    cb(parsed);
  });
};
