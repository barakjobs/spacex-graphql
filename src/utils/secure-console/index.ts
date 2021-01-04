// if you want to see some values ​​and don't worry about console.log being visible in production

export const secureConsole = (shortDescription: string, value: any) =>
  process.env.NODE_ENV !== 'production' ? setTimeout(() => console.log(`${shortDescription}`, value), 3000) : null;
