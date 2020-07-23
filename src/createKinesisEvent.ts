
export const createKinesisEvent = (payload: unknown): any => {

    const strPayload = JSON.stringify(payload);
    const encodedPayload = Buffer.from(strPayload).toString('base64');

    return {
      event: {
        kinesis: {
          data: encodedPayload,
        },
      },
    } as any;
  };
  
